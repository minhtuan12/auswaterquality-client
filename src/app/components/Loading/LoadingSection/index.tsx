import { Spin } from "antd";

const LoadingSection = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <Spin />
    </div>
  );
};

export default LoadingSection;
