import { Guideline } from "../../enums/Guideline";
import { ParameterType } from "../../enums/Parameter";

export const COMMUNITY_OPTIONS = [
  {
    key: "darwin",
    label: "Darwin",
    value: "darwin",
  },
];

export const LOCATION = [
  {
    key: "All",
    label: "All",
    value: "All",
  },
  {
    key: "Location Type",
    label: "Location Type",
    value: "Location Type",
  },
  {
    key: "State",
    label: "State",
    value: "State",
  },
  {
    key: "Community",
    label: "Community",
    value: "Community",
  },
];

export const MAP_PARAMETER_VALUE: { [key: string]: string } = {
  avg: "Average",
  "95th": "95th percentile",
  pct: "Compliance rate",
  max: "Max",
  min: "Min",
};

export const DB_STATE: { [key: string]: string } = {
  "9851980f-83c3-4ea0-9261-44158ca06eeb": "NT",
  "3df5d900-b31a-4b80-a675-271b30ea82dc": "SA",
  "51e9e5a4-81d4-4f1e-ac1f-8d8398b152fb": "WA",
  "ea0613d3-763a-46e5-ac18-d73d150a35f7": "VIC",
  "d53a70b6-dd96-48cf-9fed-9949d66cdf77": "QLD"
};

export const LOCATION_MAPPING: { [key: string]: string } = {
  NT: "Northern Territory",
  WA: "Western Australia",
  SA: "South Australia",
  VIC: "Victoria",
  QLD: "Queensland"
};

export const STATE_OPTIONS = [
  {
    key: "All",
    label: "All",
    value: "All",
  },
  {
    key: "NT",
    label: "Northern Territory",
    value: "NT",
  },
  {
    key: "SA",
    label: "South Australia",
    value: "SA",
  },
  {
    key: "VIC",
    label: "Victoria",
    value: "VIC",
  },
  {
    key: "WA",
    label: "Western Australia",
    value: "WA",
  },
  {
    key: "QLD",
    label: "Queensland",
    value: "QLD",
  },
];

export const STATE_OPTIONS1 = [
  {
    key: "All",
    label: "Select State",
    value: "All",
  },
  {
    key: "NT",
    label: "Northern Territory",
    value: "NT",
  },
  {
    key: "SA",
    label: "South Australia",
    value: "SA",
  },
  {
    key: "VIC",
    label: "Victoria",
    value: "VIC",
  },
  {
    key: "WA",
    label: "Western Australia",
    value: "WA",
  },
  {
    key: "QLD",
    label: "Queensland",
    value: "QLD",
  },
];

export const COMMUNITY_TYPE_OPTIONS = [
  {
    key: "major-communities",
    label: "Major Communities",
    value: "major-communities",
  },
];

export const PARAMETER_TYPE_OPTIONS = [
  {
    key: ParameterType.ALL,
    label: "All",
    value: ParameterType.ALL,
  },
  {
    key: ParameterType.HEALTH,
    label: "Health-based Parameter",
    value: ParameterType.HEALTH,
  },
  {
    key: ParameterType.AESTHETIC,
    label: "Acceptability-based Parameter",
    value: ParameterType.AESTHETIC,
  },
];

export const LOCATION_TYPE_OPTIONS = [
  {
    key: "All",
    label: "All",
    value: "All",
  },
  {
    key: "Metropolitan areas",
    label: "Metropolitan areas",
    value: "Metropolitan",
  },
  {
    key: "Regional and remote",
    label: "Region and remote areas",
    value: "Regional and remote",
  },
];

export const EXCEEDANCE_MODE_OPTIONS = [
  { key: "All", label: "All", value: "All" },
  {
    key: "health-exceedance",
    label: "Health-based exceedances",
    value: "health-exceedance",
  },
  {
    key: "aesthetic-exceedance",
    label: "Acceptability-based exceedances",
    value: "aesthetic-exceedance",
  },
];

export const GUIDELINE_OPTION = [
  {
    key: Guideline.ADWR2011,
    label: "Guideline 2011",
    value: Guideline.ADWR2011,
  },
  {
    key: Guideline.ADWR2004,
    label: "Guideline 2004",
    value: Guideline.ADWR2004,
  },
  {
    key: Guideline.ADWR1996,
    label: "Guideline 1996",
    value: Guideline.ADWR1996,
  },
];

export const BASE_MAP_OPTIONS = [
  {
    key: "streets-navigation-vector",
    label: "World Navigation Map",
    value: "streets-navigation-vector",
  },
  {
    key: "osm-3d",
    label: "Open Street Map",
    value: "osm-3d",
  },
  {
    key: "dark-gray",
    label: "Dark Gray Canvas",
    value: "dark-gray",
  },
  // {
  //   key: "gray",
  //   label: "Light Gray Canvas",
  //   value: "gray",
  // },
  {
    key: "streets",
    label: "World Street Map",
    value: "streets",
  },
];

export const CATEGORIES = [
  {
    key: "daf937a4-8e5a-48bf-a4c7-31487d5097b0",
    label: "Research",
    value: "daf937a4-8e5a-48bf-a4c7-31487d5097b0",
  },
  {
    key: "3bbae852-22d3-49af-80c0-48022f67c960",
    label: "Publications",
    value: "3bbae852-22d3-49af-80c0-48022f67c960",
  },
  {
    key: "b8487f87-9067-4e62-ac88-f0f2b9a43b9a",
    label: "Projects",
    value: "b8487f87-9067-4e62-ac88-f0f2b9a43b9a",
  },
  {
    key: "9d13bd87-d582-46e8-9f3b-c7e59efc3324",
    label: "Policy Review",
    value: "9d13bd87-d582-46e8-9f3b-c7e59efc3324",
  },
];
