import { useMemo, useState } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Main_Logo } from "../../assets/images";
import { ACCESS_TOKEN, APP_TITLE, EXPIRED_AT } from "../../utils/consts";
import { LocalStorageHelper } from "../../utils/localStorageHelper";
import { routeDefine } from "../../configs";
import { useAuth } from "../../contexts/AuthProvider";
import { Permissions } from "../../enums/Permission";
import { PermissionHelper } from "../../utils/permissionHelper";
import "./styles.css";

const { Header, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
};

const ADMIN_NAVIGATION = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    permission: "",
  },
  {
    key: "news",
    label: "News Management",
    icon: <SnippetsOutlined />,
    permission: Permissions.NEWS_LIST,
  },
  {
    key: "events",
    label: "Events Management",
    icon: <SnippetsOutlined />,
    permission: Permissions.NEWS_LIST,
  },
  {
    key: "research",
    label: "Research Management",
    icon: <SnippetsOutlined />,
    permission: Permissions.NEWS_LIST,
  },
  {
    key: "people",
    label: "People Management",
    icon: <UserOutlined />,
    permission: Permissions.PEOPLE_LIST,
  },
  {
    key: "users",
    label: "User Management",
    icon: <UserOutlined />,
    permission: Permissions.USER_LIST,
  },
  {
    key: "role",
    label: "Role Management",
    icon: <UserOutlined />,
    permission: Permissions.ROLE_LIST,
  },
  {
    key: "configuration",
    label: "Configurations",
    icon: <SettingOutlined />,
    permission: Permissions.CONFIGURATION_VIEW,
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { permissions } = useAuth();

  const getNavigation = useMemo(() => {
    return ADMIN_NAVIGATION.filter((item) => {
      return (
        item.permission === "" ||
        PermissionHelper.hasPermission(
          item.permission as Permissions,
          permissions
        )
      );
    });
  }, [permissions]);

  const BASE_URL = location.pathname.split("/")[2];
  const selectedKey = BASE_URL === "dashboard" ? "" : `${BASE_URL}`;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240}
        style={siderStyle}
      >
        <div className="wjh-admin__header-logo">
          <Link to="/">
            {collapsed ? (
              <img
                src="/favicon/cropped-WJH-favicon-180x180.png"
                title={APP_TITLE}
                data-displaymode="Original"
                alt={APP_TITLE}
                className="wjh-admin__header-logo-img"
              />
            ) : (
              <img
                src={Main_Logo}
                title={APP_TITLE}
                data-displaymode="Original"
                alt={APP_TITLE}
                className="wjh-admin__header-logo-img"
              />
            )}
          </Link>
        </div>
        <Menu
          className="wjh-admin__sidebar"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={getNavigation}
          selectedKeys={[selectedKey]}
          onClick={(info) => {
            navigate(`/admin/${info.key}`);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: "#116aab",
            position: "fixed",
            left: collapsed ? 80 : 240,
            right: 0,
            zIndex: 999,
            transition: "left 0.2s ease-linear",
          }}
        >
          <div className="wjh-admin__header">
            <Button
              type="text"
              shape="circle"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",

                color: "white",
              }}
            />
            <div>
              <Dropdown
                trigger={["click"]}
                menu={{
                  items: [
                    {
                      key: "1",
                      label: (
                        <Link
                          to="#"
                          className="primary-link"
                          onClick={() => {
                            LocalStorageHelper.remove(ACCESS_TOKEN);
                            LocalStorageHelper.remove(EXPIRED_AT);
                            navigate(routeDefine.login);
                          }}
                        >
                          Logout
                        </Link>
                      ),
                    },
                  ],
                }}
              >
                <Button>Hi, Administrator</Button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "88px 16px 24px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
