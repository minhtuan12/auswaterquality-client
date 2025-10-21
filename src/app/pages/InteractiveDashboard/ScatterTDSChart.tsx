import { useCallback, useMemo } from "react";
import { Col } from "react-bootstrap";
import { BaseChart } from "../../components";
import { interactiveScatterChart } from "../../configs";
import { Empty, Spin } from "antd";
import { ParameterDataType, ScatterParameterChartType } from "../../types";
import { Guideline } from "../../enums/Guideline";
import { ADWRHelper, GUIDELINE_VALUE, titleStyleChart } from "../../utils/adwr";
import { ScatterWaterQuality } from "../../configs/charts";
import { InteractiveDashboardFilter } from ".";
import { LOCATION_MAPPING } from "../../utils/mocks/options";

type Props = {
  data: ScatterParameterChartType[];
  filter: InteractiveDashboardFilter;
  loading: boolean;
  parameter: ParameterDataType;
  currentYear: number;
};

const ScatterTDSChart = ({
  parameter,
  data,
  loading,
  filter,
  currentYear,
}: Props) => {
  const guideline = filter.guideline ?? Guideline.ADWR2011;
  const getUnits = parameter?.units ? `(${parameter?.units})` : "";

  const getGuideTicks = useMemo(() => {
    return GUIDELINE_VALUE[guideline]
      .map((item) => (parameter as any)[item] ?? null)
      .filter(Boolean);
  }, [guideline, parameter]);

  const getGuideLinePlotLines = useMemo(() => {
    const basePlotLines = {
      color: "black",
      dashStyle: "ShortDash",
      width: 2,
      label: {
        text: "ADWG Guideline",
        style: {
          fontWeight: "bold",
          align: "left",
        },
      },
      zIndex: 5,
    };
    const basePlotLines2 = {
      color: "#ccc",
      dashStyle: "ShortDash",
      width: 2,
    };

    return getGuideTicks.map((item, index) => {
      return {
        ...(index === 0 ? basePlotLines : basePlotLines2),
        value: item,
      };
    });
  }, [getGuideTicks]);

  const getChartTitle = useMemo(() => {
    let str = "";
    const location = [];
    if (filter.state && filter.state !== "All") {
      location.push(LOCATION_MAPPING[filter.state]);
    }
    if (filter.locationType && filter.locationType !== "All") {
      location.push(filter.locationType);
    }
    if (location.length > 0) {
      str += `${location.join(" - ")}`;
    }
    return str !== "" ? `${str} - ${filter.parameter}` : `${filter.parameter}`;
  }, [filter.locationType, filter.parameter, filter.state]);

  const getChartOptions = useCallback(() => {
    const seriesData = [...data];

    return {
      ...interactiveScatterChart,
      title: {
        text: getChartTitle,
      },
      xAxis: {
        title: {
          text: `${getUnits}`,
          ...titleStyleChart,
        },
        plotLines: getGuideLinePlotLines,
        plotBands: ADWRHelper.getPlotBand(guideline, parameter),
        tickPositioner: function () {
          const defaultTicks: number[] = (this as any).tickPositions;
          const customTicks = getGuideTicks;
          return [...new Set([...defaultTicks, ...customTicks])].sort(
            (a, b) => a - b
          );
        },
      },
      tooltip: {
        pointFormat: `<br/><b>{point.name}</b>
          <br/><br/><b>Year:</b> ${currentYear}
          <br/><br/><b>Parameter:</b> ${filter.parameter}
          <br/><br/>{point.parameterName}: {point.x}${getUnits}`,
      },
      series: ScatterWaterQuality.getSeries({
        data: seriesData,
        parameter,
        guideline,
      }),
    };
  }, [
    data,
    getChartTitle,
    getUnits,
    getGuideLinePlotLines,
    guideline,
    parameter,
    currentYear,
    filter.parameter,
    getGuideTicks,
  ]);

  if (data.length === 0 || loading) {
    return (
      <div className="wjh-water-map__no-data">
        {loading ? <Spin /> : <Empty description="No Data Found" />}
      </div>
    );
  }

  return (
    <Col md={12}>
      <BaseChart options={getChartOptions()} />
    </Col>
  );
};

export default ScatterTDSChart;
