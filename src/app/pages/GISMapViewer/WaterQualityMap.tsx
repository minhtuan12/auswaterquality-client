import React, { useEffect, useMemo, useState } from "react";
import { Button, Empty, Spin } from "antd";
import { JsonDataType } from "../../types";
import { ADWRService } from "../../services";
import { GISMapViewerFilter } from ".";
import AustraliaMap from "./EsrisMapViewer";
import { LOCATION_MAPPING } from "../../utils/mocks/options";
import "./styles.css";
import { MapAnnotation } from "../../components";
import { TRIANGLE_ANNOTATION, WATER_COLOR_ANNOTATION } from "../../utils/consts";

type Props = {
  currentYear: number;
  filter: GISMapViewerFilter;
  yearSlider: any;
  filterCommunities: {
    key: string;
    label: string;
    value: string;
  }[];
  onOpenModal: VoidFunction;
  handleChangeFilter: (value: string, name: string) => void;
  onClearFilter: VoidFunction;
};

const WaterQualityMap: React.FC<Props> = ({
  filter,
  currentYear,
  yearSlider,
  filterCommunities,
  onOpenModal,
  handleChangeFilter,
  onClearFilter,
}) => {
  const [gisMapData, setGisMapData] = useState<JsonDataType[]>([]);
  const [progressData, setProgressData] = useState<any>([]);
  const [gisMapLoading, setGisMapLoading] = useState(true);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null | any>(
    null
  );
  const [gisTreeData, setGisTreeData] = useState<{
    waterProviders: string[];
    waterSources: string[];
    dataSources: string[];
    healthParameters: { [key: string]: number };
    aestheticParameters: { [key: string]: number };
    dataPeriod?: string;
    progress?: string
    region?: string
  }>({
    waterProviders: [],
    waterSources: [],
    dataSources: [],
    healthParameters: {},
    aestheticParameters: {},
    dataPeriod: '',
    progress: '',
    region: ''
  });
  const [gisTreeMapLoading, setGisTreeMapLoading] = useState(true);
  const hasFailedParameters =
    Object.keys(gisTreeData.healthParameters).length > 0 ||
    Object.keys(gisTreeData.aestheticParameters).length > 0;

  const renderMapName = useMemo(() => {
    if (selectedCommunity) {
      return typeof selectedCommunity === 'string' ? selectedCommunity : selectedCommunity.name;
    }
    const hasState = filter.state && filter.state !== "All";
    if (filter.community && filter.community !== "All") {
      const stateName = hasState
        ? ` - ${LOCATION_MAPPING[filter.state ?? ""]}`
        : "";
      return `${filter.community}${stateName}`;
    }
    if (hasState) {
      return `${LOCATION_MAPPING[filter.state ?? ""]}`;
    }
    return "Map Viewer";
  }, [filter.community, filter.state, selectedCommunity]);

  const displayFailedParameters = useMemo(() => {
    return Object.keys({
      ...gisTreeData.healthParameters,
      ...gisTreeData.aestheticParameters,
    }).join(", ");
  }, [gisTreeData.aestheticParameters, gisTreeData.healthParameters]);

  const removeExistingData = (data: string[], regex?: string) => {
    const allSources = new Set();

    data.forEach((item) => {
      const sources = item.split(regex ?? / and |, /);
      sources.forEach((source) => allSources.add(source));
    });

    return Array.from(allSources);
  };

  const getWaterSource = useMemo(() => {
    if (!gisTreeData?.waterSources || gisTreeData?.waterSources.length === 0) {
      return [];
    }
    return removeExistingData(gisTreeData.waterSources).join(", ");
  }, [gisTreeData.waterSources]);

  const onChangeSelectedCommunity = (value: string | null | any) => {
    setSelectedCommunity(value);
  };

  useEffect(() => {
    setGisMapLoading(true);
    ADWRService.getGisMap({
      year: currentYear,
      state: filter.state ?? "All",
      community: filter.community ?? "All",
      locationType: filter.locationType ?? "All",
    })
      .then(({ data }) => {
        setGisMapData(data.data.adwg);
        setProgressData(data.data.progress);
      })
      .catch(() => { })
      .finally(() => {
        setGisMapLoading(false);
      });
  }, [currentYear, filter.community, filter.locationType, filter.state]);

  useEffect(() => {
    if (typeof selectedCommunity === 'string' || selectedCommunity === null) {
      setGisTreeMapLoading(true);
      ADWRService.getGisTreeMap({
        year: currentYear,
        state: filter.state ?? "All",
        community: selectedCommunity ?? filter.community ?? "All",
        locationType: filter.locationType ?? "All",
      })
        .then(({ data }) => {
          setGisTreeData(data.data);
        })
        .catch(() => { })
        .finally(() => {
          setGisTreeMapLoading(false);
        });
    } else {
      setGisTreeData({
        waterSources: [selectedCommunity?.waterSource ?? ''],
        waterProviders: [selectedCommunity?.waterProvider ?? ''],
        dataSources: [selectedCommunity?.dataSource ?? ''],
        aestheticParameters: {},
        healthParameters: {},
        region: selectedCommunity?.region || '',
        dataPeriod: selectedCommunity?.dataPeriod || '',
        progress: selectedCommunity?.progress || ''
      })
    }
  }, [
    currentYear,
    filter.community,
    filter.locationType,
    filter.state,
    selectedCommunity,
  ]);

  return (gisMapData.length === 0 && progressData.length === 0) || gisMapLoading ? (
    <div className="wjh-water-map__no-data">
      {gisMapLoading ? (
        <Spin />
      ) : (
        <Empty description="No Data Found">
          <Button type="primary" onClick={onClearFilter}>
            Clear Filter
          </Button>
        </Empty>
      )}
    </div>
  ) : (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <MapAnnotation values={WATER_COLOR_ANNOTATION} mobile />
        <MapAnnotation values={TRIANGLE_ANNOTATION} mobile />
      </div>
      <div className="wjh-water-map">
        <div className="wjh-water-map__main">
          <AustraliaMap
            gisMapData={gisMapData}
            progressData={progressData}
            filter={filter}
            onOpenModal={onOpenModal}
            filterCommunities={filterCommunities}
            handleChangeFilter={handleChangeFilter}
            onChangeSelectedData={onChangeSelectedCommunity}
          />
        </div>

        <div className="wjh-water-map__details">
          <div className="wjh-water-map__details-inner">
            {gisTreeMapLoading ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin />
              </div>
            ) : (
              <>
                <div className="wjh-water-map__details-title">
                  {renderMapName}
                </div>
                <div className="wjh-water-map__details-content">
                  {hasFailedParameters && (
                    <div>
                      <b>Non-compliant parameters:</b> {displayFailedParameters}
                    </div>
                  )}
                  {gisTreeData.progress && gisTreeData.region && (
                    <div>
                      <b>Location:</b>{" "}
                      {gisTreeData.region}
                    </div>
                  )}
                  {removeExistingData(gisTreeData.waterProviders, "/").length > 0 && (
                    <div>
                      <b>Water provider/system:</b>{" "}
                      {removeExistingData(gisTreeData.waterProviders, "/").join(
                        ", "
                      )}
                    </div>
                  )}
                  {getWaterSource && (
                    <div>
                      <b>Water source:</b> {getWaterSource}
                    </div>
                  )}
                  {gisTreeData.progress ? (gisTreeData.progress === 'Data in process' ? <div>
                    <b>Water data:</b> {gisTreeData.dataPeriod || 'N/A'}
                  </div> : '') :
                    <div>
                      <b>Water data:</b> {yearSlider.minYear} - {yearSlider.maxYear}
                    </div>
                  }
                  {removeExistingData(gisTreeData.dataSources, "/").length > 0 && (
                    <div>
                      <b>Data source:</b>{" "}
                      {
                        removeExistingData(gisTreeData.dataSources, "/").length > 0 ?
                          removeExistingData(gisTreeData.dataSources, "/").join(
                            ", "
                          ) : 'N/A'
                      }
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterQualityMap;
