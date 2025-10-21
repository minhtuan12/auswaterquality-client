import { Progress } from "antd";
import { Col } from "react-bootstrap";
import "./styles.css";

type Props = {
  value: number;
  color: string;
  title: string;
};

const MapCircleProgress = ({ value, color, title }: Props) => {
  return (
    <Col md={6} className="wjh-progress__map-circle">
      <Progress type="circle" percent={value} size={80} strokeColor={color} />
      <span>{title}</span>
    </Col>
  );
};

export default MapCircleProgress;
