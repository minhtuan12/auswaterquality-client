import { useMemo, useRef } from "react";
import moment from "moment";
import { Button, Input, Space, Table, Tabs, Tag } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { PageHeader, TooltipButton } from "../../../components";
import { useQueries, useQueryParameters } from "../../../hooks";
import { AdminPeopleGroupService, AdminPeopleService } from "../../../services";
import { ColumnsType } from "antd/es/table";
import PeopleList from "./PeopleList";
import AOUPeopleGroupModal from "./AOUPeopleGroupModal";
import { PeopleGroupType, PeopleType } from "../../../types";

const INITIAL_PARAMS = {
  q: "",
  page: 0,
  limit: 10,
};

const PeoplePage = () => {
  const peopleQuery = useMemo(() => ({ limit: 100 }), []);
  const aouPeopleModal = useRef<any>(null);
  const { query, addQuery } = useQueryParameters(INITIAL_PARAMS);
  const peopleGroup = useQueries<PeopleGroupType, object>({
    fnc: AdminPeopleGroupService.searchList,
    params: query,
  });
  const peopleResponse = useQueries<PeopleType, object>({
    fnc: AdminPeopleService.searchList,
    params: peopleQuery,
  });

  const onCreatePeople = () => {
    aouPeopleModal.current?.open({ type: "CREATE" });
  };

  const onEditPeople = (id: string) => {
    const peopleData = peopleGroup.data.find((item) => item._id === id);
    aouPeopleModal.current?.open({ type: "EDIT", detail: peopleData });
  };

  const columns: ColumnsType<PeopleGroupType> = [
    {
      dataIndex: "id",
      title: "No.",
      align: "center",
      render: (_: string, __: PeopleGroupType, index: number) => index + 1,
    },
    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "status",
      title: "Status",
      render: (status: number) => (
        <div>
          <Tag color={status === 1 ? "green" : "default"}>
            {status === 1 ? "Visible" : "Hidden"}
          </Tag>
        </div>
      ),
    },
    {
      dataIndex: "createdAt",
      title: "Created At",
      render: (value: string) => moment(value).format("LLL"),
    },
    {
      dataIndex: "actions",
      title: "Actions",
      render: (_: string, record: PeopleGroupType) => {
        return (
          <Space>
            <TooltipButton
              tooltip={{ title: "Edit" }}
              icon={<EditOutlined />}
              onClick={() => onEditPeople(record._id)}
            />
            {/* <ConfirmButton
              danger
              title="Confirm delete"
              tooltip={{ title: "Delete" }}
              icon={<DeleteOutlined />}
              onConfirm={() => onDeleteNews(record._id)}
            /> */}
          </Space>
        );
      },
    },
  ];

  return (
    <div className="wjh-admin__page">
      <PageHeader title="Peoples Management" />
      <AOUPeopleGroupModal
        ref={aouPeopleModal}
        peoples={peopleResponse.data}
        refetchData={peopleGroup.refetch}
      />
      <Tabs
        defaultActiveKey="aboutADWR"
        items={[
          {
            key: "people",
            label: "People",
            children: <PeopleList />,
          },
          {
            key: "aboutADWR",
            label: "People Group",
            children: (
              <div>
                <div
                  className="wjh-admin__news-actions"
                  style={{ marginBottom: 20 }}
                >
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
                    onClick={onCreatePeople}
                  >
                    Create Group
                  </Button>
                </div>
                <Table
                  dataSource={peopleGroup.data}
                  columns={columns}
                  loading={peopleGroup.loading}
                  pagination={{
                    total: peopleGroup.meta?.total,
                    onChange: (page, pageSize) => {
                      addQuery({ page, limit: pageSize });
                    },
                  }}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default PeoplePage;
