export * from "./auth";
export * from "./user";
export * from "./news";
export * from "./people";

export type NewsType = {
  _id?: string;
  slug?: string;
  id: string;
  title: string;
  shortDesc: string;
  thumbnailImage: string;
  coverImage?: string;
  createdAt: string;
  content?: string;
  endAt?: string;
  category: string;
  location?: string;
  meta?: {
    startDate?: string;
    endDate?: string;
    isHighligh?: boolean;
    youtubeUrl?: string;
    location?: string;
  };
};

export type ParameterDataType = {
  _id: string;
  type: string;
  name: string;
  displayName: string;
  threshold1_11?: number;
  threshold2_11?: number;
  threshold3_11?: number;
  threshold1_04?: number;
  threshold2_04?: number;
  threshold1_96?: number;
  threshold2_96?: number;
  units?: string;
};

export type WaterQuality = "good" | "unhealthy" | "unacceptable";

export type StateType = {
  _id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
};

export type CommunityType = {
  _id: string;
  name: string;
  longitude: string;
  latitude: string;
  state: StateType;
  region: string;
  censusCode: string;
  cencusName: string;
  remoteArea: string;
  locationType: "Regional and remote" | "Metropolitan";
  waterSource: string;
  waterProvider: string;
  dataSource: string;
  createdAt: string;
  updatedAt: string;
};

export type JsonDataType = {
  community: CommunityType;
  state: string;
  locationType: string;
  year: number;
  healthParameters: {
    [key: string]: { [detail: string]: string | number };
  };
  aestheticParameters: {
    [key: string]: { [detail: string]: string | number };
  };
  quality: WaterQuality;
  longitude: number;
  latitude: number;
};

export type FailedParametersBarChart = {
  parameterName: string;
  data: ParameterBarChartType[];
};

export type ParameterBarChartType = {
  year: number;
  min: number;
  max: number;
  avg: number;
  "95th": number;
  spls: number;
  spls_excd: number;
  spls_pass?: number;
  pct?: number;
};

export type ExceedancesTreeMapType = {
  state?: string;
  healthParameters: { [key: string]: number };
  aestheticParameters: { [key: string]: number };
};

export type PercentageWaterQualityType = {
  state?: string;
  good: string;
  unhealthy: string;
  unacceptable: string;
};

export type DotLightQualityType = {
  _id: string;
  failedParams: string[];
  quality: WaterQuality;
  year: number;
};

export type ScatterParameterChartType = {
  _id: string;
  year: number;
  community: CommunityType;
  quality: WaterQuality;
  aestheticParameters?: { [key: string]: number };
  healthParameters: { [key: string]: number };
  otherParameters: { [key: string]: number };
};

export type LineChartType = {
  _id: string;
  year: number;
  good?: number;
  unhealthy?: number;
  unacceptable?: number;
};

export type ScatterCommunityType = {
  _id: string;
  year: number;
  community: CommunityType;
  healthParameters: { [key: string]: { [key: string]: string } };
  aestheticParameters: { [key: string]: { [key: string]: string } };
  otherParameters: { [key: string]: { [key: string]: string } };
  quality: WaterQuality;
};
