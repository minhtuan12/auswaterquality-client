import { useRef } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Button, Table, Space, Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { TooltipButton } from "../../../components";
import { useQueryParameters, useQueries } from "../../../hooks";
import { AdminPeopleService } from "../../../services";
import moment from "moment";
import AOUPeopleModal from "./AOUPeopleModal";
import { PeopleType } from "../../../types";

const INITIAL_PARAMS = {
  q: "",
  page: 0,
  limit: 10,
};

const PeopleList = () => {
  const aouPeopleModal = useRef<any>(null);
  const { query, addQuery } = useQueryParameters(INITIAL_PARAMS);
  const {
    data: peopleLists,
    meta,
    loading: peopleListsLoading,
    refetch,
  } = useQueries<PeopleType, object>({
    fnc: AdminPeopleService.searchList,
    params: query,
  });

  const onCreatePeople = () => {
    aouPeopleModal.current?.open({ type: "CREATE" });
  };

  const onEditPeople = (id: string) => {
    const peopleData = peopleLists.find((item) => item._id === id);
    aouPeopleModal.current?.open({ type: "EDIT", detail: peopleData });
  };

  const columns: ColumnsType<PeopleType> = [
    {
      dataIndex: "id",
      title: "No.",
      align: "center",
      render: (_: string, __: PeopleType, index: number) => index + 1,
    },
    {
      dataIndex: "avatarUrl",
      title: "Avatar",
      render: (src: string) => <Image src={src} height={100} width={100} />,
    },
    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "createdAt",
      title: "Created At",
      render: (value: string) => moment(value).format("LLL"),
    },
    {
      dataIndex: "actions",
      title: "Actions",
      render: (_: string, record: PeopleType) => {
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
    <div>
      <AOUPeopleModal ref={aouPeopleModal} refetchData={refetch} />
      <div className="wjh-admin__news-actions" style={{ marginBottom: 20 }}>
        <div>
          <Input.Search
            placeholder="Searching..."
            onSearch={(value) => {
              addQuery({ q: value });
            }}
          />
        </div>
        <Button icon={<PlusOutlined />} type="primary" onClick={onCreatePeople}>
          Create People
        </Button>
      </div>
      <Table
        dataSource={peopleLists}
        columns={columns}
        loading={peopleListsLoading}
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

export default PeopleList;
