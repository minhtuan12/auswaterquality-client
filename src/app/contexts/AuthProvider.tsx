import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserServices } from "../services";
import { Spin } from "antd";
import { Permissions } from "../enums/Permission";

type AuthContextType = {
  data: any;
  permissions: Permissions[];
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  data: {},
  permissions: [],
  loading: true,
});

type UserType = {
  role: {
    permissions: Permissions[];
  };
};

type Props = PropsWithChildren;

export const AuthProvider = ({ children }: Props) => {
  const [myProfile, setMyProfile] = useState<Partial<UserType>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserServices.getMyProfile()
      .then(({ data }) => {
        setMyProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      data: myProfile,
      permissions: myProfile?.role?.permissions ?? [],
      loading,
    }),
    [loading, myProfile]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? (
        <div
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            inset: 0,
            zIndex: "9999",
          }}
        >
          <Spin />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
