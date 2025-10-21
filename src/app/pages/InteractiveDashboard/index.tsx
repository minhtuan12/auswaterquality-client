import React, { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import dayjs from "dayjs";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BaseHelmet, ConfigurationText, FormDropdown, HomeTitle } from "../../components";
import { DB_STATE, PARAMETER_TYPE_OPTIONS, STATE_OPTIONS, } from "../../utils/mocks/options";
import { Button, DatePicker, Slider, Tabs } from "antd";
import ParametersTab from "./ParametersTab";
import { ParameterDataType } from "../../types";
import { useFetchCommunities, useInteractiveChart } from "../../hooks";
import { RangePickerProps } from "antd/es/date-picker";
import DotLightQualityChart from "./DotLightQualityChart";
import ParameterTrendChart from "./ParameterTrendChart";
import QualityTimeRangeBarChart from "./QualityTimeRangeBarChart";
import ExceedancesGroup from "./ExceedancesGroup";
import LineChart from "./LineChart";
import { ParameterType } from "../../enums/Parameter";
import ParametersJson from "../../../../public/jsons/parameters.json";
import ScatterCommunity from "./ScatterCommunity";
import { ADWRService } from "../../services";
import { useLocation } from "react-router-dom";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useConfiguration, useContextModal } from "../../contexts";
import styles from "./styles.module.css";

const { RangePicker } = DatePicker;

export type InteractiveDashboardFilter = {
  state: string | null;
  locationType: string | null;
  community: string | null;
  guideline: string | null;
  parameterType: string;
  parameter: string | null;
  healthParameters: string | null;
  aestheticParameters: string | null;
  othersParameters: string | null;
};

const DEFAULT_YEAR = 2022;

const InteractiveDashboardPage = () => {
  const {
    data: communities,
    options: communitiesOptions,
    onChangeState,
  } = useFetchCommunities({ hasAll: true });
  const location = useLocation();
  const [parameters] = useState<any>(ParametersJson);
  const [filter, setFilter] = useState<InteractiveDashboardFilter>({
    state: null,
    locationType: null,
    community: null,
    guideline: null,
    parameterType: PARAMETER_TYPE_OPTIONS[0].value,
    parameter: null,
    healthParameters: null,
    aestheticParameters: null,
    othersParameters: null
  });
  const [selectedYears, setSelectedYears] = useState<
    [dayjs.Dayjs, dayjs.Dayjs] | null
  >(null);
  const lastYears = useRef({ minYear: 0, maxYear: 0 });
  const [currentYear, setCurrentYear] = useState(DEFAULT_YEAR);
  const [yearSlider, setYearSlider] = useState({
    minYear: 2008,
    maxYear: 2022,
    years: [],
  });
  const {
    failedParameter,
    exceedancesTreeMap,
    qualityTimeRange,
    dotLightQuality,
    lineChart,
    scatterCommunity,
  } = useInteractiveChart({ communities, filter, selectedYears, currentYear });
  const [tab, setTab] = useState("parameters");
  const [isPlay, setIsPlay] = useState(true);
  const { methodology } = useContextModal();
  const { configurations } = useConfiguration();
  const { chartNote } = configurations.data;

  const isCommunity = filter.community && filter.community !== "All";

  const resetFilter = () => {
    setFilter((pre) => ({
      ...pre,
      state: null,
      locationType: null,
      community: null,
      guideline: null,
      parameterType: PARAMETER_TYPE_OPTIONS[0].value,
      parameter: null,
      healthParameters: null,
      aestheticParameters: null,
    }));
  };

  const handleChangeFilter = (value: string, name: string) => {
    if (name === "state") {
      onChangeState(value);
      setFilter((pre) => ({ ...pre, community: null }));
    }
    if (name === "community") {
      const findState = communities.find((item) => item.name === value);
      if (findState) {
        setFilter((pre) => ({
          ...pre,
          [name]: value,
          state: DB_STATE[findState.state],
        }));
        return;
      }
    }
    setFilter((pre) => ({
      ...pre,
      [name]: value,
      healthParameters: null,
      aestheticParameters: null,
      othersParameters: null,
    }));
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return (
      current && (current.year() < 2000 || current.year() > dayjs().year())
    );
  };

  const handleChange: any = (dates: [dayjs.Dayjs, dayjs.Dayjs] | null) => {
    if (!dates) {
      return;
    }
    const [start, end] = dates;
    const startYear = start.year();
    const endYear = end.year();
    setYearSlider(() => {
      let minYear = lastYears.current.minYear;
      let maxYear = lastYears.current.maxYear;
      if (startYear >= lastYears.current.minYear) {
        minYear = startYear;
      }
      if (endYear <= lastYears.current.maxYear) {
        maxYear = endYear;
      }
      return { minYear, maxYear, years: [] };
    });
    setSelectedYears(dates);
  };

  const handleChangeParameterFilter = (value: string, type: ParameterType) => {
    if (type === ParameterType.HEALTH) {
      setFilter((pre) => ({
        ...pre,
        healthParameters: value,
        aestheticParameters: null,
        othersParameters: null,
        parameter: value,
        parameterType: type,
      }));
    }
    if (type === ParameterType.AESTHETIC) {
      setFilter((pre) => ({
        ...pre,
        aestheticParameters: value,
        healthParameters: null,
        othersParameters: null,
        parameter: value,
        parameterType: type,
      }));
    }
    if (type === ParameterType.OTHERS) {
      setFilter((pre) => ({
        ...pre,
        aestheticParameters: null,
        healthParameters: null,
        othersParameters: value,
        parameter: value,
        parameterType: type,
      }));
    }
  };

  const [parameterOptions, setParameterOptions] = useState<any>({
    health: [],
    aesthetic: [],
    others: [],
  });
  const [loadingParameters, setLoadingParameters] = useState<boolean>(false);

  useEffect(() => {
    const fetchParameters = async () => {
      try {
        setLoadingParameters(true);
        ADWRService.getParameters({
          state: filter.state ?? "",
          community: filter.community ?? "",
        }).then(({ data }) => {
          setParameterOptions({
            health: (data.data?.[ParameterType.HEALTH] || []).map((item: any, index: any) => ({
              key: index,
              label: item.displayName,
              value: item.name,
            })),
            aesthetic: (data.data?.[ParameterType.AESTHETIC] || []).map((item: any, index: any) => ({
              key: index,
              label: item.displayName,
              value: item.name,
            })),
            others: (data.data?.[ParameterType.OTHERS] || []).map((item: any, index: any) => ({
              key: index,
              label: item.displayName,
              value: item.name,
            })),
          });
        }).finally(() => {
          setLoadingParameters(false);
        })
      } catch (e) {
        console.error(e);
      }
    }
    fetchParameters();
  }, [filter.state, filter.community, parameters]);

  // const getParameterOptions = useCallback(
  //   (type: ParameterType) => {
  //     let result: any = [];
  //     if ((filter.state && filter.state !== 'All') || (filter.community && filter.community !== 'All')) {
  //       ADWRService.getParameters({
  //         state: filter.state ?? "",
  //         community: filter.community ?? "",
  //       })
  //         .then(({ data }) => {
  //           console.log(data.data[type])
  //           result = (data.data?.[type] || []).map((item: any, index: any) => ({
  //             key: index,
  //             label: item,
  //             value: item
  //           }))
  //         })
  //         .catch(() => { })
  //         .finally(() => { });
  //       return result;
  //     } else {
  //       const clone = [...parameters];
  //       const result = clone.filter((item) => item.type === type);

  //       return result.map((item) => ({
  //         key: item._id,
  //         label: item.displayName,
  //         value: item.name,
  //       }));
  //     }
  //   },
  //   [parameters, filter.state, filter.community]
  // );

  const getParameter: ParameterDataType | undefined = useMemo(() => {
    return parameters.find((item: any) => item.name === filter.parameter);
  }, [filter.parameter, parameters]);

  const getMasks = useMemo(() => {
    const masks: Record<number, React.ReactNode> = {};
    const oldStep = (yearSlider.maxYear - yearSlider.minYear) % 2 === 0 ? 2 : 2;
    for (let i = yearSlider.minYear; i <= yearSlider.maxYear; i += oldStep) {
      const activeClassname =
        currentYear === i ? "wjh-slider--active" : "wjh-slider__mark-text";
      masks[i] = <div className={activeClassname}>{i}</div>;
    }
    return masks;
  }, [currentYear, yearSlider.maxYear, yearSlider.minYear]);

  const getTotalExceedanceValue = useMemo(() => {
    let health = 0,
      aesthetic = 0;
    exceedancesTreeMap.data.forEach((item) => {
      aesthetic += Object.entries(item.aestheticParameters).reduce(
        (a, [, val]) => a + val,
        0
      );
      health += Object.entries(item.healthParameters).reduce(
        (a, [, val]) => a + val,
        0
      );
    });
    return { health, aesthetic };
  }, [exceedancesTreeMap.data]);

  const onChangeYearSlider = (value: number) => {
    setCurrentYear(value);
    setIsPlay(false);
  };

  useEffect(() => {
    const state = location.state;
    if (state && state.tab) {
      setTab(state.tab);
      window.scrollTo({ top: 0 });
    }
    return () => {
      window.history.replaceState({}, "", window.location.href);
    };
  }, [location, location.state]);

  useEffect(() => {
    ADWRService.getRangeOfData({
      state: filter.state ?? "All",
      community: filter.community ?? "All",
      locationType: filter.locationType ?? "All",
    })
      .then(({ data }) => {
        lastYears.current.minYear = data.data.minYear;
        lastYears.current.maxYear = data.data.maxYear;

        setCurrentYear(data.data.maxYear);
        setYearSlider(data.data);
      })
      .catch(() => { })
      .finally(() => { });
  }, [filter.community, filter.locationType, filter.state]);

  useEffect(() => {
    if (!isPlay || tab === "parameters") {
      return;
    }
    const interval = setInterval(() => {
      setCurrentYear((pre) => {
        if (pre === yearSlider.minYear) {
          return yearSlider.maxYear;
        }
        return pre - 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlay, tab, yearSlider.maxYear, yearSlider.minYear]);

  return (
    <div className="wjh-news">
      <BaseHelmet title="Interactive Dashboard" />
      <Container style={{ paddingBottom: 40 }}>
        <HomeTitle title="Interactive Dashboard" />
        <div className={styles.interactive_dashboard_row}>
          <div className={styles.interactive_dashboard_filter}>
            <div className={styles.interactive_dashboard_filter_card}>
              <div className={styles.interactive_dashboard_filter_card_inner}>
                <Tabs
                  defaultActiveKey={tab}
                  activeKey={tab}
                  onChange={(key) => {
                    setTab(key);
                    resetFilter();
                  }}
                  items={[
                    {
                      key: "parameters",
                      label: "Parameters",
                      children: (
                        <Form>
                          <FormDropdown
                            options={STATE_OPTIONS}
                            value={filter.state}
                            onChange={(value) => {
                              handleChangeFilter(value, "state");
                            }}
                            placeholder="Select State"
                            className={styles.wjh_interactive_dashboard_select}
                          />
                          <FormDropdown
                            options={communitiesOptions}
                            value={filter.community}
                            onChange={(value) =>
                              handleChangeFilter(value, "community")
                            }
                            showSearch
                            placeholder="Select Location"
                            className={styles.wjh_interactive_dashboard_select}
                          />
                          <FormDropdown
                            controlId="form.selectParameterType"
                            options={parameterOptions[ParameterType.HEALTH]}
                            value={filter.healthParameters}
                            showSearch
                            onChange={(value) =>
                              handleChangeParameterFilter(
                                value,
                                ParameterType.HEALTH
                              )
                            }
                            placeholder="Select Health-based Parameter"
                            className={styles.wjh_interactive_dashboard_select}
                            loading={loadingParameters}
                            disabled={loadingParameters}
                          />
                          <FormDropdown
                            controlId="form.selectParameter"
                            options={parameterOptions[
                              ParameterType.AESTHETIC
                            ]}
                            value={filter.aestheticParameters}
                            showSearch
                            onChange={(value) =>
                              handleChangeParameterFilter(
                                value,
                                ParameterType.AESTHETIC
                              )
                            }
                            placeholder="Select Acceptability-based Parameter"
                            className={styles.wjh_interactive_dashboard_select}
                            loading={loadingParameters}
                            disabled={loadingParameters}
                          />
                          <FormDropdown
                            controlId="form.selectParameter"
                            options={parameterOptions[
                              ParameterType.OTHERS
                            ]}
                            value={filter.othersParameters}
                            showSearch
                            onChange={(value) =>
                              handleChangeParameterFilter(
                                value,
                                ParameterType.OTHERS
                              )
                            }
                            placeholder="Select Other Parameters"
                            className={styles.wjh_interactive_dashboard_select}
                            loading={loadingParameters}
                            disabled={loadingParameters}
                          />
                        </Form>
                      ),
                    },
                    {
                      key: "drinking_water_quality",
                      label: "Drinking Water Quality",
                      children: (
                        <Form>
                          <FormDropdown
                            options={STATE_OPTIONS}
                            value={filter.state}
                            onChange={(value) => {
                              handleChangeFilter(value, "state");
                            }}
                            placeholder="Select State"
                            className={styles.wjh_interactive_dashboard_select}
                          />
                          <FormDropdown
                            options={communitiesOptions}
                            value={filter.community}
                            onChange={(value) =>
                              handleChangeFilter(value, "community")
                            }
                            showSearch
                            placeholder="Select Location"
                            className={styles.wjh_interactive_dashboard_select}
                          />
                          {!isCommunity && (
                            <Form.Group
                              className="mb-3"
                              controlId={"form.selectYearRange"}
                            >
                              <RangePicker
                                picker="year"
                                size="large"
                                style={{ width: "100%" }}
                                disabledDate={disabledDate}
                                value={selectedYears}
                                onChange={handleChange}
                                id={{
                                  start: "startInput",
                                  end: "endInput",
                                }}
                              />
                            </Form.Group>
                          )}
                        </Form>
                      ),
                    },
                  ]}
                />
              </div>
              {tab === "drinking_water_quality" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                  }}
                >
                  <div className="text-center">
                    <Button
                      type="primary"
                      variant="outlined"
                      color="blue"
                      icon={<InfoCircleOutlined />}
                      onClick={() => {
                        methodology.open();
                      }}
                    >
                      Methodology
                    </Button>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <div className="scroll-hint-container">
                      <div className="scroll-hint">
                        <span>Scroll to view more</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M12.7071 3.29289C12.3166 2.90237 11.6834 2.90237 11.2929 3.29289L6.29289 8.29289C5.90237 8.68342 5.90237 9.31658 6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711L12 5.41421L16.2929 9.70711C16.6834 10.0976 17.3166 10.0976 17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289L12.7071 3.29289Z"
                              fill="#000000"
                            ></path>
                            <path
                              d="M7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L11.2929 20.7071C11.6834 21.0976 12.3166 21.0976 12.7071 20.7071L17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L12 18.5858L7.70711 14.2929Z"
                              fill="#000000"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.interactive_dashboard_data}>
            {tab === "parameters" && (
              <ParametersTab
                filter={filter}
                getMasks={getMasks}
                parameters={parameters}
                parameter={getParameter}
                currentYear={currentYear}
                onChangeYearSlider={onChangeYearSlider}
                yearSlider={yearSlider}
              />
            )}
            {tab !== "parameters" && (
              <div>
                {yearSlider.minYear !== yearSlider.maxYear && (
                  <div>
                    <Col
                      md={12}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        icon={
                          isPlay ? (
                            <i className="bi bi-pause" />
                          ) : (
                            <i className="bi bi-play" />
                          )
                        }
                        onClick={() => {
                          setIsPlay((pre) => !pre);
                        }}
                      />
                      <Slider
                        min={yearSlider.minYear ?? 2008}
                        max={yearSlider.maxYear ?? DEFAULT_YEAR}
                        step={2}
                        marks={getMasks}
                        defaultValue={yearSlider.maxYear ?? DEFAULT_YEAR}
                        value={currentYear}
                        onChange={onChangeYearSlider}
                        style={{ width: "90%" }}
                        classNames={{
                          root: "wjh-slider",
                          track: "wjh-slider__track",
                        }}
                      />
                    </Col>
                  </div>
                )}
                {isCommunity && (
                  <>
                    <Row>
                      <Col md={12}>
                        <DotLightQualityChart
                          data={dotLightQuality.data}
                          loading={dotLightQuality.loading}
                          currentYear={currentYear}
                          filter={filter}
                        />
                      </Col>
                    </Row>
                    <Row>
                      {failedParameter.data.map((item) => (
                        <Col
                          md={failedParameter.data.length === 1 ? 12 : 6}
                          key={item.parameterName}
                        >
                          <ParameterTrendChart
                            title={`Non-compliant parameter: ${item.parameterName}`}
                            parameter={getParameter}
                            data={item.data}
                          />
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
                {!isCommunity && (
                  <>
                    <Row>
                      <Col md={12}>
                        <ScatterCommunity
                          data={scatterCommunity.data}
                          loading={scatterCommunity.loading}
                        />
                      </Col>
                      <Col md={12}>
                        <ConfigurationText data={chartNote} />
                      </Col>
                    </Row>
                    <Row>
                      {exceedancesTreeMap.data.map((item, index) => {
                        return (
                          <Col key={"a" + index} md={12}>
                            <ExceedancesGroup data={item} />
                          </Col>
                        );
                      })}
                      <p>
                        Note: Size of coloured rectangle represents the number
                        of locations with exceedances for the corresponding
                        parameter in {currentYear}. One location can contribute
                        multiple exceedances. Totals:{" "}
                        {getTotalExceedanceValue.health} health-based and{" "}
                        {getTotalExceedanceValue.aesthetic} acceptability-based
                        exceedances
                      </p>
                    </Row>
                    {selectedYears && (
                      <LineChart
                        data={lineChart.data}
                        loading={lineChart.loading}
                        filter={filter}
                      />
                    )}
                    {selectedYears && (
                      <Row>
                        <Col md={12}>
                          <QualityTimeRangeBarChart
                            data={qualityTimeRange.data}
                            filter={filter}
                          />
                        </Col>
                      </Row>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InteractiveDashboardPage;
