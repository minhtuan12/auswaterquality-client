import { Progress } from "antd";
import { ConvertHelper } from "../../../utils/convertHelper";
import styles from "./styles.module.css";

type Props = {
  title: string;
  value: number;
  progress: number;
  color?: string;
};

const MapProgress = ({ title, value, progress, color }: Props) => {
  return (
    <div className={styles.root}>
      <span className={styles.value}>
        {ConvertHelper.abbreviationNumber(value)}
      </span>
      <Progress
        percent={progress}
        strokeColor={color}
        format={(percent) => (
          <div className={styles.progress_format}>
            <span className={styles.progress_format_title}>{title}</span>
            <span>{percent}%</span>
          </div>
        )}
      />
    </div>
  );
};

export default MapProgress;
