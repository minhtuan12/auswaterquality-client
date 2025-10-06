import { ScatterPlotBands } from "../../configs";
import { Guideline } from "../../enums/Guideline";
import { ParameterDataType } from "../../types";
import { GUIDELINE_VALUE } from "./variables";

export const ADWRHelper = {
  getDefaultGuideline: (
    value: number,
    parameter: ParameterDataType,
    guideline: string
  ) => {
    if (!value) {
      return null;
    }
    const thresholds = GUIDELINE_VALUE[guideline];
    if (!thresholds || thresholds.length === 0) {
      return null;
    }
    if (guideline === Guideline.ADWR2011) {
      if (parameter?.threshold1_11 && value <= parameter?.threshold1_11) {
        return "good";
      }
      return "unacceptable";
    }
    if (guideline === Guideline.ADWR2004) {
      if (parameter?.threshold1_04 && value <= parameter?.threshold1_04) {
        return "good";
      }
      return "unacceptable";
    }
    if (parameter?.threshold1_96 && value <= parameter?.threshold1_96) {
      return "good";
    }
    return "unacceptable";
  },
  getTDSGuideline: (
    value: number,
    parameter: ParameterDataType,
    guideline: string
  ) => {
    if (!value) {
      return null;
    }
    const thresholds = GUIDELINE_VALUE[guideline];
    if (!thresholds || thresholds.length === 0) {
      return null;
    }
    if (guideline === Guideline.ADWR2011) {
      if (parameter?.threshold1_11 && value <= parameter?.threshold1_11) {
        return "good";
      }
      if (
        parameter?.threshold1_11 &&
        parameter?.threshold2_11 &&
        value > parameter?.threshold1_11 &&
        value <= parameter?.threshold2_11
      ) {
        return "fair";
      }
      if (
        parameter?.threshold2_11 &&
        parameter?.threshold3_11 &&
        value > parameter?.threshold2_11 &&
        value <= parameter?.threshold3_11
      ) {
        return "poor";
      }
      return "unacceptable";
    }
    if (guideline === Guideline.ADWR2004) {
      if (parameter?.threshold1_04 && value <= parameter?.threshold1_04) {
        return "good";
      }
      if (
        parameter?.threshold1_04 &&
        parameter?.threshold2_04 &&
        value > parameter?.threshold1_04 &&
        value <= parameter?.threshold2_04
      ) {
        return "poor";
      }
      return "unacceptable";
    }
    if (parameter?.threshold1_96 && value <= parameter?.threshold1_96) {
      return "good";
    }
    if (
      parameter?.threshold1_96 &&
      parameter?.threshold2_96 &&
      value > parameter?.threshold1_96 &&
      value <= parameter?.threshold2_96
    ) {
      return "poor";
    }
    return "unacceptable";
  },
  getpHQualityByGuideline: (
    value: number,
    parameter: ParameterDataType,
    guideline: string
  ) => {
    if (guideline === Guideline.ADWR2011) {
      if (parameter?.threshold1_11 && value < parameter?.threshold1_11) {
        return "unacceptable";
      }
      if (
        parameter?.threshold1_11 &&
        parameter?.threshold2_11 &&
        value >= parameter?.threshold1_11 &&
        value <= parameter?.threshold2_11
      ) {
        return "good";
      }
      return "unacceptable2";
    }
    if (guideline === Guideline.ADWR2004) {
      if (parameter?.threshold1_04 && value < parameter?.threshold1_04) {
        return "unacceptable";
      }
      if (
        parameter?.threshold1_04 &&
        parameter?.threshold2_04 &&
        value >= parameter?.threshold1_04 &&
        value <= parameter?.threshold2_04
      ) {
        return "good";
      }
      return "unacceptable2";
    }
    if (guideline === Guideline.ADWR1996) {
      if (parameter?.threshold1_96 && value < parameter?.threshold1_96) {
        return "unacceptable";
      }
      if (
        parameter?.threshold1_96 &&
        parameter?.threshold2_96 &&
        value >= parameter?.threshold1_96 &&
        value <= parameter?.threshold2_96
      ) {
        return "good";
      }
      return "unacceptable2";
    }
  },
  getHardnessQualityByGuideline: (
    value: number,
    parameter: ParameterDataType,
    guideline: string
  ) => {
    if (guideline === Guideline.ADWR2011) {
      if (parameter?.threshold1_11 && value <= parameter?.threshold1_11) {
        return "good";
      }
      if (
        parameter?.threshold1_11 &&
        parameter?.threshold2_11 &&
        value > parameter?.threshold1_11 &&
        value <= parameter?.threshold2_11
      ) {
        return "increasing";
      }
      return "severe";
    }
    if (guideline === Guideline.ADWR2004) {
      if (parameter?.threshold1_04 && value < parameter?.threshold1_04) {
        return "good";
      }
      return "severe";
    }
    if (guideline === Guideline.ADWR1996) {
      if (parameter?.threshold1_96 && value < parameter?.threshold1_96) {
        return "good";
      }
      return "severe";
    }
  },

  getPlotBand: (guideline: string, parameter: ParameterDataType) => {
    const a = [];
    if (guideline === Guideline.ADWR2011) {
      if (parameter?.threshold1_11) {
        a.push({ min: 0, max: parameter?.threshold1_11 });
      }
      if (parameter?.threshold1_11 && parameter?.threshold2_11) {
        a.push({
          min: parameter?.threshold1_11,
          max: parameter?.threshold2_11,
        });
      } else {
        a.push({ min: parameter?.threshold1_11 });
      }
      if (parameter?.threshold2_11 && parameter?.threshold3_11) {
        a.push({
          min: parameter?.threshold2_11,
          max: parameter?.threshold3_11,
        });
      } else {
        a.push({ min: parameter?.threshold2_11 });
      }
      if (parameter?.threshold3_11) {
        a.push({ min: parameter?.threshold3_11 });
      }
    }

    // if (guideline === Guideline.ADWR2004) {
    //   if (parameter?.threshold1_04) {
    //     a.push({ min: 0, max: parameter?.threshold1_04 });
    //   }
    //   if (parameter?.threshold1_04 && parameter?.threshold2_04) {
    //     a.push({
    //       min: parameter?.threshold1_04,
    //       max: parameter?.threshold2_04,
    //     });
    //   } else {
    //     a.push({ min: parameter?.threshold1_04 });
    //   }
    //   if (parameter?.threshold2_04) {
    //     a.push({ min: parameter?.threshold2_04 });
    //   }
    // }

    // if (guideline === Guideline.ADWR1996) {
    //   if (parameter?.threshold1_96) {
    //     a.push({ min: 0, max: parameter?.threshold1_96 });
    //   }
    //   if (parameter?.threshold1_96 && parameter?.threshold2_96) {
    //     a.push({
    //       min: parameter?.threshold1_96,
    //       max: parameter?.threshold2_96,
    //     });
    //   } else {
    //     a.push({ min: parameter?.threshold1_96 });
    //   }
    //   if (parameter?.threshold2_11) {
    //     a.push({ min: parameter?.threshold2_11 });
    //   }
    // }

    if (parameter.name === "TDS") {
      return a.map((item, index) => {
        const plotBands = ScatterPlotBands.TDS[index];
        return {
          from: item.min,
          to: item.max ?? Number.POSITIVE_INFINITY,
          color: "transparent",
          label: {
            text: plotBands?.text ?? "",
            style: { color: plotBands?.color ?? "" },
          },
        };
      });
    }

    if (parameter.name === "pH" || parameter.name === "pHfield") {
      return a.map((item, index) => {
        const plotBands = ScatterPlotBands.pH[index];
        return {
          from: item.min,
          to: item.max ?? Number.POSITIVE_INFINITY,
          color: "transparent",
          label: {
            text: plotBands?.text ?? "",
            style: { color: plotBands?.color ?? "" },
          },
        };
      });
    }

    if (parameter.name === "Hardness") {
      return a.map((item, index) => {
        const plotBands = ScatterPlotBands.Hardness[index];
        return {
          from: item.min,
          to: item.max ?? Number.POSITIVE_INFINITY,
          color: "transparent",
          label: {
            text: plotBands?.text ?? "",
            style: { color: plotBands?.color ?? "" },
          },
        };
      });
    }

    if (parameter.name === "Ecoli") {
      const plotBand1 = ScatterPlotBands.ecoli[0];
      const plotBand2 = ScatterPlotBands.ecoli[1];
      return [
        {
          from: 0,
          to: 99.9,
          color: "transparent",
          label: {
            text: plotBand1?.text ?? "",
            style: { color: plotBand1?.color ?? "" },
          },
        },
        {
          from: 99.9,
          to: 100,
          color: "transparent",
          label: {
            text: plotBand2?.text ?? "",
            style: { color: plotBand2?.color ?? "" },
          },
        },
      ];
    }

    return a
      .filter((item) => item.min || item.max)
      .map((item, index) => {
        const plotBands = ScatterPlotBands.default[index];
        return {
          from: item.min,
          to: item.max ?? Number.POSITIVE_INFINITY,
          color: "transparent",
          label: {
            text: plotBands?.text ?? "",
            style: { color: plotBands?.color ?? "" },
          },
        };
      });
  },
};
