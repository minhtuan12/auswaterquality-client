import { PlusOutlined } from "@ant-design/icons";
import { Button, notification, Spin, Tabs } from "antd";
import { PageHeader } from "../../../components";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { MainService } from "../../../services";
import FormConfigs from "./FormConfigs";

const TABS: TabConfigs[] = [
  {
    order: 0,
    name: "Home",
    key: "home",
    configurations: {},
  },
  {
    order: 1,
    name: "General",
    key: "general",
    configurations: {},
  },
  {
    order: 2,
    name: "About ADWR",
    key: "aboutADWR",
    configurations: {},
  },
  {
    order: 3,
    name: "Privacy",
    key: "privacy",
    configurations: {},
  },
  {
    order: 4,
    name: "Water Quality Classification Chart",
    key: "waterQualityClassificationChart",
    configurations: {},
  },
  {
    order: 5,
    name: "About ADWG",
    key: "aboutADWG",
    configurations: {},
  },
  {
    order: 6,
    name: "Interactive Dashboard",
    key: "interactiveDashboard",
    configurations: {},
  },
];

export type TabConfigs = {
  order: number;
  name: string;
  key: string;
  configurations: TextsFormConfigs;
};

export type TextsFormConfigs = {
  [key: string]: {
    value?: string | { [key: string]: string };
    type: "input" | "textarea" | "table" | "group" | "image" | "editor";
    name: string;
    configurations?: { [key: string]: never };
    fields?: TextsFormConfigs;
    tab?: string;
    visible?: boolean;
    key: string
  };
};

const TextsPage = () => {
  const [form] = useForm();
  const [formLoading, setFormLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [tabs, setTabs] = useState(TABS);

  const onFinishForm = (values: TextsFormConfigs) => {
    setSubmitLoading(true);
    MainService.configurationUpdate(values)
      .then(() => {
        notification.success({
          message: "Configuration Update",
          description: "Configuration Update Successfully",
        });
      })
      .catch(() => {
        notification.error({
          message: "Configuration Update",
          description: "Oop, Something wrong",
        });
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  useEffect(() => {
    MainService.configurationDetail()
      .then(({ data }) => {
        const configs = data.configurations as TextsFormConfigs;
        const result: any = {};
        Object.entries(configs).forEach(([itemKey, itemValue]) => {
          if (itemValue.type === "group" && itemValue.fields) {
            Object.entries(itemValue.fields).forEach(
              ([fieldKey, fieldValue]) => {
                result[fieldKey] = fieldValue.value;
              }
            );
          }
          if (itemValue.type !== "group") {
            result[itemKey] = itemValue.value;
          }
        });
        form.setFieldsValue(result);
        const newTabs = TABS.map((item) => {
          const filtered = Object.fromEntries(
            Object.entries(configs).filter(
              ([, config]) => config?.key === item.key
            )
          );
          return { ...item, configurations: filtered };
        });
        setTabs(newTabs);
      })
      .finally(() => {
        setFormLoading(false);
      });
  }, [form]);

  const displayTabs = () => {
    return tabs.map((item) => ({
      key: item.key,
      label: item.name,
      children: (
        <FormConfigs
          form={form}
          configs={item.configurations}
          onFinish={onFinishForm}
        />
      ),
    }));
  };

  return (
    <div className="wjh-admin__page">
      <PageHeader
        title="Texts Management"
        extra={
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => {
              form.submit();
            }}
            loading={submitLoading}
            disabled={formLoading || submitLoading}
          >
            Save
          </Button>
        }
      />
      {formLoading ? (
        <Spin />
      ) : (
        <Tabs defaultActiveKey="aboutADWR" items={displayTabs()} />
      )}
    </div>
  );
};

export default TextsPage;
