import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MainService } from "../services";
import { Spin } from "antd";

type ConfigurationContextType = {
  configurations: { data: any; loading: boolean };
};

const ConfigurationContext = createContext<ConfigurationContextType>({
  configurations: { data: {}, loading: true },
});

type Props = PropsWithChildren;

export const ConfigurationProvider = ({ children }: Props) => {
  const [configurations, setConfigurations] = useState({});
  const [configurationsLoading, setConfigurationsLoading] = useState(true);

  useEffect(() => {
    MainService.configurationDetail()
      .then(({ data }) => {
        setConfigurations(data.configurations);
      })
      .finally(() => {
        setConfigurationsLoading(false);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      configurations: { data: configurations, loading: configurationsLoading },
    }),
    [configurations, configurationsLoading]
  );

  return (
    <ConfigurationContext.Provider value={contextValue}>
      {configurationsLoading ? (
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
    </ConfigurationContext.Provider>
  );
};

export const useConfiguration = () => {
  const context = useContext(ConfigurationContext);
  return context;
};
