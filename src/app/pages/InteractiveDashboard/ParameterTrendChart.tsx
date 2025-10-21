import { useMemo, useRef } from "react";
import { BaseChart } from "../../components";
import { Empty, Spin } from "antd";
import { ParameterBarChartType, ParameterDataType } from "../../types";
import { MAP_PARAMETER_VALUE } from "../../utils/mocks/options";
import { titleStyleChart } from "../../utils/adwr";

type Props = {
  title?: string;
  parameter?: ParameterDataType;
  data: ParameterBarChartType[];
  loading?: boolean;
};

const processedData = (value: number | null | undefined): number | null => {
  return value === 0 || value === null || value === undefined ? null : value;
};

const isExist = (value?: number) => {
  return value !== undefined || value !== null;
};

const ParameterTrendChart = ({
  title = "",
  parameter,
  data,
  loading = false,
}: Props) => {
  const highchartsRef = useRef();
  const isEcoliParameter = parameter?.name === "Ecoli" || parameter?.name === 'Coliforms';
  const isPH = parameter?.name === 'pH';
  const isOthers = parameter?.type === 'others';
  const getUnits = parameter?.units ? `(${parameter?.units})` : "";

  const thresholds = useMemo(() => {
    if (!parameter) {
      return {
        guideline11: null,
        guildline11B: null,
        guideline04: null,
        guideline96: null,
      };
    }
    return {
      guideline11: parameter["threshold1_11"],
      guildline11B: parameter["threshold2_11"] ?? null,
      guideline04: parameter["threshold1_04"],
      guideline96: parameter["threshold1_96"],
    };
  }, [parameter]);

  const fillData = useMemo(() => {
    const result = [];
    for (let i = 2008; i <= 2023; i++) {
      const dataYear = data.find((item) => item.year === i);
      if (dataYear) {
        result.push(dataYear);
      } else {
        result.push({ year: i } as ParameterBarChartType);
      }
    }
    return result;
  }, [data]);

  const getOptions = useMemo(() => {
    const categories: number[] = [];
    const failSamples: (number | null)[] = [];
    const passSamples: (number | null)[] = [];
    const totalSamples: (number | null)[] = [];
    const minSamples: (number | null)[] = [];
    const maxSamples: (number | null)[] = [];
    const nineFiveTHSamples: (number | null)[] = [];
    const avgSamples: (number | null)[] = [];
    const pctSamples: (number | null)[] = [];
    const guidelines11: number[] = [];
    const guidelines11B: number[] = [];
    const guidelines04: number[] = [];
    const guidelines96: number[] = [];

    fillData.forEach((item) => {
      categories.push(item.year);
      if (thresholds.guideline11) {
        guidelines11.push(thresholds.guideline11);
      }
      if (thresholds.guideline04) {
        guidelines04.push(thresholds.guideline04);
      }
      if (thresholds.guideline96) {
        guidelines96.push(thresholds.guideline96);
      }
      if (thresholds.guildline11B) {
        guidelines11B.push(thresholds.guildline11B);
      }
      // const hasFailedSamples = isExist(item.spls_excd);
      // const hasPassSamples = isExist(item.spls_pass);
      // const hasTotalSamples = isExist(item.spls);
      // if (hasTotalSamples) {
      //   if (hasPassSamples && !hasFailedSamples) {
      //     passSamples.push(item.spls_pass ?? null);
      //     failSamples.push(item.spls - (item.spls_pass ?? 0));
      //     totalSamples.push(null);
      //   }
      //   if (hasFailedSamples && !hasPassSamples) {
      //     passSamples.push(item.spls - item.spls_excd);
      //     failSamples.push(item.spls_excd ?? null);
      //     totalSamples.push(null);
      //   }
      //   if (hasPassSamples && hasFailedSamples) {
      //     totalSamples.push(null);
      //     passSamples.push(item.spls_pass ?? null);
      //     failSamples.push(item.spls_excd ?? null);
      //   }
      //   if (!hasPassSamples && !hasFailedSamples) {
      //     totalSamples.push(item.spls);
      //     passSamples.push(null);
      //     failSamples.push(null);
      //   }
      // } else {
      //   totalSamples.push(null);
      //   passSamples.push(null);
      //   failSamples.push(null);
      // }
      totalSamples.push(!item?.spls_pass && !item.spls_excd ? item.spls ?? null : null);
      passSamples.push(item?.spls_pass ?? null);
      failSamples.push(item.spls_excd ?? null);
      minSamples.push(processedData(item.min));
      maxSamples.push(processedData(item.max));
      nineFiveTHSamples.push(processedData(item["95th"]));
      avgSamples.push(processedData(item.avg));
      if (isEcoliParameter) {
        pctSamples.push(processedData(item.pct));
      }
    });

    return {
      chart: {
        zoomType: "x",
        backgroundColor: "#f8f9fa",
      },
      title: {
        text: title,
      },
      xAxis: {
        categories,
        crosshair: true,
      },
      yAxis: [
        {
          title: {
            text: "Number of samples",
            ...titleStyleChart,
          },
          allowDecimals: false,
        },
        {
          title: {
            text: isEcoliParameter ? "Compliance rate" : `${getUnits}`,
            ...titleStyleChart,
          },
          max: isEcoliParameter ? 100 : null,
          opposite: true,
          endOnTick: false,
        },
      ],
      legend: {
        align: "center",
        verticalAlign: "top",
        layout: "horizontal",
        floating: false,
        x: 0,
        y: 0,
        margin: 15,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemHiddenStyle: {
          color: "#ccc",
          textDecoration: "none",
        },
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        column: {
          stacking: "normal",
        },
      },
      series: [
        {
          name: "Total Samples",
          type: "column",
          yAxis: 0,
          data: totalSamples,
          stack: "Color",
          color: "#cccccc",
        },
        ...(!isOthers ? [
          {
            name: "Non-compliant Samples",
            type: "column",
            yAxis: 0,
            data: failSamples,
            stack: "Color",
            color: "#dc3545",
          },
          {
            name: "Compliant Samples",
            type: "column",
            yAxis: 0,
            data: passSamples,
            stack: "Color",
            color: "#28a745",
          },
        ] : []),
        ...(isEcoliParameter
          ? [
            {
              name: MAP_PARAMETER_VALUE["pct"],
              type: "line",
              yAxis: 1,
              data: pctSamples,
              stack: "Color",
              color: "#2caffe",
            },
          ]
          : [
            {
              name: "Min",
              type: "spline",
              yAxis: 1,
              data: minSamples,
              color: "blue",
              marker: { symbol: "circle" },
            },
            {
              name: "Max",
              type: "spline",
              yAxis: 1,
              data: maxSamples,
              color: "#FFD65A",
              marker: { symbol: "circle" },
            },
            {
              name: MAP_PARAMETER_VALUE["95th"],
              type: "spline",
              yAxis: 1,
              data: nineFiveTHSamples,
              color: "#FE7743",
              marker: { symbol: "circle" },
            },
            {
              name: MAP_PARAMETER_VALUE["avg"],
              type: "spline",
              yAxis: 1,
              data: avgSamples,
              color: "#A27B5C",
              marker: { symbol: "circle" },
            },
          ]),
        ...(!isOthers ? (isPH ? [
          {
            name: "ADWG 2011 A",
            type: "line",
            data: guidelines11,
            dashStyle: "Dash",
            color: "gray",
            lineWidth: 1,
            yAxis: 1,
          },
          {
            name: "ADWG 2011 B",
            type: "line",
            data: guidelines11B,
            dashStyle: "Dash",
            color: "gray",
            lineWidth: 1,
            yAxis: 1,
          },
        ] : [{
          name: "ADWG 2011",
          type: "line",
          data: guidelines11,
          dashStyle: "Dash",
          color: "gray",
          lineWidth: 1,
          yAxis: 1,
        },
        {
          name: "ADWG 2004",
          type: "line",
          data: guidelines04,
          dashStyle: "Dash",
          color: "gray",
          lineWidth: 1,
          yAxis: 1,
          visible: false,
        },
        {
          name: "ADWG 1996",
          type: "line",
          data: guidelines96,
          dashStyle: "Dash",
          color: "gray",
          lineWidth: 1,
          yAxis: 1,
          visible: false,
        }]) : [])
      ],
    };
  }, [
    fillData,
    getUnits,
    isEcoliParameter,
    thresholds.guideline04,
    thresholds.guideline11,
    thresholds.guideline96,
    title,
  ]);

  return (
    <div style={{ padding: "16px 0" }}>
      {data.length === 0 || loading ? (
        <div className="wjh-water-map__no-data">
          {loading ? <Spin /> : <Empty description="No Data Found" />}
        </div>
      ) : (
        <BaseChart ref={highchartsRef} options={getOptions} />
      )}
    </div>
  );
};

export default ParameterTrendChart;
