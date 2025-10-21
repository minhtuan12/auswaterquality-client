import { Select } from "antd";
import { SelectProps } from "antd/es/select";
import { Form } from "react-bootstrap";

type Props = {
  label?: string;
  controlId?: string;
  value?: string | null;
  onChange?: (value: string, e: React.ChangeEvent) => void;
  placeholder?: string;
} & SelectProps;

const FormDropdown = ({
  label,
  controlId = "form.controlInput1",
  placeholder,
  value,
  loading = false,
  ...props
}: Props) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      {label && <Form.Label style={{ fontWeight: 600 }}>{label}</Form.Label>}
      <Select
        {...props}
        value={value}
        size="large"
        placeholder={placeholder}
        style={{ width: "100%" }}
        loading={loading}
      />
    </Form.Group>
  );
};

export default FormDropdown;
