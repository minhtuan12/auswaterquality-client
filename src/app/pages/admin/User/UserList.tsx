import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button, Input, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { PageHeader } from "../../../components";
import { UserType } from "../../../types";
import { routeAdminDefine } from "../../../configs";
import { UserServices } from "../../../services";
import { useQueries, useQueryParameters } from "../../../hooks";
import "./styles.css";

const INITIAL_PARAMS = {
  q: "",
  page: 0,
  limit: 10,
};

const UserListPage = () => {
  const navigate = useNavigate();
  const { query, addQuery } = useQueryParameters(INITIAL_PARAMS);
  const { data: usersList, loading: usersListLoading } = useQueries<
    UserType,
    { q?: string }
  >({
    fnc: UserServices.getLists,
    params: query,
  });

  const columns = [
    {
      dataIndex: "id",
      title: "No.",
      render: (_: string, __: UserType, index: number) => index + 1,
    },
    {
      dataIndex: "username",
      title: "Username",
    },
    {
      dataIndex: ["role", "name"],
      title: "Role",
    },
    {
      dataIndex: "createdAt",
      title: "Created At",
      render: (value: string) => moment(value).format("LLL"),
    },
    // {
    //   dataIndex: "actions",
    //   title: "Actions",
    //   render: (_: string) => {
    //     return (
    //       <Space>
    //         <TooltipButton
    //           tooltip={{ title: "Edit" }}
    //           icon={<EditOutlined />}
    //         />
    //         <ConfirmButton
    //           danger
    //           title="Confirm delete"
    //           tooltip={{ title: "Delete" }}
    //           icon={<DeleteOutlined />}
    //         />
    //       </Space>
    //     );
    //   },
    // },
  ];

  return (
    <div className="wjh-admin__page">
      <PageHeader title="Users Management" />
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
          onClick={() => navigate(routeAdminDefine.userCreate)}
        >
          Create User
        </Button>
      </div>
      <Table
        dataSource={usersList}
        loading={usersListLoading}
        columns={columns}
      />
    </div>
  );
};

export default UserListPage;
