import { useEffect, useState } from "react";
import {
  DotLightQualityType,
  ExceedancesTreeMapType,
  FailedParametersBarChart,
  LineChartType,
  PercentageWaterQualityType,
  ScatterCommunityType,
} from "../types";
import { ADWRService } from "../services";
import { InteractiveDashboardFilter } from "../pages/InteractiveDashboard";
import dayjs from "dayjs";

type Props = {
  filter: InteractiveDashboardFilter;
  communities: any[];
  selectedYears: [dayjs.Dayjs, dayjs.Dayjs] | null;
  currentYear: number;
};

const useInteractiveChart = ({
  filter,
  communities,
  selectedYears,
  currentYear,
}: Props) => {
  const [failedParametersData, setFailedParametersData] = useState<
    FailedParametersBarChart[]
  >([]);
  const [failedParametersDataLoading, setFailedParametersDataLoading] =
    useState<boolean>(true);
  const [exceedancesTreeMapData, setExceedancesTreeMapData] = useState<
    ExceedancesTreeMapType[]
  >([]);
  const [exceedancesTreeMapDataLoading, setExceedancesTreeMapDataLoading] =
    useState<boolean>(true);
  const [percentageWaterQualityData, setPercentageWaterQualityData] = useState<
    PercentageWaterQualityType[]
  >([]);
  const [
    percentageWaterQualityDataLoading,
    setPercentageWaterQualityDataLoading,
  ] = useState<boolean>(true);
  const [qualityTimeRangeData, setQualityTimeRangeData] = useState<
    ExceedancesTreeMapType[]
  >([]);
  const [qualityTimeRangeDataLoading, setQualityTimeRangeDataLoading] =
    useState<boolean>(true);
  const [dotLightQualityChartData, setDotLightQualityChartData] = useState<
    DotLightQualityType[]
  >([]);
  const [dotLightQualityChartDataLoading, setDotLightQualityChartDataLoading] =
    useState<boolean>(true);
  const [lineChartData, setLineChartData] = useState<LineChartType[]>([]);
  const [lineChartDataLoading, setLineChartDataLoading] =
    useState<boolean>(true);
  const [scatterCommunityData, setScatterCommunityData] = useState<
    ScatterCommunityType[]
  >([]);
  const [scatterCommunityDataLoading, setScatterCommunityDataLoading] =
    useState<boolean>(true);

  const isCommunity = filter.community && filter.community !== "All";

  useEffect(() => {
    if (!isCommunity) {
      return;
    }
    const findCommunity = communities.find(
      (item: any) => item.name === filter.community
    );
    ADWRService.getParameterFailedBarChart({
      community: findCommunity?._id ?? undefined,
    })
      .then(({ data }) => {
        setFailedParametersData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setFailedParametersDataLoading(false);
      });
  }, [communities, filter.community, isCommunity]);

  useEffect(() => {
    if (isCommunity) {
      return;
    }
    ADWRService.getExceedancesTreeMap({
      location: filter.state !== "All" && filter.state ? "State" : "All",
      locationType: filter.locationType ?? "All",
      state: filter.state ?? "All",
      year: currentYear,
    })
      .then(({ data }) => {
        setExceedancesTreeMapData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setExceedancesTreeMapDataLoading(false);
      });
  }, [filter.locationType, filter.state, isCommunity, currentYear]);

  useEffect(() => {
    if (isCommunity) {
      return;
    }
    ADWRService.getPercentageWaterQuality({
      locationType: filter.locationType ?? "All",
      state: filter.state ?? "All",
    })
      .then(({ data }) => {
        setPercentageWaterQualityData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setPercentageWaterQualityDataLoading(false);
      });
  }, [filter.locationType, filter.state, isCommunity]);

  useEffect(() => {
    if (isCommunity || !selectedYears) {
      return;
    }
    const [start, end] = selectedYears;
    const startYear = start.year();
    const endYear = end.year();
    ADWRService.getQualityTimeRange({
      locationType: filter.locationType ?? "All",
      state: filter.state ?? "All",
      startYear,
      endYear,
    })
      .then(({ data }) => {
        setQualityTimeRangeData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setQualityTimeRangeDataLoading(false);
      });
  }, [filter.locationType, filter.state, isCommunity, selectedYears]);

  useEffect(() => {
    if (!isCommunity) {
      return;
    }
    ADWRService.getDotLightQuality({ community: filter.community ?? "All" })
      .then(({ data }) => {
        setDotLightQualityChartData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setDotLightQualityChartDataLoading(false);
      });
  }, [isCommunity, filter.community]);

  useEffect(() => {
    if (isCommunity || !selectedYears) {
      return;
    }
    const [start, end] = selectedYears;
    const startYear = start.year();
    const endYear = end.year();
    ADWRService.getLineChart({
      startYear,
      endYear,
      locationType: filter.locationType ?? "All",
      state: filter.state ?? "All",
    })
      .then(({ data }) => {
        setLineChartData(data.data);
      })
      .catch(() => { })
      .finally(() => {
        setLineChartDataLoading(false);
      });
  }, [isCommunity, selectedYears, filter.locationType, filter.state]);

  useEffect(() => {
    if (isCommunity) {
      return;
    }
    ADWRService.getGisMap({
      year: currentYear,
      locationType: filter.locationType ?? "All",
      state: filter.state ?? "All",
      isDrinkingWater: true
    })
      .then(({ data }) => {
        setScatterCommunityData(data.data.adwg);
      })
      .catch(() => { })
      .finally(() => {
        setScatterCommunityDataLoading(false);
      });
  }, [
    isCommunity,
    selectedYears,
    filter.locationType,
    filter.state,
    currentYear,
  ]);

  return {
    failedParameter: {
      data: failedParametersData,
      loading: failedParametersDataLoading,
    },
    exceedancesTreeMap: {
      data: exceedancesTreeMapData,
      loading: exceedancesTreeMapDataLoading,
    },
    percentageWaterQuality: {
      data: percentageWaterQualityData,
      loading: percentageWaterQualityDataLoading,
    },
    qualityTimeRange: {
      data: qualityTimeRangeData,
      loading: qualityTimeRangeDataLoading,
    },
    dotLightQuality: {
      data: dotLightQualityChartData,
      loading: dotLightQualityChartDataLoading,
    },
    lineChart: {
      data: lineChartData,
      loading: lineChartDataLoading,
    },
    scatterCommunity: {
      data: scatterCommunityData,
      loading: scatterCommunityDataLoading,
    },
  };
};

export default useInteractiveChart;
