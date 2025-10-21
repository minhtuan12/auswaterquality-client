import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Space,
  Spin,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { AdminNewsService } from "../../../services";
import { NewsFormSubmit } from "../../../types";
import { ConfirmButton, Editor, PageHeader } from "../../../components";
import { routeAdminDefine } from "../../../configs";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { HttpStatusCode } from "axios";
import { NewsStatus } from "../../../enums/Status";
import { MAX_COVER_SIZE, MAX_THUMBNAIL_SIZE } from "../../../utils/consts";

const NewsEdit = () => {
  const { id = "" } = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const [detailStatus, setDetailStatus] = useState(null);
  const [newsDetailLoading, setNewsDetailLoading] = useState(true);
  const [submitFormLoading, setSubmitFormLoading] = useState(false);
  const [deleteSubmitLoading, setDeleteSubmitLoading] = useState(false);
  const [toggleNewsLoading, setToggleNewsLoading] = useState(false);

  const formDisabled =
    newsDetailLoading ||
    submitFormLoading ||
    deleteSubmitLoading ||
    toggleNewsLoading;

  const handleSubmit = () => {
    form.submit();
  };

  const onSubmitFinish = (values: NewsFormSubmit) => {
    if (values.coverImage?.[0]) {
      const coverImage = values.coverImage?.[0];
      if (!coverImage.type.startsWith("image/")) {
        notification.warning({
          message: "Edit News Warning",
          description: "Cover image isn't image",
        });
        return;
      }
      if (coverImage.size > MAX_COVER_SIZE) {
        notification.warning({
          message: "Edit News Warning",
          description: "Cover image is bigger than 1MB",
        });
        return;
      }
    }
    if (values.thumbnailImage?.[0]) {
      const thumbnailImage = values.thumbnailImage?.[0];
      if (!thumbnailImage.type.startsWith("image/")) {
        notification.warning({
          message: "Edit News Warning",
          description: "Thumbnail image isn't image",
        });
        return;
      }
      if (thumbnailImage.size > MAX_THUMBNAIL_SIZE) {
        notification.warning({
          message: "Edit News Warning",
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
      formData.append("content", JSON.stringify(values.content));
    }
    const thumbnailImage = values.thumbnailImage?.[0];
    if (thumbnailImage) {
      if (thumbnailImage?.originFileObj) {
        formData.append("thumbnailImage", thumbnailImage?.originFileObj);
      }
    } else {
      formData.append("deleteThumbnail", "REMOVE");
    }
    const coverImage = values.coverImage?.[0];
    if (coverImage) {
      if (coverImage?.originFileObj) {
        formData.append("coverImage", coverImage?.originFileObj);
      }
    } else {
      formData.append("deleteCover", "REMOVE");
    }
    AdminNewsService.edit(id, formData)
      .then(() => {
        notification.success({ message: "Edit Successfully" });
        // navigate(routeAdminDefine.newsList);
      })
      .catch(() => {
        notification.error({ message: "Edit Failure" });
      })
      .finally(() => {
        setSubmitFormLoading(false);
      });
  };

  const handleDeleteNews = () => {
    setDeleteSubmitLoading(true);
    AdminNewsService.delete(id)
      .then(() => {
        notification.success({ message: "Delete News Successfully" });
        navigate(routeAdminDefine.newsList);
      })
      .catch(() => {
        notification.error({ message: "Delete News Failure" });
      })
      .finally(() => {
        setDeleteSubmitLoading(false);
      });
  };

  const handlePublishNews = () => {
    setToggleNewsLoading(true);
    AdminNewsService.publish(id)
      .then(() => {
        notification.success({ message: "Publish News Successfully" });
        fetchNewsDetail();
      })
      .catch(() => {
        notification.error({ message: "Publish News Failure" });
      })
      .finally(() => {
        setToggleNewsLoading(false);
      });
  };

  const handleUnpublishNews = () => {
    setToggleNewsLoading(true);
    AdminNewsService.unpublish(id)
      .then(() => {
        notification.success({ message: "Unpublish News Successfully" });
        fetchNewsDetail();
      })
      .catch(() => {
        notification.error({ message: "Unpublish News Failure" });
      })
      .finally(() => {
        setToggleNewsLoading(false);
      });
  };

  const fetchNewsDetail = useCallback(() => {
    AdminNewsService.detail(id)
      .then(({ data }) => {
        setDetailStatus(data.status);
        form.setFieldsValue({
          title: data.title,
          shortDesc: data?.shortDesc,
          content: data?.content,
          thumbnailImage: data?.thumbnailImage
            ? [
              {
                uid: "-1",
                name: "thumbnail.jpg",
                status: "done",
                url: data?.thumbnailImage,
                type: "image/",
                size: 500 * 1024,
              },
            ]
            : [],
          coverImage: data?.coverImage
            ? [
              {
                uid: "-1",
                name: "cover.jpg",
                status: "done",
                url: data?.coverImage,
                type: "image/",
                size: 500 * 1024,
              },
            ]
            : [],
        });
      })
      .catch((error) => {
        const status = error.response.status;
        if (status === HttpStatusCode.NotFound) {
          navigate(routeAdminDefine.newsList);
        }
      })
      .finally(() => {
        setNewsDetailLoading(false);
      });
  }, [form, id, navigate]);

  useEffect(() => {
    fetchNewsDetail();
  }, [fetchNewsDetail]);

  return (
    <div className="wjh-admin__page">
      <PageHeader
        title="News Edit"
        extra={
          <Space>
            {detailStatus !== null && (
              <>
                {detailStatus === NewsStatus.DRAFT && (
                  <ConfirmButton
                    title="Publish News"
                    confirmProps={{ placement: "bottomRight" }}
                    style={{ padding: 0 }}
                    onConfirm={handlePublishNews}
                  >
                    <Button
                      color="cyan"
                      variant="solid"
                      disabled={formDisabled}
                      loading={toggleNewsLoading}
                      icon={<EyeOutlined />}
                    >
                      Publish News
                    </Button>
                  </ConfirmButton>
                )}
                {detailStatus === NewsStatus.PUBLIC && (
                  <ConfirmButton
                    title="Unpublish News"
                    confirmProps={{ placement: "bottomRight" }}
                    style={{ padding: 0 }}
                    onConfirm={handleUnpublishNews}
                  >
                    <Button
                      color="cyan"
                      variant="outlined"
                      disabled={formDisabled}
                      loading={toggleNewsLoading}
                      icon={<EyeInvisibleOutlined />}
                    >
                      Unpublish News
                    </Button>
                  </ConfirmButton>
                )}
              </>
            )}
            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={formDisabled}
              loading={submitFormLoading}
              icon={<SaveOutlined />}
            >
              Save
            </Button>
            <ConfirmButton
              title="Delete News"
              confirmProps={{ placement: "bottomRight" }}
              style={{ padding: 0 }}
              onConfirm={handleDeleteNews}
            >
              <Button
                danger
                disabled={formDisabled}
                loading={deleteSubmitLoading}
                icon={<DeleteOutlined />}
              >
                Delete
              </Button>
            </ConfirmButton>
          </Space>
        }
      />
      {newsDetailLoading ? (
        <div className="wjh-news__loading">
          <Spin />
        </div>
      ) : (
        <Form
          disabled={formDisabled}
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
                <Editor hasSection readOnly={formDisabled} />
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
      )}
    </div>
  );
};

export default NewsEdit;
