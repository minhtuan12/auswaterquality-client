import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Select, Space } from "antd";
import { SelectProps } from "antd/es/select";
import { Form } from "react-bootstrap";

type Props = {
  label?: string;
  controlId?: string;
  value?: string;
  dropdownProps: MenuProps;
  onChange?: (value: string, e: React.ChangeEvent) => void;
} & SelectProps;

const FormPopOverDropdown = ({
  label,
  controlId = "form.controlInput1",
  dropdownProps,
  ...props
}: Props) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      {label && <Form.Label style={{ fontWeight: 600 }}>{label}</Form.Label>}
      <Space.Compact style={{ width: "100%" }}>
        <Dropdown
          menu={dropdownProps}
          trigger={["click"]}
          placement="bottomLeft"
          arrow={false}
        >
          <Button icon={<CaretDownOutlined />} size="large" />
        </Dropdown>
        <Select {...props} size="large" style={{ width: "100%" }} />
      </Space.Compact>
    </Form.Group>
  );
};

export default FormPopOverDropdown;
