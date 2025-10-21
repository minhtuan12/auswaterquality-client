import { PropsWithChildren } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description?: React.ReactNode;
  titlePath?: string;
  rootClassname?: string;
} & PropsWithChildren;

const HomeWidget = ({
  title,
  titlePath,
  description,
  children,
  rootClassname,
}: Props) => {
  return (
    <Container className={`wjh-widget ${rootClassname ?? ""}`}>
      <Row>
        <Col md={12}>
          <div className="wjh-widget__header">
            <h4 className="wjh-widget__header-title">
              {titlePath ? (
                <Link to={titlePath} className="primary-link">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h4>
            {description && <p>{description}</p>}
          </div>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeWidget;
