import { useState, useEffect, useMemo } from "react";
import { Empty, Slider } from "antd";
import { ADWRService } from "../../services";
import { Row, Col } from "react-bootstrap";
import {
  ParameterBarChartType,
  ParameterDataType,
  ScatterParameterChartType,
} from "../../types";
import ScatterTDSChart from "./ScatterTDSChart";
import ParameterTrendChart from "./ParameterTrendChart";
import { InteractiveDashboardFilter } from ".";

const DEFAULT_YEAR = 2022;

type Props = {
  filter: InteractiveDashboardFilter;
  parameter?: ParameterDataType;
  parameters: ParameterDataType[];
  currentYear: number;
  yearSlider: { minYear: number; maxYear: number; years: number[] };
  onChangeYearSlider: (value: number) => void;
  getMasks: Record<number, React.ReactNode>;
};

const ParametersTab = ({
  filter,
  getMasks,
  parameter,
  yearSlider,
  parameters,
  currentYear,
  onChangeYearSlider,
}: Props) => {
  const [scatterCharts, setScatterCharts] = useState<
    ScatterParameterChartType[]
  >([]);
  const [scatterChartsLoading, setScatterChartsLoading] =
    useState<boolean>(true);
  const [parameterChart, setParameterChart] = useState<ParameterBarChartType[]>(
    []
  );
  const [parameterChartLoading, setParameterChartLoading] =
    useState<boolean>(true);

  const isOnlyCommunity = !!filter.community && filter.community !== "All";
  const isAllState = !!filter.state && filter.state === "All";

  const getParameterChartTitle = useMemo(() => {
    if (parameter) {
      return `${filter.community} - ${parameter.name}`;
    }
    return filter.community ?? "";
  }, [filter.community, parameter]);

  useEffect(() => {
    if (isOnlyCommunity || !parameter) {
      return;
    }
    ADWRService.getScatterChart({
      year: currentYear,
      state: isAllState ? "All" : filter.state ?? "All",
      locationType: filter.locationType ?? "All",
      parameter: parameter.name,
    })
      .then(({ data }) => {
        setScatterCharts(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setScatterChartsLoading(false);
      });
  }, [
    currentYear,
    filter.locationType,
    filter.parameter,
    filter.state,
    isAllState,
    isOnlyCommunity,
    parameter,
  ]);

  useEffect(() => {
    if (!isOnlyCommunity || !parameter) {
      return;
    }
    ADWRService.getParameterBarChart({
      community: filter.community ?? "All",
      parameterName: filter.parameter ?? "",
      parameterType: parameter?.type,
    })
      .then(({ data }) => {
        setParameterChart(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setParameterChartLoading(false);
      });
  }, [
    filter.community,
    filter.parameter,
    isAllState,
    isOnlyCommunity,
    parameter,
    parameter?.type,
    parameters,
  ]);

  if (!parameter) {
    return (
      <div className="wjh-water-map__no-data">
        <Empty description="Please select 1 parameter" />
      </div>
    );
  }

  return (
    <div>
      {!isOnlyCommunity && (
        <Row>
          <ScatterTDSChart
            filter={filter}
            loading={scatterChartsLoading}
            data={scatterCharts}
            parameter={parameter}
            currentYear={currentYear}
          />
          <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
            <Slider
              min={yearSlider.minYear ?? 2008}
              max={yearSlider.maxYear ?? DEFAULT_YEAR}
              step={1}
              marks={getMasks}
              defaultValue={yearSlider.maxYear ?? DEFAULT_YEAR}
              value={currentYear}
              onChange={onChangeYearSlider}
              style={{ width: "98%" }}
              classNames={{
                root: "wjh-slider",
                track: "wjh-slider__track",
              }}
            />
          </Col>
        </Row>
      )}
      {isOnlyCommunity && (
        <ParameterTrendChart
          parameter={parameter}
          data={parameterChart}
          loading={parameterChartLoading}
          title={getParameterChartTitle}
        />
      )}
    </div>
  );
};

export default ParametersTab;
