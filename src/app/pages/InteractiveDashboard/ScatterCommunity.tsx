import { useMemo } from "react";
import { BaseHelper } from "../../utils/baseHelper";
import { Spin, Empty } from "antd";
import { BaseChart } from "../../components";
import { ScatterCommunityType } from "../../types";
import styles from "./styles.module.css";
import { MAP_QUALITY_NAME } from "../../utils/adwr";

type Props = {
  data: ScatterCommunityType[];
  loading: boolean;
};

type SeriesData = {
  x: number;
  y: number;
  name: string;
};

const ScatterCommunity = ({ data, loading }: Props) => {
  const getSeriesData = useMemo(() => {
    const goodQuality: SeriesData[] = [];
    const unacceptableQuality: SeriesData[] = [];
    const unhealthy: SeriesData[] = [];
    data.forEach((item) => {
      let range = { min: 0, max: 600 };
      if (item.quality === "unacceptable") {
        range = { min: 600, max: 1200 };
      }
      if (item.quality === "unhealthy") {
        range = { min: 1200, max: 1800 };
      }
      const obj = {
        x: BaseHelper.getRandom(range.min, range.max),
        y: BaseHelper.getRandom(0, 1000),
        name: item?.community?.name ?? "Unknown",
      };
      if (item.quality === "good") {
        goodQuality.push(obj);
      }
      if (item.quality === "unacceptable") {
        unacceptableQuality.push(obj);
      }
      if (item.quality === "unhealthy") {
        unhealthy.push(obj);
      }
    });
    return [
      {
        color: "green",
        name: MAP_QUALITY_NAME["good"],
        data: goodQuality,
        marker: {
          symbol: "circle",
        },
      },
      {
        color: "#ffcc00",
        name: MAP_QUALITY_NAME["unacceptable"],
        data: unacceptableQuality,
        marker: {
          symbol: "circle",
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.name;
          },
        } as any,
      },
      {
        color: "#ff3232",
        name: MAP_QUALITY_NAME["unhealthy"],
        data: unhealthy,
        marker: {
          symbol: "circle",
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.name;
          },
        } as any,
      },
    ];
  }, [data]);

  const getOptions = useMemo(() => {
    return {
      chart: {
        type: "scatter",
      },
      title: {
        text: "",
      },
      xAxis: {
        min: 0,
        max: 1800,
        title: { text: "" },
        labels: {
          enabled: false,
        },
        categories: [],
        plotLines: [
          {
            color: "#ccc",
            dashStyle: "ShortDash",
            width: 2,
            value: 0,
          },
          {
            color: "#ccc",
            dashStyle: "ShortDash",
            width: 2,
            value: 600,
          },
          {
            color: "#ccc",
            dashStyle: "ShortDash",
            width: 2,
            value: 1200,
          },
          {
            color: "#ccc",
            dashStyle: "ShortDash",
            width: 2,
            value: 1800,
          },
        ],
        plotBands: [
          {
            from: 0,
            to: 600,
            color: "transparent",
            label: {
              text: MAP_QUALITY_NAME["good"],
              style: { color: "green", fontSize: 18 },
            },
          },
          {
            from: 600,
            to: 1200,
            color: "transparent",
            label: {
              text: MAP_QUALITY_NAME["unacceptableBreak"],
              style: { color: "#ffcc00", fontSize: 18 },
            },
          },
          {
            from: 1200,
            to: 1800,
            color: "transparent",
            label: {
              text: MAP_QUALITY_NAME["unhealthyBreak"],
              useHTML: true,
              style: { color: "red", fontSize: 18 },
            },
          },
        ],
      },
      yAxis: {
        title: { text: "" },
        labels: {
          enabled: false,
        },
      },
      legend: {
        enabled: false,
        itemHiddenStyle: {
          color: "#ccc",
          textDecoration: "none",
        },
      },
      tooltip: {
        pointFormat: "<b>Location</b>: {point.name}",
      },
      series: getSeriesData,
    };
  }, [getSeriesData]);

  if (data.length === 0 || loading) {
    return (
      <div className="wjh-water-map__no-data">
        {loading ? <Spin /> : <Empty description="No Data Found" />}
      </div>
    );
  }

  return (
    <div style={{ padding: "16px 0" }} className={styles.scatter_community}>
      <BaseChart options={getOptions} />
    </div>
  );
};

export default ScatterCommunity;
