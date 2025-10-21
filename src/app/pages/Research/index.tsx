import { useState, useEffect } from "react";
import { Carousel, CarouselProps } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import {
  BaseHelmet,
  HomeTitle,
  LoadingSection,
  NewsCard,
  NewsCarouselBanner,
} from "../../components";
import { NewsType } from "../../types";
import { NewsService } from "../../services";
import "./styles.css";
import { CATEGORIES } from "../../utils/mocks/options";

const carouselConfig: CarouselProps = {
  autoplay: true,
  infinite: true,
  speed: 1000,
};

const ResearchPage = () => {
  const [newsData, setNewsData] = useState<{
    data: NewsType[];
    meta: { limit: number; page: number; total: number };
  }>({
    data: [],
    meta: { limit: 10, page: 1, total: 10 },
  });
  const [researchData, setResearchData] = useState<{
    data: NewsType[];
    meta: { limit: number; page: number; total: number };
  }>({
    data: [],
    meta: { limit: 10, page: 1, total: 10 },
  });
  const [newsLoading, setNewsLoading] = useState(true);
  console.log(newsLoading)
  const [researchLoading, setResearchLoading] = useState(true);

  useEffect(() => {
    setNewsLoading(true);
    NewsService.searchList({
      limit: 5,
      categories: ["c985fb22-4b3c-440b-a2b3-402267b269f2"],
    })
      .then(({ data }) => {
        setNewsData(data);
      })
      .finally(() => {
        setNewsLoading(false);
      });
  }, []);

  useEffect(() => {
    setResearchLoading(true);
    NewsService.searchList({
      limit: 6,
      categories: CATEGORIES.map((item) => item.key),
    })
      .then(({ data }) => {
        setResearchData(data);
      })
      .finally(() => {
        setResearchLoading(false);
      });
  }, []);

  return (
    <div className="wjh-research">
      <BaseHelmet title="Research" />
      <Carousel {...carouselConfig}>
        {newsData.data.map((item) => (
          <NewsCarouselBanner key={item.id} data={item} />
        ))}
      </Carousel>
      <Container style={{ paddingBottom: 40 }}>
        <HomeTitle title="Research" />
        {researchLoading ? (
          <LoadingSection />
        ) : (
          <div className="wjh-research__list-title">
            <Row style={{ rowGap: 16 }}>
              {researchData.data.map((item) => (
                <Col md={4} key={item.id}>
                  <NewsCard data={item} isGridCard thumbnailHeight={250} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ResearchPage;
