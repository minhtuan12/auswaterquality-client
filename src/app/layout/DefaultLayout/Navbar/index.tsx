import { Grid, Menu } from "antd";
import { HEADER_NAVIGATION } from "../../../utils/mocks";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const { useBreakpoint } = Grid;

const DefaultNavBar = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <Menu
        mode="horizontal"
        items={HEADER_NAVIGATION.map((item: any) => ({
          ...item,
          label: <div className={styles.label}>{item.label}</div>,
        }))}
        style={{ width: "100%", justifyContent: "flex-end" }}
        onClick={(e) => navigate(e.key)}
        hidden={screens.xs}
      />
    </div>
  );
};

export default DefaultNavBar;
