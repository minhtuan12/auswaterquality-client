import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BaseHelmet, HomeTitle, LoadingSection } from "../../components";
import { EventsCarousel } from "../Home/components";
import { NewsType } from "../../types";
import { NewsService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import "./styles.css";

const NewsContent = ({ data }: any) => {
  const { title = "", coverImage, content = "", createdAt } = data ?? {};
  return (
    <>
      {coverImage && (
        <Row>
          <Col md={12}>
            <img
              className="image-widget img-responsive img-hero mb-3"
              style={{ width: "100%", height: "475px", objectFit: "cover" }}
              src={coverImage}
              title={title ?? "News Title"}
              alt={title ?? "News Title"}
            />
          </Col>
        </Row>
      )}
      <Row>
        <Col md={12}>
          {createdAt && (
            <div className="news-detail mb-3">
              <span className="news-detail__date">
                {moment(createdAt).format("DD/MM/yyyy")}
              </span>
            </div>
          )}
          {
            content.map((b: any) =>
              <div
                dangerouslySetInnerHTML={{
                  __html: b.isSection
                    ? `<details contenteditable="false"><summary>${b.title || "Untitled"}</summary>${b.content}</details><br/>`
                    : `${b.content}<br/>`
                }}
                className="wjh-static-page"
              ></div>
            )
          }
        </Col>
      </Row>
      <EventsCarousel />
    </>
  );
};

const EventsContent = ({ data }: any) => {
  const {
    title = "",
    coverImage,
    content = "",
    thumbnailImage,
    meta,
  } = data ?? {};
  return (
    <Row>
      <Col md={9}>
        {coverImage && (
          <Row>
            <Col md={12}>
              <img
                className="image-widget img-responsive img-hero mb-3"
                style={{
                  width: "100%",
                  height: "475px",
                  objectFit: "cover",
                }}
                src={coverImage}
                title={title ?? "News Title"}
                alt={title ?? "News Title"}
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col md={12}>
            {
              content.map((b: any) =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: b.isSection
                      ? `<details><summary>${b.title || "Untitled"}</summary>${b.content}</details><br/>`
                      : `${b.content}<br/>`
                  }}
                  className="wjh-static-page"
                ></div>
              )
            }
          </Col>
        </Row>
      </Col>
      <Col md={3}>
        <div className="wjh-news-right">
          {thumbnailImage && (
            <img
              className="image-widget img-responsive img-hero mb-3"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
              }}
              src={thumbnailImage}
              title={title ?? "News Title"}
              alt={title ?? "News Title"}
            />
          )}
          {title && <h5 className="wjh-news-right__title">{title}</h5>}
          {meta?.startDate && (
            <div className="wjh-news-right__meta">
              <div className="wjh-news-right__meta-title">Date</div>
              <span className="wjh-news-right__meta-value">
                {moment(meta?.startDate).format("LL")}
              </span>
            </div>
          )}
          {meta?.startDate && meta?.endDate && (
            <div className="wjh-news-right__meta">
              <div className="wjh-news-right__meta-title">Time</div>
              <span className="wjh-news-right__meta-value">
                {moment(meta?.startDate).format("h a")} -{" "}
                {moment(meta?.endDate).format("h a")}
              </span>
            </div>
          )}
          {meta?.location && (
            <div className="wjh-news-right__meta">
              <div className="wjh-news-right__meta-title">Location</div>
              <span className="wjh-news-right__meta-value">
                {meta?.location}
              </span>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<NewsType | null>(null);
  const [loading, setLoading] = useState(true);
  const { title = "" } = data ?? {};

  useEffect(() => {
    setLoading(true);
    if (!id) {
      navigate("/not-found");
    }
    NewsService.getDetail(id)
      .then(({ data }) => {
        if (data.status === 0) {
          navigate("/not-found");
        }
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  return (
    <div className="wjh-news-detail">
      <BaseHelmet title="News Detail" />
      {loading ? (
        <LoadingSection />
      ) : (
        <Container>
          <HomeTitle title={title} />
          {(data?.category as any).slug === "event" ? (
            <EventsContent data={data} />
          ) : (
            <NewsContent data={data} />
          )}
        </Container>
      )}
    </div>
  );
};

export default NewsDetail;
