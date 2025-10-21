import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { AdminNewsService } from "../../../services";
import { EventsFormSubmit } from "../../../types";
import { Editor, PageHeader } from "../../../components";
import { routeAdminDefine } from "../../../configs";
import { MAX_COVER_SIZE, MAX_THUMBNAIL_SIZE } from "../../../utils/consts";

const { RangePicker } = DatePicker;

const EventsCreate = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const [submitFormLoading, setSubmitFormLoading] = useState(false);

  const handleSubmit = () => {
    form.submit();
  };

  const onSubmitFinish = (values: EventsFormSubmit) => {
    if (values.coverImage?.[0]) {
      const coverImage = values.coverImage?.[0];
      if (!coverImage.type.startsWith("image/")) {
        notification.warning({
          message: "Create Events Warning",
          description: "Cover image isn't image",
        });
        return;
      }
      if (coverImage.size > MAX_COVER_SIZE) {
        notification.warning({
          message: "Create Events Warning",
          description: "Cover image is bigger than 1MB",
        });
        return;
      }
    }
    if (values.thumbnailImage?.[0]) {
      const thumbnailImage = values.thumbnailImage?.[0];
      if (!thumbnailImage.type.startsWith("image/")) {
        notification.warning({
          message: "Create Events Warning",
          description: "Thumbnail image isn't image",
        });
        return;
      }
      if (thumbnailImage.size > MAX_THUMBNAIL_SIZE) {
        notification.warning({
          message: "Create Events Warning",
          description: "Thumbnail image is bigger than 1MB",
        });
        return;
      }
    }
    setSubmitFormLoading(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", "da48bc3c-a1c6-42f7-b691-2af0b363e600");
    if (values?.date && values?.date.length === 2) {
      const [start, end] = values.date;
      formData.append("startDate", start.toISOString());
      formData.append("endDate", end.toISOString());
    }
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
    if (values.location) {
      formData.append("location", values.location);
    }
    AdminNewsService.create(formData)
      .then(() => {
        notification.success({ message: "Create Successfully" });
        navigate(routeAdminDefine.eventsList);
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
        title="Events Create"
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
              <Input placeholder="Enter events title" />
            </Form.Item>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Date is required" }]}
            >
              <RangePicker showTime />
            </Form.Item>
            <Form.Item name="shortDesc" label="Short Description">
              <Input placeholder="Enter short description" />
            </Form.Item>
            <Form.Item name="location" label="Location">
              <Input placeholder="Enter location" />
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

export default EventsCreate;
