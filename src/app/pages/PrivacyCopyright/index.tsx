import { Container } from "react-bootstrap";
import { BaseHelmet, HomeTitle, LoadingSection } from "../../components";
import { useConfiguration } from "../../contexts";
import "./styles.css";

const PrivacyCopyright = () => {
  const { configurations } = useConfiguration();

  return (
    <div className="wjh-news-detail">
      <BaseHelmet title="Privacy Copyright Disclaimer" />
      <Container style={{ paddingBottom: 40 }}>
        <HomeTitle title={"Privacy"} />
        {configurations.loading ? (
          <LoadingSection />
        ) : (
          <div
            className="wjh-privacy html-iframe"
            dangerouslySetInnerHTML={{
              __html: configurations.data?.privacyContent?.value,
            }}
          ></div>
        )}
      </Container>
    </div>
  );
};

export default PrivacyCopyright;
