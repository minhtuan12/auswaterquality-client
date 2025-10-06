import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button, Image, Input, notification, Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { ConfirmButton, PageHeader, TooltipButton } from "../../../components";
import { routeAdminDefine } from "../../../configs";
import { useQueries, useQueryParameters } from "../../../hooks";
import { AdminNewsService } from "../../../services";
import { NewsStatus } from "../../../enums/Status";
import { getNewsStatus } from "../../../utils/mappingStatus";
import { ColumnsType } from "antd/es/table";
import { NewsType } from "../../../types/news";
import "./styles.css";
import { useMemo } from "react";

const INITIAL_PARAMS = {
  q: "",
  page: 0,
  limit: 10,
};

const EventsList = () => {
  const navigate = useNavigate();
  const { query, addQuery } = useQueryParameters(INITIAL_PARAMS);
  const params = useMemo(
    () => ({ ...query, categories: ["da48bc3c-a1c6-42f7-b691-2af0b363e600"] }),
    [query]
  );
  const {
    data: newsList,
    meta,
    loading: newsListLoading,
    refetch,
  } = useQueries<NewsType, object>({
    fnc: AdminNewsService.searchList,
    params,
  });

  const columns: ColumnsType<NewsType> = [
    {
      dataIndex: "id",
      title: "No.",
      align: "center",
      render: (_: string, __: NewsType, index: number) => index + 1,
    },
    {
      dataIndex: "thumbnailImage",
      title: "Thumbnail",
      render: (src: string) => <Image src={src} height={60} width={100} />,
    },
    {
      dataIndex: "title",
      title: "Title",
    },
    {
      dataIndex: "meta",
      title: "Date",
      render: (meta: { startDate?: string; endDate?: string }) =>
        meta?.startDate &&
        meta?.endDate &&
        `${moment(meta?.startDate).format("DD/MM/YYYY HH:mm A")} - ${moment(
          meta?.endDate
        ).format("DD/MM/YYYY HH:mm A")}`,
    },
    {
      dataIndex: "status",
      title: "Status",
      align: "center",
      render: (status: NewsStatus) => {
        const newsStatus = getNewsStatus[status];
        if (!newsStatus) {
          return "-";
        }
        return <Tag color={newsStatus.color}>{newsStatus.name}</Tag>;
      },
    },
    {
      dataIndex: "createdAt",
      title: "Created At",
      render: (value: string) => moment(value).format("LL"),
    },
    {
      dataIndex: "actions",
      title: "Actions",
      render: (_: string, record: NewsType) => {
        return (
          <Space>
            <TooltipButton
              tooltip={{ title: "Edit" }}
              icon={<EditOutlined />}
              onClick={() => navigate(`./${record._id}/edit`)}
            />
            <ConfirmButton
              danger
              title="Confirm delete"
              tooltip={{ title: "Delete" }}
              icon={<DeleteOutlined />}
              onConfirm={() => onDeleteNews(record._id)}
            />
          </Space>
        );
      },
    },
  ];

  const onDeleteNews = (id: string) => {
    AdminNewsService.delete(id)
      .then(() => {
        notification.success({ message: "Delete News Successfully" });
        refetch();
      })
      .catch(() => {
        notification.error({ message: "Delete News Failure" });
      });
  };

  return (
    <div className="wjh-admin__page">
      <PageHeader title="Events Management" />
      <div className="wjh-admin__news-actions">
        <div>
          <Input.Search
            placeholder="Searching..."
            onSearch={(value) => {
              addQuery({ q: value });
            }}
          />
        </div>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => navigate(routeAdminDefine.eventsCreate)}
        >
          Create Events
        </Button>
      </div>
      <Table
        dataSource={newsList}
        columns={columns}
        loading={newsListLoading}
        pagination={{
          total: meta?.total,
          onChange: (page, pageSize) => {
            addQuery({ page, limit: pageSize });
          },
        }}
      />
    </div>
  );
};

export default EventsList;
