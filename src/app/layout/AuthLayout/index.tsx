import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Alert } from "antd";
import { Main_Logo } from "../../assets/images";
import { ACCESS_TOKEN, APP_TITLE, EXPIRED_AT } from "../../utils/consts";
import { AuthServices } from "../../services";
import { useForm } from "antd/es/form/Form";
import { LocalStorageHelper } from "../../utils/localStorageHelper";
import { routeAdminDefine } from "../../configs";
import "./styles.css";

const { Title } = Typography;

type LoginFormField = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState();

  const onFinish = (values: LoginFormField) => {
    setSubmitLoading(true);
    AuthServices.signIn(values)
      .then(({ data }) => {
        LocalStorageHelper.set(ACCESS_TOKEN, data.data.accessToken);
        LocalStorageHelper.set(EXPIRED_AT, data.data.expiredAt);
        navigate(routeAdminDefine.dashboard);
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  const handlePressEnter = () => {
    form.submit();
  };

  return (
    <div className="login-container">
      <Link to="/">
        <img
          src={Main_Logo}
          title={APP_TITLE}
          data-displaymode="Original"
          alt={APP_TITLE}
          className="wjh-auth__logo"
        />
      </Link>

      <Card className="login-card">
        <Title level={3} style={{ marginBottom: 24 }}>
          Sign in
        </Title>
        {error && (
          <Alert
            type="error"
            showIcon
            description={error}
            style={{ marginBottom: 16 }}
          />
        )}
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input
              placeholder="Username"
              disabled={submitLoading}
              onPressEnter={handlePressEnter}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Password"
              disabled={submitLoading}
              onPressEnter={handlePressEnter}
            />
          </Form.Item>

          {/* <div className="forgot-link">
            <Link to="#">Forgot password?</Link>
          </div> */}

          <Form.Item>
            <Button
              type="primary"
              block
              onClick={() => {
                form.submit();
              }}
              loading={submitLoading}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        {/* <div className="signup-link">
          <Text type="secondary">Not a member?</Text>{" "}
          <Link to="#">Sign up</Link>
        </div> */}
      </Card>
    </div>
  );
};

export default LoginPage;
