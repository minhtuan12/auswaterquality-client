// import { Select } from "antd";
import { BASE_MAP_OPTIONS } from "../../utils/mocks/options";
import styles from "./BaseMapDropdown.module.css";
import { FormSelect } from "react-bootstrap";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const BaseMapDropdown = ({ value, onChange }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Base Map:</div>
      {/* <Select
        options={BASE_MAP_OPTIONS}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
        }}
      /> */}
      <FormSelect
        value={value}
        size="sm"
        onChange={(e) => onChange(e.target.value)}
      >
        {BASE_MAP_OPTIONS.map((item) => (
          <option value={item.value} key={item.key}>
            {item.label}
          </option>
        ))}
      </FormSelect>
    </div>
  );
};

export default BaseMapDropdown;
