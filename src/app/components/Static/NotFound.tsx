import { Button } from "antd";
import NotFoundSvg from "../../assets/images/NotFoundSvg";
import { HomeFilled } from "@ant-design/icons";

const NotFound = ({ homePageUrl }: { homePageUrl: string }) => {
  return (
    <div
      style={{
        border: "2px solid #116aab",
        height: "100%",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "40px 0",
      }}
    >
      <NotFoundSvg />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
        }}
      >
        <span style={{ fontSize: 28, color: "#116aab", textAlign: "center" }}>
          404
        </span>
        <span style={{ fontSize: 18 }}>
          Sorry, the page you visited does not exist.
        </span>
        <Button icon={<HomeFilled />} type="primary" href={homePageUrl}>
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
