import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Slider } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { BaseHelmet, ConfigurationText, HomeTitle } from "../../components";
import { DB_STATE } from "../../utils/mocks/options";
import WaterQualityMap from "./WaterQualityMap";
import { debounce } from "lodash";
// import html2canvas from "html2canvas";
import ConfirmScreenshotModal, { TakePhotoModalAction, } from "./ConfirmScreenshotModal";
import { ADWRService } from "../../services";
import { useConfiguration } from "../../contexts";
import { useFetchCommunities } from "../../hooks";

export type StateKey = "All" | "NT" | "WA" | "SA" | "NSW" | "VIC";
export type GISMapViewerFilter = {
  state: string | null;
  community: string | null;
  locationType: string | null;
  baseMap: string;
};

const YEAR = 2024;

const GISMapViewerPage = () => {
  const modalRef = useRef<TakePhotoModalAction>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const [currentYear, setCurrentYear] = useState<number>(YEAR);
  const [debouncedYear, setDebouncedYear] = useState<number>(YEAR);
  const [jsonDataLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<GISMapViewerFilter>({
    state: null,
    community: null,
    locationType: null,
    baseMap: "streets-navigation-vector",
  });
  const { data: communities } = useFetchCommunities({ hasAll: true });
  const [yearSlider, setYearSlider] = useState({
    minYear: 2008,
    maxYear: 2022,
    years: [],
  });
  const isAllState = !filter.state || filter.state === "All";
  const isAllLocationType =
    !filter.locationType || filter.locationType === "All";
  const { configurations } = useConfiguration();
  const { chartNote } = configurations.data;

  const filterCommunities = useMemo(() => {
    const data = communities.filter((item) => {
      const matchState = isAllState || DB_STATE[item.state] === filter.state;
      const matchLocation =
        isAllLocationType || item.locationType === filter.locationType;

      return matchState && matchLocation;
    });

    // Add "All" option at the top
    data.unshift({ name: "Select Location", state: "All" } as any);

    return data.map((item, index) => ({
      key: `${item.name}-${index}`,
      label: item.name,
      value: item.name,
    }));
  }, [
    communities,
    filter.locationType,
    filter.state,
    isAllLocationType,
    isAllState,
  ]);

  const handleChangeFilter = (value: string, name: string) => {
    if (name === "state") {
      setFilter((pre) => ({ ...pre, [name]: value, community: null }));
      return;
    }
    if (name === "community") {
      const findState = communities.find((item) => item.cencusName === value);
      if (findState) {
        setFilter((pre) => ({
          ...pre,
          [name]: value,
          state: DB_STATE[findState.state],
        }));
        return;
      }
    }
    setFilter((pre) => ({ ...pre, [name]: value }));
  };

  const updateDebouncedYear = useMemo(
    () =>
      debounce((value: number) => {
        setCurrentYear(value);
      }, 100),
    []
  );

  const onSlideChange = useCallback(
    (value: number) => {
      setDebouncedYear(value);
      updateDebouncedYear(value);
    },
    [updateDebouncedYear]
  );

  const handleTakePhoto = async () => {
    // if (!captureRef.current) return;
    // const canvas = await html2canvas(captureRef.current);
    // const imgData = canvas.toDataURL("image/png");
    // // Optional: download the image
    // const link = document.createElement("a");
    // link.href = imgData;
    // link.download = "screenshot.png";
    // link.click();
  };

  const onClearFilter = () => {
    setFilter((pre) => ({
      ...pre,
      state: null,
      community: null,
      locationType: null,
    }));
  };

  const onOpenModal = () => {
    modalRef.current?.open();
  };

  const getMasks = useMemo(() => {
    const masks: Record<number, number> = {};
    for (let i = yearSlider.minYear; i <= yearSlider.maxYear; i += 2) {
      masks[i] = i;
    }
    return masks;
  }, [yearSlider.maxYear, yearSlider.minYear]);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setDebouncedYear((pre: number) => {
    //     if (pre === 2022) {
    //       return 2008;
    //     }
    //     return pre + 1;
    //   });
    //   setCurrentYear((pre: number) => {
    //     if (pre === 2022) {
    //       return 2008;
    //     }
    //     return pre + 1;
    //   });
    // }, 1500);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    ADWRService.getRangeOfData({
      state: filter.state ?? "All",
      community: filter.community ?? "All",
      locationType: filter.locationType ?? "All",
    })
      .then(({ data }) => {
        setCurrentYear(data.data.maxYear);
        setYearSlider(data.data);
      })
      .catch(() => {
      })
      .finally(() => {
      });
  }, [filter.community, filter.locationType, filter.state]);

  return (
    <div className="wjh-news">
      <ConfirmScreenshotModal ref={modalRef} onConfirm={handleTakePhoto} />
      <BaseHelmet title="Map Viewer" />
      <Container>
        <HomeTitle title="Map Viewer" />
        {/* <Form>
          <Row className="w-100 mx-0">
            <Col md={4}>
              <FormDropdown
                options={STATE_OPTIONS}
                value={filter.state}
                onChange={(value) => {
                  handleChangeFilter(value, "state");
                }}
                placeholder="Select State"
              />
            </Col>
            <Col md={4}>
              <FormDropdown
                options={LOCATION_TYPE_OPTIONS}
                value={filter.locationType}
                onChange={(value) => handleChangeFilter(value, "locationType")}
                placeholder="Select Location Type"
              />
            </Col>
            <Col md={4}>
              <FormDropdown
                options={filterCommunities}
                value={filter.community}
                onChange={(value) => handleChangeFilter(value, "community")}
                showSearch
                placeholder="Select Location"
              />
            </Col>
          </Row>
        </Form> */}
        <Row ref={captureRef}>
          <Col md={12}>
            <WaterQualityMap
              filter={filter}
              filterCommunities={filterCommunities}
              currentYear={currentYear}
              onOpenModal={onOpenModal}
              yearSlider={yearSlider}
              handleChangeFilter={handleChangeFilter}
              onClearFilter={onClearFilter}
            />
          </Col>
          {yearSlider.years.length > 0 && (
            <Col md={12}>
              <Slider
                min={yearSlider.minYear}
                max={yearSlider.maxYear}
                step={1}
                marks={getMasks}
                defaultValue={yearSlider.maxYear}
                value={debouncedYear}
                onChange={onSlideChange}
              />
            </Col>
          )}
          <Col md={12}>
            <ConfigurationText data={chartNote} style={{ marginTop: '12px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GISMapViewerPage;
