import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Empty, Spin } from "antd";
import {
  BaseHelmet,
  BasePagination,
  HomeTitle,
  NewsCard,
} from "../../components";
import { EventsCarousel } from "../Home/components";
import { NewsService } from "../../services";
import { NewsType } from "../../types";
import "./styles.css";

const MAX_RIGHT_NEWS = 7;

const NewsPage = () => {
  const [data, setData] = useState<{
    data: NewsType[];
    meta: { limit: number; page: number; total: number };
  }>({
    data: [],
    meta: { limit: 10, page: 1, total: 10 },
  });
  const [loading, setLoading] = useState(true);

  const displayNews = () => {
    if (loading) {
      return <Spin />;
    }
    if (data.data.length === 0) {
      return <Empty />;
    }
    return (
      <Row>
        <Col md={8}>
          <NewsCard data={data.data[0]} />
          <Row style={{ marginTop: 30 }}>
            {data.data.slice(1, 3).map((item) => (
              <Col md={6} key={item._id}>
                <NewsCard data={item} isGridCard />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          {data.data.slice(3).map((item, b) => {
            return (
              <>
                <NewsCard key={"a"} hasThumbnail={false} data={item} />
                {b + 1 < MAX_RIGHT_NEWS && <hr className="mt-0" />}
              </>
            );
          })}
          <BasePagination
            classNames={{ root: "mt-4", pagination: "wjh-news-pagination" }}
            total={data.meta.total}
            onChange={() => {}}
          />
        </Col>
      </Row>
    );
  };

  useEffect(() => {
    setLoading(true);
    NewsService.searchList({
      limit: 8,
      categories: ["c985fb22-4b3c-440b-a2b3-402267b269f2"],
    })
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="wjh-news">
      <BaseHelmet title="News And Events" />
      <Container>
        <HomeTitle title="News" />
        {displayNews()}
        <EventsCarousel />
      </Container>
    </div>
  );
};

export default NewsPage;
