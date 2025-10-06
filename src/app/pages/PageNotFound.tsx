import { Container } from "react-bootstrap";
import { NotFound } from "../components";
import { routeDefine } from "../configs";

const PageNotFound = () => {
  return (
    <div style={{ padding: "40px 0", height: "100%" }}>
      <Container>
        <NotFound homePageUrl={routeDefine.home} />
      </Container>
    </div>
  );
};

export default PageNotFound;
