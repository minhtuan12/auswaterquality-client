import { useMemo } from "react";
import HighchartsReact from "highcharts-react-official";
import highchartsPictorial from "highcharts/modules/pictorial";
import { humanChart } from "../../configs";
import { PercentageWaterQualityType } from "../../types";
import { Spin, Empty } from "antd";

type Props = {
  data: PercentageWaterQualityType[];
  loading: boolean;
};

const PictorialPercentageChart = ({ data, loading }: Props) => {
  const getNames = useMemo(() => {
    return data.map((item) => item.state).filter(Boolean);
  }, [data]);

  const convertDataToSeries = useMemo(() => {
    const result: {
      [key: string]: { name: string; data: number[]; color: string };
    } = {
      good: { name: "Good", data: [], color: "#00cc66" },
      unacceptable: { name: "Unacceptable", data: [], color: "#ffcc00" },
      unhealthy: { name: "Unhealthy", data: [], color: "#ff3300" },
    };
    data.forEach((item) => {
      result.good.data.push(Number(item.good));
      result.unhealthy.data.push(Number(item.unhealthy));
      result.unacceptable.data.push(Number(item.unacceptable));
    });

    return result;
  }, [data]);

  const getOptions = useMemo(() => {
    const series = Object.values(convertDataToSeries);
    return {
      chart: {
        type: "pictorial",
        backgroundColor: "#f8f9fa",
      },
      title: {
        text: "Composition of the human body",
      },
      accessibility: {
        screenReaderSection: {
          beforeChartFormat:
            "<{headingTagName}>" +
            "{chartTitle}</{headingTagName}><p>{typeDescription}</p><p>" +
            "{chartLongdesc}</p>",
        },
        point: {
          valueDescriptionFormat: "{value}.",
        },
        series: {
          descriptionFormat: "",
        },
        landmarkVerbosity: "one",
      },

      xAxis: {
        visible: getNames.length > 0,
        categories: getNames,
        lineWidth: 0,
        opposite: true,
      },
      yAxis: {
        visible: false,
        stackShadow: {
          enabled: true,
        },
        max: 100,
      },
      tooltip: {
        headerFormat: "",
      },
      ...humanChart,
      series,

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                padding: 8,
                margin: 12,
                itemMarginTop: 0,
                itemMarginBottom: 0,
                verticalAlign: "bottom",
                layout: "horizontal",
              },
            },
          },
        ],
      },
    };
  }, [convertDataToSeries, getNames]);

  if (data.length === 0 || loading) {
    return (
      <div className="wjh-water-map__no-data">
        {loading ? <Spin /> : <Empty description="No Data Found" />}
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 0" }}>
      <HighchartsReact highcharts={highchartsPictorial} options={getOptions} />
    </div>
  );
};

export default PictorialPercentageChart;
