import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { UserServices } from "../../../services";
import { UserFormSubmit } from "../../../types";
import { PageHeader } from "../../../components";
import { routeAdminDefine } from "../../../configs";
import { RegexHelper } from "../../../utils/regexHelper";

const UserCreate = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [submitFormLoading, setSubmitFormLoading] = useState(false);

  const validatePasswordMatch = ({ getFieldValue }: any) => ({
    validator(_: any, value: string) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("Confirm password doesn't match password")
      );
    },
  });

  const validatePasswordStrength = () => ({
    validator(_: any, value: string) {
      if (!value || RegexHelper.password.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          "Password must contain at least 8 characters, one uppercase letter, one number, and one special character!"
        )
      );
    },
  });

  const handleSubmit = () => {
    form.submit();
  };

  const onSubmitFinish = (values: UserFormSubmit) => {
    setSubmitFormLoading(true);
    UserServices.create(values)
      .then(() => {
        notification.success({ message: "Create Successfully" });
        navigate(routeAdminDefine.userList);
      })
      .catch((error) => {
        const err = error.response;
        notification.error({
          message: "Create Failure",
          description: err.data.message ?? "Opp! Something went wrong",
        });
      })
      .finally(() => {
        setSubmitFormLoading(false);
      });
  };

  return (
    <div className="wjh-admin__page">
      <PageHeader
        title="Create User"
        extra={
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={submitFormLoading}
            loading={submitFormLoading}
          >
            Save
          </Button>
        }
      />
      <Form
        disabled={submitFormLoading}
        form={form}
        layout="vertical"
        onFinish={onSubmitFinish}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>
            <Form.Item
              name="role"
              label="Role"
              rules={[{ required: true, message: "Role is required" }]}
            >
              <Select
                options={[
                  {
                    key: "Administrator",
                    label: "Administrator",
                    value: "8827906e-dba4-4ab1-a5ec-df77cfb28f54",
                  },
                  {
                    key: "Staff",
                    label: "Staff",
                    value: "a713a9ae-e5ff-4490-9bf8-8c192e12c2d8",
                  },
                ]}
                placeholder="Select role"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Password is required" },
                validatePasswordStrength,
              ]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm password"
              rules={[
                { required: true, message: "Confirm password is required" },
                validatePasswordMatch,
              ]}
            >
              <Input.Password placeholder="Enter confirm password" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserCreate;
