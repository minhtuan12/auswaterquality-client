import { useCallback } from "react";
import { Empty, Spin } from "antd";
import { BaseChart } from "../../components";
import { DotLightQualityType } from "../../types";
import { MAP_QUALITY_NAME, VALID_AESTHETIC_PARAMETERS } from "../../utils/adwr";
import { InteractiveDashboardFilter } from ".";

type Props = {
  data: DotLightQualityType[];
  loading: boolean;
  currentYear: number;
  filter: InteractiveDashboardFilter;
};

const COLORS_MAPPING: { [key: string]: string } = {
  good: "#00cc66",
  unacceptable: "#ffcc00",
  unhealthy: "#ff3300",
};

const COLORS_OPACITY_MAPPING: { [key: string]: string } = {
  good: "#00cc664d",
  unacceptable: "#ffcc004d",
  unhealthy: "#ff33004d",
};

const POSITION_MAPPING: { [key: string]: number } = {
  good: 0.5,
  unacceptable: 0.75,
  unhealthy: 1,
};

const DotLightQualityChart = ({
  data = [],
  loading,
  currentYear,
  filter,
}: Props) => {
  const getSeriesData = useCallback(
    (quality: string) => {
      return data.map((item, idx: number) => {
        const failedParams = item.failedParams.filter((item) =>
          VALID_AESTHETIC_PARAMETERS.includes(item)
        );
        const activeYear = currentYear === item.year;
        const baseSeries = {
          x: idx,
          y: POSITION_MAPPING[quality],
          status: MAP_QUALITY_NAME[item.quality],
          failedParams,
        };
        if (activeYear) {
          return {
            ...baseSeries,
            marker: {
              fillColor:
                item.quality === quality
                  ? COLORS_MAPPING[quality]
                  : COLORS_OPACITY_MAPPING[quality],
            },
            isShowTooltip: item.quality === quality,
          };
        }
        return {
          ...baseSeries,
          marker: {
            fillColor: COLORS_OPACITY_MAPPING[quality],
          },
          isShowTooltip: false,
        };
      });
    },
    [currentYear, data]
  );

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "scatter",
      backgroundColor: "#f8f9fa",
    },
    title: {
      text: `Drinking Water Quality in ${filter.community}`,
    },
    xAxis: {
      categories: data.map((d) => d.year.toString()),
      title: { text: "" },
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    legend: {
      itemHiddenStyle: {
        color: "#ccc",
        textDecoration: "none",
      },
    },
    tooltip: {
      formatter: function () {
        const point = (this as any).point;
        if (!point.isShowTooltip) {
          return false;
        }
        const failed = point.failedParams?.length
          ? point.failedParams.join(", ")
          : "None";
        return `<b>Quality:</b> ${point.status}<br/><br/>
                <b>Year:</b> ${point.key}<br/><br/>
                <b>Non-compliant parameters:</b> ${failed}`;
      },
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 15,
          symbol: "circle",
          states: {
            hover: {
              enabled: true,
              lineColor: "#333",
            },
          },
        },
      },
      series: {
        animation: {
          duration: 1000,
        },
        className: "wjh-dot-light-legend",
      },
    },
    series: [
      {
        name: MAP_QUALITY_NAME["good"],
        type: "scatter",
        data: getSeriesData("good"),
        color: "#00cc66",
      },
      {
        name: MAP_QUALITY_NAME["unacceptable"],
        type: "scatter",
        data: getSeriesData("unacceptable"),
        color: "#ffcc00",
      },
      {
        name: MAP_QUALITY_NAME["unhealthy"],
        type: "scatter",
        data: getSeriesData("unhealthy"),
        color: "#ff3300",
      },
    ],
  };

  if (data.length === 0 || loading) {
    return (
      <div className="wjh-water-map__no-data">
        {loading ? <Spin /> : <Empty description="No Data Found" />}
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 0" }} className="wjh-dot-light-quality">
      <BaseChart options={chartOptions} />
    </div>
  );
};

export default DotLightQualityChart;
