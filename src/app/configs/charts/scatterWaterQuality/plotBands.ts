import { QualityColor } from "../../../utils/adwr";

export const ScatterPlotBands = {
  default: [
    {
      text: "Compliance",
      color: QualityColor.green,
    },
    {
      text: "Non-Compliance",
      color: QualityColor.red,
    },
  ],
  TDS: [
    {
      text: "Good quality",
      color: QualityColor.green,
    },
    {
      text: "Fair quality",
      color: QualityColor.yellow,
    },
    {
      text: "Poor quality",
      color: QualityColor.orange,
    },
    {
      text: "Unacceptable quality",
      color: QualityColor.red,
    },
  ],
  pH: [
    {
      text: "May be corrosive",
      color: QualityColor.red,
    },
    {
      text: "ADWG guidelines",
      color: QualityColor.green,
    },
    {
      text: "May cause scale and taste problems",
      color: QualityColor.red,
    },
  ],
  Hardness: [
    {
      text: "Good quality",
      color: QualityColor.green,
    },
    {
      text: "Increasing scaling problems",
      color: QualityColor.yellow,
    },
    {
      text: "Severe scaling",
      color: QualityColor.red,
    },
  ],
  ecoli: [
    {
      text: "Non-compliance",
      color: QualityColor.red,
    },
    {
      text: "Compliance",
      color: QualityColor.green,
    },
  ],
};
