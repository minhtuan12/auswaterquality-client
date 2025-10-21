import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row } from "react-bootstrap";
import { BaseHelmet, HomeTitle, LoadingSection } from "../../components";
import { PeopleService } from "../../services/people.ts";
import { PeopleGroupType } from "../../types/people.ts";
import { PEOPLE_DATA } from "../../utils/mocks/people.tsx";
import "./styles.css";

const AboutPeoplePage = () => {
  const [peoples, setPeoples] = useState<PeopleGroupType[]>([]);
  const [peoplesLoading, setPeoplesLoading] = useState(true);

  useEffect(() => {
    PeopleService.getData()
      .then(({ data }) => {
        setPeoples(data);
      })
      .catch(() => {
        setPeoples(PEOPLE_DATA);
      })
      .finally(() => {
        setPeoplesLoading(false);
      });
  }, []);

  return (
    <div className="wjh-news" style={{ marginBottom: 40 }}>
      <BaseHelmet title="About People" />
      {peoplesLoading ? <LoadingSection /> : <div></div>}
      {peoples.map((item) => {
        const itemPerPage = item.meta?.itemPerPage ?? 5;
        return (
          item.peoples.length > 0 && (
            <Container key={item._id}>
              <HomeTitle title={item.name} />
              <div
                style={{ display: "flex", flexDirection: "column", gap: 40 }}
              >
                {Array.from({
                  length: Math.ceil(item.peoples.length / itemPerPage),
                }).map((_, index) => {
                  const start = index * itemPerPage;
                  const end = start + itemPerPage;
                  return (
                    <Card
                      key={item._id}
                      border="0"
                      style={{
                        boxShadow: "0px 2px 80px -14px rgba(0,0,0,0.3)",
                        padding: "10px 15px",
                      }}
                    >
                      <Row className="justify-content-center">
                        {item.peoples.slice(start, end).map((p) => (
                          <div
                            key={p._id}
                            style={{
                              padding: "0 5px",
                              width: `calc(100% / ${itemPerPage})`,
                            }}
                          >
                            <div>
                              <div className="wjh-about-people__image-wrapper">
                                <img src={p.avatarUrl} alt={p.name} />
                              </div>
                              <h6 style={{ textAlign: "center" }}>
                                <Link to={p.bioLink} className="wjh-link">
                                  Biography
                                </Link>
                              </h6>
                              <h6
                                style={{
                                  fontSize: 18,
                                  fontWeight: 600,
                                  textAlign: "center",
                                }}
                              >
                                {p.name}
                              </h6>
                              <p
                                style={{
                                  fontSize: 14,
                                  color: "#AAA",
                                  whiteSpace: "pre-line",
                                  textAlign: "center",
                                }}
                              >
                                {p.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </Row>
                    </Card>
                  );
                })}
              </div>
            </Container>
          )
        );
      })}
    </div>
  );
};

export default AboutPeoplePage;
