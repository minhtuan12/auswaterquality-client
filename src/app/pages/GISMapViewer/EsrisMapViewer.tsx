import { useEffect, useMemo, useRef, useState } from "react";
import { GeoJSON, LayerGroup, MapContainer, Marker, Popup, useMap, } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { JsonDataType } from "../../types";
import { GISMapViewerFilter } from ".";
import { Button, Space } from "antd";
import { CameraOutlined, HomeOutlined, InfoCircleOutlined, } from "@ant-design/icons";
import { ADWRGuidelineModal, BaseMapDropdown, GISMapDropdown, MapAnnotation, } from "../../components";
import Control from "./Control";
import australiaStates from "../../../../public/jsons/australaState.json";
import { STATE_OPTIONS1 } from "../../utils/mocks/options";
import { MAP_QUALITY_NAME } from "../../utils/adwr";
import { TRIANGLE_ANNOTATION, TRIANGLE_MARKERS, WATER_COLOR_ANNOTATION } from "../../utils/consts.ts";

type Props = {
  filter: GISMapViewerFilter;
  gisMapData: JsonDataType[];
  progressData: any;
  filterCommunities: {
    key: string;
    label: string;
    value: string;
  }[];
  onOpenModal: VoidFunction;
  onChangeSelectedData?: (key: string | null | any) => void;
  handleChangeFilter: (value: string, name: string) => void;
};

const stateView: Record<string, { center: [number, number]; zoom: number }> = {
  All: { center: [-25.2744, 133.7751], zoom: 4 }, // [lat, lng]
  NT: { center: [-19, 130.8], zoom: 5 },
  WA: { center: [-26, 120], zoom: 5 },
  SA: { center: [-29, 135], zoom: 5 },
  NSW: { center: [-32, 147], zoom: 5 },
  VIC: { center: [-37, 144.5], zoom: 5 },
  QLD: { center: [-20.917574, 142.702789], zoom: 5 }
};

// Fix for default marker icons in Leaflet
const createMarkerIcon = (borderColor: string, bgColor: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color:${bgColor}; width:16px; height:16px; border-radius:50%; border:2px solid ${borderColor}"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const createTriangleMarkerIcon = (pattern: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: TRIANGLE_MARKERS[pattern as keyof typeof TRIANGLE_MARKERS] as string,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const markers = {
  good: createMarkerIcon("rgb(0,128,0)", "rgba(0,128,0, 0.25)"),
  unhealthy: createMarkerIcon("rgba(255,0,0)", "rgba(255,0,0, 0.25)"),
  unacceptable: createMarkerIcon("rgba(255,255,0)", "rgba(255,255,0, 0.25)"),
  'N/A': createMarkerIcon("rgb(119, 122, 119)", "rgba(20, 20, 19, 0.25)"),
  "Data available, not publicly released": createTriangleMarkerIcon('empty'),
  "Data in process": createTriangleMarkerIcon('striped'),
  "Data request sent": createTriangleMarkerIcon('dots'),
};

const baseMaps: { [key: string]: { url: string; attribution: string } } = {
  "streets-navigation-vector": {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  "osm-3d": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics",
  },
  streets: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
  },
  "dark-gray": {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

const MapViewHandler = (
  {
    center,
    zoom,
  }: {
    center: [number, number];
    zoom: number;
  }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const BaseMapHandler = ({ baseMap }: { baseMap: string }) => {
  const map = useMap();
  useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });
    const mapOptions = baseMaps[baseMap ?? ""];
    L.tileLayer(mapOptions.url, {
      attribution: mapOptions.attribution,
    }).addTo(map);
  }, [baseMap, map]);
  return null;
};

const ResetZoomControl = () => {
  const map = useMap();
  return (
    <Control position="topleft">
      <Button
        icon={<HomeOutlined />}
        onClick={() => {
          map.setView([-25.2744, 133.7751], 4);
        }}
      />
    </Control>
  );
};

const EsrisMapViewer = (
  {
    filter,
    gisMapData,
    progressData,
    filterCommunities,
    onOpenModal,
    onChangeSelectedData,
    handleChangeFilter,
  }: Props) => {
  const mapRef = useRef<L.Map>(null);
  const [openGuideline, setOpenGuideline] = useState(false);

  const currentState = filter.state ?? "All";
  const { center, zoom } = stateView[currentState];

  const markersLayer = useMemo(
    () => (
      <LayerGroup>
        {gisMapData.filter((item: any) => item.community.state.code !== 'QLD').map((p) => {
          const failedParameters = {
            ...p.healthParameters,
            ...p.aestheticParameters,
          };

          return (
            <Marker
              key={p.community._id}
              position={{
                lat: isNaN(Number(p.community.latitude))
                  ? 0
                  : Number(p.community.latitude),
                lng: isNaN(Number(p.community.longitude))
                  ? 0
                  : Number(p.community.longitude),
              }}
              icon={markers[p.quality as keyof typeof markers]}
              eventHandlers={{
                click: () => {
                  onChangeSelectedData?.(p.community.name);
                },
                popupclose: () => {
                  onChangeSelectedData?.(null);
                },
              }}
            >
              <Popup>
                <h5>{p.community.name}</h5>
                <p className="wjh-esris-popup-content">
                  <strong>Year:</strong> {p.year}
                </p>
                <p className="wjh-esris-popup-content">
                  <strong>Drinking Water Quality:</strong>{" "}
                  {MAP_QUALITY_NAME[p.quality]}
                </p>
                <p className="wjh-esris-popup-content">
                  <strong>Non-compliant parameters:</strong>{" "}
                  {Object.keys(failedParameters).length > 0
                    ? Object.keys(failedParameters).join(", ")
                    : "None"}
                </p>
              </Popup>
            </Marker>
          );
        })}

        {
          progressData.map((p: any) => {
            return (
              <Marker
                key={p._id}
                position={{
                  lat: isNaN(Number(p.latitude))
                    ? 0
                    : Number(p.latitude),
                  lng: isNaN(Number(p.longitude))
                    ? 0
                    : Number(p.longitude),
                }}
                icon={markers[p.progress as keyof typeof markers]}
                eventHandlers={{
                  click: () => {
                    onChangeSelectedData?.(p);
                  },
                  popupclose: () => {
                    onChangeSelectedData?.(null);
                  },
                }}
              >
                <Popup>
                  <h5>{p.name}</h5>
                  <p className="wjh-esris-popup-content">
                    <strong>Progress:</strong> {p.progress}
                  </p>
                </Popup>
              </Marker>
            )
          })
        }
      </LayerGroup>
    ),
    [gisMapData, progressData, onChangeSelectedData]
  );
  const stateStyle = useMemo(
    () => ({
      weight: 2,
      color: "transparent",
      fillOpacity: 0,
    }),
    []
  );

  const highlightStyle = {
    weight: 2,
    color: "#3388ff",
    fillOpacity: 0,
  };

  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.name) {
      layer.on({
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle(highlightStyle);
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle(stateStyle);
        },
        click: () => {
          const state = STATE_OPTIONS1.find(
            (item) => item.label === feature.properties.name
          );
          if (state) {
            handleChangeFilter(state.key, "state");
          }
        },
      });
    }
  };

  const onOpenGuidelineModal = () => {
    setOpenGuideline(true);
  };

  const onCloseGuidelineModal = () => {
    setOpenGuideline(false);
  };

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <ADWRGuidelineModal
        open={openGuideline}
        onClose={onCloseGuidelineModal}
      />
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <Control position="topleft">
          <Button
            icon={<InfoCircleOutlined />}
            onClick={onOpenGuidelineModal}
          />
        </Control>
        <Control position="topleft">
          <Button icon={<CameraOutlined />} onClick={onOpenModal} />
        </Control>
        <ResetZoomControl />
        <Control position="bottomleft">
          <MapAnnotation values={WATER_COLOR_ANNOTATION} />
          <BaseMapDropdown
            value={filter.baseMap}
            onChange={(value) => {
              handleChangeFilter(value, "baseMap");
            }}
          />
        </Control>
        <Control position="bottomright">
          <MapAnnotation values={TRIANGLE_ANNOTATION} horizontal />
        </Control>
        <Control position="topright">
          <Space>
            <GISMapDropdown
              options={STATE_OPTIONS1}
              value={filter.state}
              onChange={(value) => {
                handleChangeFilter(value, "state");
              }}
              placeholder="Select State"
            />
            <GISMapDropdown
              options={filterCommunities}
              value={filter.community}
              onChange={(value) => handleChangeFilter(value, "community")}
              // showSearch
              placeholder="Select Location"
            />
          </Space>
        </Control>
        <GeoJSON
          data={australiaStates as any}
          style={stateStyle}
          onEachFeature={onEachFeature}
        />
        <BaseMapHandler baseMap={filter.baseMap} />
        <MapViewHandler center={center} zoom={zoom} />
        {markersLayer}
      </MapContainer>
    </div>
  );
};

export default EsrisMapViewer;
