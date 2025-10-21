import { useRef } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Space, notification, Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { TooltipButton, PageHeader, ConfirmButton } from "../../../components";
import { useQueries } from "../../../hooks";
import { RoleServices } from "../../../services";
import { UserRole } from "../../../types";
import AOURoleModal from "./AOURoleModal";
import { useAuth } from "../../../contexts";
import { PermissionHelper } from "../../../utils/permissionHelper";
import { Permissions } from "../../../enums/Permission";

const RoleListPage = () => {
  const aouRoleModal = useRef<any>(null);
  //   const { query, addQuery } = useQueryParameters(INITIAL_PARAMS);
  //   const params = useMemo(
  //     () => ({ ...query, categories: ["c985fb22-4b3c-440b-a2b3-402267b269f2"] }),
  //     [query]
  //   );
  const { permissions } = useAuth();
  const {
    data: roleList,
    loading: roleListLoading,
    refetch,
  } = useQueries<UserRole, object>({
    fnc: RoleServices.getLists,
    // params,
  });
  const allowAdd = PermissionHelper.hasPermission(
    Permissions.ROLE_CREATE,
    permissions
  );
  const allowEdit = PermissionHelper.hasPermission(
    Permissions.ROLE_EDIT,
    permissions
  );
  const allowDelete = PermissionHelper.hasPermission(
    Permissions.ROLE_DELETE,
    permissions
  );

  const columns: ColumnsType<UserRole> = [
    {
      dataIndex: "id",
      title: "No.",
      align: "center",
      render: (_: string, __: UserRole, index: number) => index + 1,
    },
    {
      dataIndex: "name",
      title: "Name",
    },
  ];

  if (allowEdit || allowDelete) {
    columns.push({
      dataIndex: "actions",
      title: "Actions",
      render: (_: string, record: UserRole) => {
        return (
          <Space>
            {allowEdit && (
              <TooltipButton
                tooltip={{ title: "Edit" }}
                icon={<EditOutlined />}
                onClick={() => onEditRole(record._id)}
              />
            )}
            {allowDelete && (
              <ConfirmButton
                danger
                title="Confirm delete"
                tooltip={{ title: "Delete" }}
                icon={<DeleteOutlined />}
                onConfirm={() => onDeleteNews(record._id)}
              />
            )}
          </Space>
        );
      },
    });
  }

  const onCreateRole = () => {
    aouRoleModal.current?.open({ type: "CREATE" });
  };

  const onEditRole = (id: string) => {
    const roleData = roleList.find((item) => item._id === id);
    aouRoleModal.current?.open({ type: "EDIT", detail: roleData });
  };

  const onDeleteNews = (id: string) => {
    RoleServices.delete(id)
      .then(() => {
        notification.success({ message: "Delete Role Successfully" });
        refetch();
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: "Delete Role Failure",
          description: error.response.data.message,
        });
      });
  };

  return (
    <div className="wjh-admin__page">
      <PageHeader title="Role Management" />
      <AOURoleModal ref={aouRoleModal} refetchData={refetch} />
      <div className="wjh-admin__news-actions">
        <div>
          {/* <Input.Search
            placeholder="Searching..."
            onSearch={(value) => {
              addQuery({ q: value });
            }}
          /> */}
        </div>
        {allowAdd && (
          <Button icon={<PlusOutlined />} type="primary" onClick={onCreateRole}>
            Create New
          </Button>
        )}
      </div>
      <Table
        dataSource={roleList}
        columns={columns}
        loading={roleListLoading}
        pagination={false}
      />
    </div>
  );
};

export default RoleListPage;
