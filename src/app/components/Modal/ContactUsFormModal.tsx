import { useState } from "react";
import { Form, Input, notification } from "antd";
import ModalBase from "./ModalBase";
import { useForm } from "antd/es/form/Form";
import { MainService } from "../../services";
import { RegexHelper } from "../../utils/regexHelper";
import "./styles.css";

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

type FormItemType = {
  name: string;
  email: string;
  message?: string;
};

const ContactUsFormModal = ({ open, onClose }: Props) => {
  const [form] = useForm();
  const [formLoading, setFormLoading] = useState(false);

  const onFinish = (values: FormItemType) => {
    if (!values.name || !values.email) {
      return;
    }
    setFormLoading(true);
    MainService.contactUs(values)
      .then(() => {
        notification.success({
          message: "Contact Us",
          description: "Your request has been sent!",
        });
      })
      .catch(() => {
        notification.error({
          message: "Contact Us",
          description: "Oop!!! Something wrong",
        });
      })
      .finally(() => {
        setFormLoading(false);
      });
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  return (
    <ModalBase
      title="Contact Us"
      open={open}
      centered
      onClose={handleClose}
      onCancel={handleClose}
      onConfirm={() => {
        form.submit();
      }}
      width={700}
      okText="Send"
      okButtonProps={{ loading: formLoading, disabled: formLoading }}
    >
      <Form
        form={form}
        disabled={formLoading}
        onFinish={onFinish}
        layout="vertical"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Name is required",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                pattern: RegexHelper.email,
                message: "Email format is not correct eg: abc@gmail.com",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </div>
        <Form.Item name="message" label="Message">
          <Input.TextArea
            rows={6}
            placeholder="Message"
            style={{ resize: "none" }}
          />
        </Form.Item>
      </Form>
    </ModalBase>
  );
};

export default ContactUsFormModal;
