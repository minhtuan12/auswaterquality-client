import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, DefaultLayout } from "../layout";
import { routeAdminDefine, routeDefine } from "../configs";
import LoginPage from "../layout/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import { defaultRoutes } from "./defaultRoutes";
import { adminRoutes } from "./adminRoutes";
import { ConfigurationProvider } from "../contexts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ConfigurationProvider>
        <DefaultLayout />
      </ConfigurationProvider>
    ),
    children: defaultRoutes,
  },
  {
    path: routeAdminDefine.dashboard,
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
  {
    path: routeDefine.login,
    element: <LoginPage />,
  },
]);
