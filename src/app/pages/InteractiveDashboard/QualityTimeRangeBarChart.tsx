import { useCallback, useMemo } from "react";
import { BaseChart } from "../../components";
import { Spin, Empty } from "antd";
import { LOCATION_MAPPING } from "../../utils/mocks/options";
import { titleStyleChart } from "../../utils/adwr";

const QualityTimeRangeBarChart = ({ data, filter, loading }: any) => {
  const getSeriesData = useCallback(() => {
    return [
      {
        name: "Location",
        data: data.map((item: any) => item.count),
      },
    ];
  }, [data]);

  const getCategories = useCallback(() => {
    return data.map((item: any) => item.label);
  }, [data]);

  const getTitle = useMemo(() => {
    let str = "Duration without access to water fully compliant with ADWG";
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
    return {
      chart: {
        type: "column",
        backgroundColor: "#f8f9fa",
      },
      title: {
        text: getTitle,
      },
      subtitle: {
        text: ``,
      },
      xAxis: {
        categories: getCategories(),
        crosshair: true,
        title: {
          text: "",
        },
        labels: {
          style: {
            ...titleStyleChart,
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of locations",
          ...titleStyleChart,
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
        headerFormat: "<span>{point.key}</span><table>",
        pointFormat: "<br/><span><b>Location: </b>{point.y}</span>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
        },
        series: {
          borderWidth: 0,
          pointPadding: 0.1,
          groupPadding: 0.1,
        },
      },
      series: getSeriesData(),
    };
  }, [getCategories, getSeriesData, getTitle]);

  if (data.length === 0 || loading) {
    return (
      <div className="wjh-water-map__no-data">
        {loading ? <Spin /> : <Empty description="No Data Found" />}
      </div>
    );
  }

  return (
    <div style={{ padding: "16px 0" }}>
      <BaseChart options={getOptions} />
    </div>
  );
};

export default QualityTimeRangeBarChart;
