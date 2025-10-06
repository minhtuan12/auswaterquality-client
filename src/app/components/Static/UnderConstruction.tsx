import { UnderConstructionImg } from "../../assets/images";

const UnderConstruction = ({ imgWidth = 150, fontSize = 28 }) => {
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
      }}
    >
      <img src={UnderConstructionImg} alt="" width={imgWidth} />
      <span style={{ fontSize: fontSize + "px", color: "#116aab" }}>
        Under Construction
      </span>
    </div>
  );
};

export default UnderConstruction;
