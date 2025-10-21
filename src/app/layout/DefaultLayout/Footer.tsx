import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
import { routeDefine } from "../../configs";
import { useConfiguration, useContextModal } from "../../contexts";

const MainFooter = () => {
  const { contactUs } = useContextModal();
  const { configurations } = useConfiguration();
  const { introductionText, privacy } = configurations.data;

  return (
    <footer>
      <div className="wjh-footer-line"></div>
      <div className="wjh-footer">
        <Container>
          <Row>
            <Col md={4} className="wjh-footer__sponsors">
              <p>
                {introductionText?.value ??
                  "We acknowledge, celebrate and pay our respects to the Ngunnawal and Ngambri people of the Canberra region and to all First Nations Australians on whose traditional lands we meet and work, and whose cultures are among the oldest continuing cultures in human history."}
              </p>
            </Col>
            <Col md={4} className="wjh-footer__partners">
              <h5>Partners</h5>
              <div className="d-flex align-items-center justify-content-between">
                <span>Equity Trustee</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span>ARC Laureate</span>
              </div>
            </Col>
            <Col md={4} className="wjh-footer__partners">
              <h5>
                <Link
                  to={"/"}
                  className="primary-link"
                  onClick={(e) => {
                    e.preventDefault();
                    contactUs.open();
                  }}
                >
                  Contact Us
                </Link>
              </h5>
              <p>
                Water Justice Hub
                <br />
                Crawford School of Public Policy
                <br />
                The Australian National University
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="wjh-footer__links">
              <p>
                <Link
                  to={routeDefine.privacyCopyrightDisclaimer}
                  className="primary-link"
                >
                  {privacy?.value ?? "Privacy | Copyright | Disclaimer"}
                </Link>
              </p>
            </Col>
            <Col md={4} className="wjh-footer__partners wjh-footer__copy-right">
              <p>@ADWR 2025</p>
            </Col>
            <Col
              md={4}
              className="wjh-footer__partners wjh-footer__bottom-right"
            >
              <p>
                <Link to={routeDefine.login} className="primary-link">
                  ADMIN LOGIN
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default MainFooter;
