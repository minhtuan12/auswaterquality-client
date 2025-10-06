import { useForm } from "antd/es/form/Form";
import { ModalBase } from "../../../components";
import { Form, Input, notification } from "antd";
import { RoleServices } from "../../../services";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

type RoleFormFields = {
  name: string;
  permissions: string;
};

type Props = {
  refetchData: VoidFunction;
};

type ModalInfo = {
  type?: string;
  detail: {
    _id?: string;
    name: string;
    permissions: string[];
  };
};

const AOURoleModal = forwardRef<object, Props>(({ refetchData }, ref) => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState<Partial<ModalInfo>>({});
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);

  const openModal = useCallback(
    (info: ModalInfo) => {
      setVisible(true);
      setModalInfo(info);
      const peopleDetail = info.detail;
      if (peopleDetail) {
        form.setFieldValue("name", peopleDetail.name);
        form.setFieldValue("permissions", peopleDetail.permissions);
      }
    },
    [form]
  );

  const closeModal = useCallback(() => {
    setVisible(false);
    setModalInfo({ type: "CREATE" });
    form.resetFields();
  }, [form]);

  const onFinish = (values: RoleFormFields) => {
    setFormSubmitLoading(true);
    if (modalInfo?.type === "EDIT") {
      RoleServices.edit(modalInfo?.detail?._id ?? "", values)
        .then(() => {
          notification.success({
            message: "Edit Role",
            description: "Edit Role Successfully",
          });
          refetchData?.();
          closeModal();
        })
        .catch(() => {
          notification.error({
            message: "Edit Role",
            description: "Edit Role Failed",
          });
        })
        .finally(() => {
          setFormSubmitLoading(false);
        });
      return;
    }
    RoleServices.create(values)
      .then(() => {
        notification.success({
          message: "Create Role",
          description: "Create Role Successfully",
        });
        refetchData?.();
        closeModal();
      })
      .catch(() => {
        notification.error({
          message: "Create Role",
          description: "Create Role Failed",
        });
      })
      .finally(() => {
        setFormSubmitLoading(false);
      });
  };

  useImperativeHandle(ref, () => ({ open: openModal, close: closeModal }), [
    openModal,
    closeModal,
  ]);

  return (
    <ModalBase
      open={visible}
      onClose={closeModal}
      onCancel={closeModal}
      title={modalInfo?.type === "EDIT" ? "Update Role" : "Create Role"}
      onOk={() => {
        form.submit();
      }}
      okButtonProps={{
        disabled: formSubmitLoading,
      }}
    >
      <Form
        form={form}
        disabled={formSubmitLoading}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="permissions" label="Permissions">
          <Input.TextArea
            placeholder="Enter permissions"
            rows={6}
            style={{ resize: "none" }}
          />
        </Form.Item>
      </Form>
    </ModalBase>
  );
});

export default AOURoleModal;
