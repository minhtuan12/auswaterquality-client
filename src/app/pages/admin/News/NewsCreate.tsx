import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, notification, Row, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { AdminNewsService } from "../../../services";
import { NewsFormSubmit } from "../../../types";
import { Editor, PageHeader } from "../../../components";
import { routeAdminDefine } from "../../../configs";
import { MAX_COVER_SIZE, MAX_THUMBNAIL_SIZE } from "../../../utils/consts";

const NewsCreate = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [submitFormLoading, setSubmitFormLoading] = useState(false);

  const handleSubmit = () => {
    form.submit();
  };

  const onSubmitFinish = (values: NewsFormSubmit) => {
    if (values.coverImage?.[0]) {
      const coverImage = values.coverImage?.[0];
      if (!coverImage.type.startsWith("image/")) {
        notification.warning({
          message: "Create News Warning",
          description: "Cover image isn't image",
        });
        return;
      }
      if (coverImage.size > MAX_COVER_SIZE) {
        notification.warning({
          message: "Create News Warning",
          description: "Cover image is bigger than 1MB",
        });
        return;
      }
    }
    if (values.thumbnailImage?.[0]) {
      const thumbnailImage = values.thumbnailImage?.[0];
      if (!thumbnailImage.type.startsWith("image/")) {
        notification.warning({
          message: "Create News Warning",
          description: "Thumbnail image isn't image",
        });
        return;
      }
      if (thumbnailImage.size > MAX_THUMBNAIL_SIZE) {
        notification.warning({
          message: "Create News Warning",
          description: "Thumbnail image is bigger than 1MB",
        });
        return;
      }
    }
    setSubmitFormLoading(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", "c985fb22-4b3c-440b-a2b3-402267b269f2");
    if (values?.shortDesc) {
      formData.append("shortDesc", values.shortDesc);
    }
    if (values.content) {
      if (Array.isArray(values.content)) {
        formData.append("content", JSON.stringify(values.content)); // ✔ gửi JSON
      } else {
        formData.append("content", values.content); // ✔ gửi HTML string
      }
    }
    if (values.thumbnailImage?.[0]) {
      formData.append("thumbnailImage", values.thumbnailImage[0].originFileObj);
    }
    if (values.coverImage?.[0]) {
      formData.append("coverImage", values.coverImage[0]?.originFileObj);
    }
    AdminNewsService.create(formData)
      .then(() => {
        notification.success({ message: "Create Successfully" });
        navigate(routeAdminDefine.newsList);
      })
      .catch(() => {
        notification.error({ message: "Create Failure" });
      })
      .finally(() => {
        setSubmitFormLoading(false);
      });
  };

  return (
    <div className="wjh-admin__page">
      <PageHeader
        title="News Create"
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
        <Row gutter={64}>
          <Col span={17}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input placeholder="Enter news title" />
            </Form.Item>
            <Form.Item
              name="shortDesc"
              label="Short Description"
              rules={[
                { required: true, message: "Short description is required" },
              ]}
            >
              <Input placeholder="Enter short description" />
            </Form.Item>

            <Form.Item name="content" label="Content">
              <Editor hasSection />
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              name="thumbnailImage"
              label="Thumbnail Image"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
            >
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
              >
                Upload
              </Upload>
            </Form.Item>

            <Form.Item
              name="coverImage"
              label="Cover Image"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
            >
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
              >
                Upload
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NewsCreate;
