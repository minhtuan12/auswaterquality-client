import { useMemo } from "react";
import { BaseChart } from "../../components";
import { LineChartType } from "../../types";
import { InteractiveDashboardFilter } from ".";
import { LOCATION_MAPPING } from "../../utils/mocks/options";
import { MAP_QUALITY_NAME, titleStyleChart } from "../../utils/adwr";
// import { Spin, Empty } from "antd";

type Props = {
  data: LineChartType[];
  loading: boolean;
  filter: InteractiveDashboardFilter;
};

const LineChart = ({ data, filter }: Props) => {
  const convertDataToSeries = useMemo(() => {
    const categories: number[] = [];
    const good: (number | null)[] = [];
    const unacceptable: (number | null)[] = [];
    const unhealthy: (number | null)[] = [];
    data.forEach((item) => {
      if (item.year <= 2023) {
        const total: number = (item.good ?? 0) + (item.unacceptable ?? 0) + (item.unhealthy ?? 0);
        categories.push(item.year);
        good.push(item.good ? (item.good / total) * 100 : null);
        unacceptable.push(item.unacceptable ? (item.unacceptable / total) * 100 : null);
        unhealthy.push(item.unhealthy ? (item.unhealthy / total) * 100 : null);
      }
    });
    return {
      categories,
      good,
      unacceptable,
      unhealthy,
    };
  }, [data]);

  const getTitle = useMemo(() => {
    let str = "Number of Locations by Drinking Water Quality Categories";
    const location = [];
    if (filter.state && filter.state !== "All") {
      location.push(LOCATION_MAPPING[filter.state]);
    }
    if (filter.locationType && filter.locationType !== "All") {
      location.push(filter.locationType);
    }
    if (location.length > 0) {
      str += ` in ${location.join(" - ")}`;
    }

    return str;
  }, [filter.locationType, filter.state]);

  const getOptions = useMemo(() => {
    const { categories, good, unacceptable, unhealthy } = convertDataToSeries;
    return {
      chart: {
        type: "areaspline",
        backgroundColor: "#f8f9fa",
      },
      title: {
        text: getTitle,
      },
      xAxis: {
        categories,
        crosshair: true,
        lineWidth: 0
      },
      yAxis: {
        title: {
          text: "Percentage of locations (%)",
          ...titleStyleChart,
        },
      },
      legend: {
        align: "center",
        itemHiddenStyle: {
          color: "#ccc",
          textDecoration: "none",
        },
        class: "wjh-dot-light-legend",
      },
      series: [
        {
          name: MAP_QUALITY_NAME["good"],
          data: good,
          color: "green",
          marker: {
            symbol: "circle",
          },
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
            style: { fontSize: "14px", color: "#333" },
          },
        },
        {
          name: MAP_QUALITY_NAME["unacceptable"],
          data: unacceptable,
          color: "#FFDE21",
          marker: {
            symbol: "circle",
          },
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
            style: { fontSize: "14px", color: "#333" },
          },
        },
        {
          name: MAP_QUALITY_NAME["unhealthy"],
          data: unhealthy,
          color: "red",
          marker: {
            symbol: "circle",
          },
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
            style: { fontSize: "14px", color: "#333" },
          },
        },
      ],
    };
  }, [convertDataToSeries, getTitle]);

  // if (data.length === 0 || loading) {
  //   return (
  //     <div className="wjh-water-map__no-data">
  //       {loading ? <Spin /> : <Empty description="No Data Found" />}
  //     </div>
  //   );
  // }

  if (data.length === 0) {
    return null;
  }

  return (
    <div style={{ padding: "40px 0" }}>
      <BaseChart options={getOptions} />
    </div>
  );
};

export default LineChart;
