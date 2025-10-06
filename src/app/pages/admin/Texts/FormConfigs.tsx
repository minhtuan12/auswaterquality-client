import {Card, Form, Input, Table, Upload} from "antd";
import {TextsFormConfigs} from ".";
import {Editor} from "../../../components";
import React from "react";

type Props = {
  form: any;
  configs: TextsFormConfigs;
  onFinish: (values: any) => void;
};

const FormConfigs = ({form, configs, onFinish}: Props) => {
  const displayFormItem = ({key, val}: any) => {
    return (
      <Form.Item key={key} name={key} label={val.name}>
        {val.type === "textarea" && (
          <Input.TextArea
            style={{resize: "none"}}
            rows={val.configurations?.rows ?? 3}
          />
        )}
        {val.type === "input" && <Input/>}
        {val.type === "image" && (
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            maxCount={1}
            accept="image/*"
          >
            Upload
          </Upload>
        )}
        {val.type === "table" && (
          <Table
            columns={[
              {
                dataIndex: "title",
                title: "Title",
              },
              {
                dataIndex: "value",
                title: "Value",
                render: (_, record, index: number) => <Form.Item name={[key, record.title]} key={record.title}>
                  <Editor uniqueId={index.toString()}/>
                </Form.Item>
              },
            ]}
            dataSource={Object.entries(val.value).map(([a, b]) => ({
              title: a,
              value: b,
            }))}
          />
        )}
        {val.type === "editor" && <Editor uniqueId={key}/>}
      </Form.Item>
    );
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{display: "flex", flexDirection: "column", gap: 16}}
    >
      {Object.entries(configs).map(([key, val]) => (
        <React.Fragment key={key}>
          {val.type === "group" && val.fields && (
            <Card title={val.name}>
              {Object.entries(val.fields).map(([chilKey, chilVal]) =>
                displayFormItem({key: chilKey, val: chilVal})
              )}
            </Card>
          )}
          {val.type !== "group" && displayFormItem({key, val})}
        </React.Fragment>
      ))}
    </Form>
  );
};

export default FormConfigs;
