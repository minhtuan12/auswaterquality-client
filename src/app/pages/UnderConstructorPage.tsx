import { UnderConstruction } from "../components";
import { Container } from "react-bootstrap";

const UnderConstructorPage = () => {
  return (
    <div style={{ height: "800px" }}>
      <Container style={{ padding: "40px 0", height: "100%" }}>
        <UnderConstruction imgWidth={200} fontSize={32} />
      </Container>
    </div>
  );
};

export default UnderConstructorPage;
