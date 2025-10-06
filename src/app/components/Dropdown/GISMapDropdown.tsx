import { FormSelect } from "react-bootstrap";

type Props = {
  options: { key: string; value: string; label: string }[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
};

const GISMapDropdown = ({ options, value, onChange, placeholder }: Props) => {
  return (
    <FormSelect
      value={value ?? placeholder}
      size="sm"
      onChange={(e) => onChange(e.target.value)}
      style={{ width: 200 }}
    >
      {options.map((item) => (
        <option value={item.value} key={item.key}>
          {item.label}
        </option>
      ))}
    </FormSelect>
  );
};

export default GISMapDropdown;
