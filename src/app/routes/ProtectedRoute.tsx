import { Navigate } from "react-router-dom";
import { LocalStorageHelper } from "../utils/localStorageHelper";
import { ACCESS_TOKEN } from "../utils/consts";
import { AuthProvider } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = LocalStorageHelper.get(ACCESS_TOKEN);
  return token ? (
    <AuthProvider>{children}</AuthProvider>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
