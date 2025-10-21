import { Guideline } from "../../enums/Guideline";

export const HEALTH_PRIORITY: string[] = ["max", "95th", "avg"];
export const AESTHETIC_PRIORITY: string[] = ["avg", "max"];
export const VALID_AESTHETIC_PARAMETERS: string[] = [
  "Colour",
  "Turbidity",
  "Hardness",
  "TDS",
  "pH",
  "Sodium",
  "Iron",
  "Manganese",
  "Chloride",
];
export const GUIDELINE_VALUE: { [key: string]: string[] } = {
  [Guideline.ADWR2011]: ["threshold1_11", "threshold2_11", "threshold3_11"],
  [Guideline.ADWR2004]: ["threshold1_04", "threshold2_04"],
  [Guideline.ADWR1996]: ["threshold1_96", "threshold2_96"],
};
export const GUIDELINE_NAME: { [key: string]: string } = {
  [Guideline.ADWR2011]: "Guideline11",
  [Guideline.ADWR2004]: "Guideline04",
  [Guideline.ADWR1996]: "Guideline96",
};

export const QualityColor: { [key: string]: string } = {
  green: "#008000",
  yellow: "#ffde21",
  orange: "#ffa500",
  red: "#ff0000",
};

export const titleStyleChart = {
  style: {
    fontSize: 16,
    fontWeight: 700,
  },
};

export type ADWRQuality = "good" | "unhealthy" | "unacceptable";

export const MAP_QUALITY_NAME: {
  [key in ADWRQuality | "unhealthyBreak" | "unacceptableBreak"]: string;
} = {
  good: "Fully compliant with ADWG guidelines",
  unhealthy: "Not fully compliant with health-based ADWG",
  unhealthyBreak: "Not fully compliant with<br/>health-based ADWG",
  unacceptable: "Not fully compliant with acceptability-based ADWG",
  unacceptableBreak: "Not fully compliant with <br/>acceptability-based ADWG",
};
