import { ParameterDataType, ScatterParameterChartType } from "../../../types";
import {
  ADWRHelper,
  AESTHETIC_PRIORITY,
  HEALTH_PRIORITY,
  QualityColor,
} from "../../../utils/adwr";
import { BaseHelper } from "../../../utils/baseHelper";
import { MAP_PARAMETER_VALUE } from "../../../utils/mocks/options";
import { ScatterPlotBands } from "./plotBands";

const getDataPoint = (
  point: ScatterParameterChartType,
  parameter: ParameterDataType
) => {
  if (parameter.name === "Ecoli" || parameter.name === 'Coliforms') {
    return { key: "pct", value: point?.healthParameters?.pct };
  }
  if (point?.healthParameters) {
    for (const key of HEALTH_PRIORITY) {
      if (
        point?.healthParameters[key] !== undefined &&
        point?.healthParameters[key] !== null
      ) {
        return { key, value: point?.healthParameters[key] };
      }
    }
  }
  if (point?.aestheticParameters) {
    for (const key of AESTHETIC_PRIORITY) {
      if (
        point?.aestheticParameters[key] !== undefined &&
        point?.aestheticParameters[key] !== null
      ) {
        return { key, value: point?.aestheticParameters[key] };
      }
    }
  }
  if (point?.otherParameters) {
    for (const key of AESTHETIC_PRIORITY) {
      if (
        point?.otherParameters[key] !== undefined &&
        point?.otherParameters[key] !== null
      ) {
        return { key, value: point?.otherParameters[key] };
      }
    }
  }
  return { key: "Unknown", value: 0 };
};

const getDefaultSeries = ({
  data,
  parameter,
  guideline,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const goodQuality = [];
  const unacceptableQuality = [];
  for (const point of data) {
    const { key, value } = getDataPoint(point, parameter);
    const obj = {
      x: value,
      y: BaseHelper.getRandom(0, 1000),
      name: point?.community?.name ?? "Unknown",
      parameterName: MAP_PARAMETER_VALUE[key],
    };
    const type = ADWRHelper.getDefaultGuideline(value, parameter, guideline);
    if (type === "good") {
      goodQuality.push(obj);
    }
    if (type === "unacceptable") {
      unacceptableQuality.push(obj);
    }
  }

  return [
    {
      name: "Compliance",
      color: QualityColor.green,
      data: goodQuality,
    },
    {
      name: "Non-compliance",
      color: QualityColor.red,
      data: unacceptableQuality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
  ];
};

const getTDSSeries = ({
  data,
  parameter,
  guideline,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const goodQuality = [];
  const fairQuality = [];
  const poorQuality = [];
  const unacceptableQuality = [];
  const plotBand = ScatterPlotBands["TDS"];
  for (const point of data) {
    const { key, value } = getDataPoint(point, parameter);
    const obj = {
      x: value,
      y: BaseHelper.getRandom(0, 1000),
      name: point?.community?.name ?? "Unknown",
      parameterName: MAP_PARAMETER_VALUE[key],
    };
    const type = ADWRHelper.getTDSGuideline(value, parameter, guideline);
    if (type === "good") {
      goodQuality.push(obj);
    }
    if (type === "poor") {
      poorQuality.push(obj);
    }
    if (type === "fair") {
      fairQuality.push(obj);
    }
    if (type === "unacceptable") {
      unacceptableQuality.push(obj);
    }
  }

  return [
    {
      name: plotBand[0].text,
      color: plotBand[0].color,
      data: goodQuality,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[1].text,
      color: plotBand[1].color,
      data: fairQuality,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[2].text,
      color: plotBand[2].color,
      data: poorQuality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[3].text,
      color: plotBand[3].color,
      data: unacceptableQuality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
  ];
};

const getPHSeries = ({
  data,
  parameter,
  guideline,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const goodQuality = [];
  const unacceptableQuality = [];
  const unacceptable2Quality = [];
  const plotBand = ScatterPlotBands["pH"];

  for (const point of data) {
    const { key, value } = getDataPoint(point, parameter);
    const obj = {
      x: value,
      y: BaseHelper.getRandom(0, 1000),
      name: point?.community?.name ?? "Unknown",
      parameterName: MAP_PARAMETER_VALUE[key],
    };
    const type = ADWRHelper.getpHQualityByGuideline(
      value,
      parameter,
      guideline
    );
    if (type === "good") {
      goodQuality.push(obj);
    }
    if (type === "unacceptable") {
      unacceptableQuality.push(obj);
    }
    if (type === "unacceptable2") {
      unacceptable2Quality.push(obj);
    }
  }
  return [
    {
      name: plotBand[0].text,
      color: plotBand[0].color,
      data: unacceptableQuality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[1].text,
      color: plotBand[1].color,
      data: goodQuality,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[2].text,
      color: plotBand[2].color,
      data: unacceptable2Quality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
  ];
};

const getEcoliSeries = ({
  data,
  parameter,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const goodQuality = [];
  const unacceptableQuality = [];
  const plotBand = ScatterPlotBands["ecoli"];

  for (const point of data) {
    const { key, value } = getDataPoint(point, parameter);
    const obj = {
      x: value,
      y: BaseHelper.getRandom(0, 1000),
      name: point?.community?.name ?? "Unknown",
      parameterName: MAP_PARAMETER_VALUE[key],
    };
    if (value && value === 100) {
      goodQuality.push(obj);
    }
    if (value && value < 100) {
      unacceptableQuality.push(obj);
    }
  }
  return [
    {
      name: plotBand[0].text,
      color: plotBand[0].color,
      data: unacceptableQuality,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[1].text,
      color: plotBand[1].color,
      data: goodQuality,
      marker: {
        symbol: "circle",
      },
    },
  ];
};

const getHardnessSeries = ({
  data,
  parameter,
  guideline,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const goodQuality = [];
  const increasingProblems = [];
  const severeProblems = [];
  const plotBand = ScatterPlotBands["Hardness"];

  for (const point of data) {
    const { key, value } = getDataPoint(point, parameter);
    const obj = {
      x: value,
      y: BaseHelper.getRandom(0, 1000),
      name: point?.community?.name ?? "Unknown",
      parameterName: MAP_PARAMETER_VALUE[key],
    };
    const type = ADWRHelper.getHardnessQualityByGuideline(
      value,
      parameter,
      guideline
    );
    if (type === "good") {
      goodQuality.push(obj);
    }
    if (type === "increasing") {
      increasingProblems.push(obj);
    }
    if (type === "severe") {
      severeProblems.push(obj);
    }
  }
  return [
    {
      name: plotBand[0].text,
      color: plotBand[0].color,
      data: goodQuality,
      dataLabels: {
        enabled: false,
      },
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[1].text,
      color: plotBand[1].color,
      data: increasingProblems,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
    {
      name: plotBand[2].text,
      color: plotBand[2].color,
      data: severeProblems,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return this.point.name;
        },
      } as any,
      marker: {
        symbol: "circle",
      },
    },
  ];
};

const getSeries = ({
  data,
  parameter,
  guideline,
}: {
  data: any;
  parameter: ParameterDataType;
  guideline: string;
}) => {
  const parameterName = parameter.name;
  switch (parameterName) {
    case "pH":
    case "pHfield":
      return getPHSeries({ data, parameter, guideline });
    case "Ecoli":
      return getEcoliSeries({ data, parameter, guideline });
    case "Hardness":
      return getHardnessSeries({ data, parameter, guideline });
    case "TDS":
      return getTDSSeries({ data, parameter, guideline });
    default:
      return getDefaultSeries({ data, parameter, guideline });
  }
};

export const ScatterWaterQuality = { getSeries };
