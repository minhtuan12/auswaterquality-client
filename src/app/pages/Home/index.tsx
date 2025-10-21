import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button as AntButton, Slider, SliderSingleProps, Space } from "antd";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { EventsCarousel, HomeWidget } from "./components";
import {
  BaseHelmet, ConfigurationText,
  GlobeInfoModal,
  HighlightCard,
  HomeBanner,
} from "../../components";
import { Home_Img1 } from "../../assets/images";
import { routeDefine } from "../../configs";
import ScatterCommunity from "../InteractiveDashboard/ScatterCommunity";
import { NewsType, ScatterCommunityType } from "../../types";
import { ADWRService, NewsService } from "../../services";
import { debounce } from "lodash";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useConfiguration, useContextModal } from "../../contexts";
import "./styles.css";

const marks: SliderSingleProps["marks"] = {
  2007: "2007",
  2009: "2009",
  2011: "2011",
  2013: "2013",
  2015: "2015",
  2017: "2017",
  2019: "2019",
  2021: "2021",
  2023: "2023",
};

const DEFAULT_VALUE = 2023;

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentYear, setCurrentYear] = useState(DEFAULT_VALUE);
  const [scatterCommunityData, setScatterCommunityData] = useState<
    ScatterCommunityType[]
  >([]);
  const [scatterCommunityDataLoading, setScatterCommunityDataLoading] =
    useState<boolean>(true);
  const [highlightData, setHighlightData] = useState<NewsType[]>([]);
  const { methodology } = useContextModal();
  const { configurations } = useConfiguration();
  const { snapShot, aboutADWR, chartNote } = configurations.data;

  const handleChangeDebounced = debounce((newValue) => {
    setCurrentYear(newValue);
  }, 300);

  const handleChange = useCallback(
    (newValue: string) => {
      handleChangeDebounced(newValue);
    },
    [handleChangeDebounced]
  );

  const onRedirectInteractiveChart = () => {
    navigate("/interactive-dashboard", {
      state: { tab: "drinking_water_quality" },
    });
  };

  const displayMarks: SliderSingleProps["marks"] = useMemo(() => {
    const obj: { [key: string]: React.ReactNode } = {};
    for (const mark in marks) {
      const activeClassname =
        currentYear.toString() === mark
          ? "wjh-slider--active"
          : "wjh-slider__mark-text";
      obj[mark] = (
        <div key={mark} className={activeClassname}>
          {mark}
        </div>
      );
    }
    return obj;
  }, [currentYear]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/3d-map/index.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentYear((pre) => {
    //     if (pre === 2022) {
    //       return 2008;
    //     }
    //     return pre + 1;
    //   });
    // }, 1500);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    ADWRService.getGisMap({
      year: currentYear,
      locationType: "All",
      state: "All",
    })
      .then(({ data }) => {
        setScatterCommunityData(data.data.adwg);
      })
      .catch(() => { })
      .finally(() => {
        setScatterCommunityDataLoading(false);
      });
  }, [currentYear]);

  useEffect(() => {
    NewsService.getHighlightLists().then(({ data }) => {
      setHighlightData(data);
    });
  }, []);

  return (
    <div className="wjh-home">
      <BaseHelmet title="Home" />
      {/* Banner */}
      <HomeBanner isVideo />
      {/* About ADWR */}
      <Container className="wjh-home__about">
        <div className="wjh-home__about-left">
          <h5>
            <Link to={routeDefine.aboutADWR}>
              {aboutADWR?.name ?? "About ADWR"}
            </Link>
          </h5>
          <p>{aboutADWR?.value}</p>
          <div className="wjh-home__about-learn-more">
            <AntButton
              href={routeDefine.aboutADWR}
              className="primary-link text-white"
              type="primary"
            >
              Learn More &gt; &gt;
            </AntButton>
          </div>
        </div>
        <div className="wjh-home__about-right">
          <img src={Home_Img1} alt="" width={320} />
        </div>
      </Container>

      <HomeWidget
        title={snapShot?.fields?.snapShotTitle?.value ?? t("data_snapshot_tlt")}
        description={
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {snapShot?.fields?.snapShotSubTitle?.value ??
              t(
                "Drinking water quality in the Northern Territory, South Australia, Victoria and Western Australia"
              )}
          </div>
        }
        titlePath={routeDefine.interactiveDashboard}
        rootClassname="wjh-home__data-snapshot"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: scatterCommunityData.length > 0 ? 0 : "10px",
          }}
        >
          <Space>
            <AntButton type="primary" onClick={onRedirectInteractiveChart}>
              Learn More
            </AntButton>
            <AntButton
              type="primary"
              variant="outlined"
              color="blue"
              icon={<InfoCircleOutlined />}
              onClick={() => {
                methodology.open();
              }}
            >
              Methodology
            </AntButton>
          </Space>
        </div>
        <ScatterCommunity
          data={scatterCommunityData}
          loading={scatterCommunityDataLoading}
        />
        <div>
          <Slider
            min={2007}
            max={DEFAULT_VALUE}
            step={1}
            marks={displayMarks}
            defaultValue={DEFAULT_VALUE}
            // value={currentYear}
            classNames={{ root: "wjh-slider", track: "wjh-slider__track" }}
            onChange={handleChange as any}
          />
        </div>
        <ConfigurationText data={chartNote} style={{ marginTop: '12px' }} />
      </HomeWidget>

      <div className="wjh-globe">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h4 className="wjh-globe__title">
                <Link to={routeDefine.gisMapViewer} className="primary-link">
                  {t("globe_map_viewer_tlt")}
                </Link>
              </h4>
            </Col>
            <Col md={2}>
              <div className="zoom-wrapper d-flex" style={{ gap: 10 }}>
                <Button
                  id="zoomIn"
                  variant="secondary"
                  className="wjh-btn-round"
                >
                  <i className="bi bi-plus"></i>
                </Button>
                <Button
                  id="zoomOut"
                  variant="secondary"
                  className="wjh-btn-round"
                >
                  <i className="bi bi-dash"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div id="map-home" className="map-container">
          <div id="map-3d">
            <div className="globe-bg"></div>
            <canvas id="c" width="366" height="1000"></canvas>
          </div>
          <GlobeInfoModal />
        </div>
      </div>

      {highlightData.length > 0 && (
        <HomeWidget
          title={t("Highlight")}
          titlePath={routeDefine.newsAndEvents}
        >
          <div className="wjh-home__highlight">
            {highlightData.map((item, index) => (
              <HighlightCard
                key={item.id}
                data={item}
                orientation={index % 2 === 0 ? "ltr" : "rtl"}
              />
            ))}
          </div>
        </HomeWidget>
      )}

      {/* New And Event */}
      <EventsCarousel />
    </div>
  );
};

export default Home;
