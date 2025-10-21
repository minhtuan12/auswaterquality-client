import { Breadcrumb, Typography } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

type Props = {
  title?: string;
  breadcrumbs?: ItemType[];
  extra?: React.ReactNode;
};

const PageHeader = ({ title, breadcrumbs, extra }: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <Breadcrumb
          items={
            breadcrumbs ?? [
              { title: <Link to={"/admin"}>Dashboard</Link> },
              { title },
            ]
          }
        />
        {title && <Typography.Title level={4}>{title}</Typography.Title>}
      </div>
      {extra && <div>{extra}</div>}
    </div>
  );
};

export default PageHeader;
