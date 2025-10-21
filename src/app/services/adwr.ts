import { publicInstance } from "./api";

const ADWR_BASE_URL = "/api/adwr";

export const ADWRService = {
  getGisMap: async (params?: {
    year?: number;
    state?: string;
    community?: string;
    locationType?: string;
    isDrinkingWater?: boolean
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/gis-map`, { params });
  },
  getGisTreeMap: async (params?: {
    year: number;
    state: string;
    community: string;
    locationType: string;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/gis-tree-map`, {
      params,
    });
  },
  getScatterChart: async (params?: {
    year?: number;
    state: string | string[];
    community?: string;
    locationType?: string;
    parameter?: string;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/scatter-chart`, {
      params,
    });
  },
  getParameterBarChart: async (params?: {
    community?: string;
    parameterName?: string;
    parameterType?: string;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/parameter-bar-chart`, {
      params,
    });
  },
  getParameterFailedBarChart: async (params?: { community?: string }) => {
    return await publicInstance.get(
      `${ADWR_BASE_URL}/parameter-failed-bar-chart`,
      {
        params,
      }
    );
  },
  getExceedancesTreeMap: async (params?: {
    year?: number;
    location?: string;
    locationType?: string;
    state?: string;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/exceedances-tree-map`, {
      params,
    });
  },
  getPercentageWaterQuality: async (params?: {
    year?: number;
    location?: string;
    locationType?: string;
    state?: string;
  }) => {
    return await publicInstance.get(
      `${ADWR_BASE_URL}/percentage-water-quality-chart`,
      {
        params,
      }
    );
  },
  getQualityTimeRange: async (params?: {
    startYear?: number;
    endYear?: number;
    locationType?: string;
    state?: string;
    location?: string;
  }) => {
    return await publicInstance.get(
      `${ADWR_BASE_URL}/quality-time-range-bar-chart`,
      {
        params,
      }
    );
  },
  getDotLightQuality: async (params?: { community?: string }) => {
    return await publicInstance.get(
      `${ADWR_BASE_URL}/dot-light-quality-chart`,
      {
        params,
      }
    );
  },
  getRangeOfData: async (params?: {
    state: string;
    community: string;
    locationType: string;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/get-range-of-year`, {
      params,
    });
  },
  getLineChart: async (params?: {
    locationType: string;
    state: string;
    startYear: number;
    endYear: number;
  }) => {
    return await publicInstance.get(`${ADWR_BASE_URL}/get-line-chart`, {
      params,
    });
  },
  getParameters: async (params?: {
    state?: string,
    community?: string
  }) => {
    return await publicInstance.get(`/api/parameters`, {
      params,
    });
  },
};
