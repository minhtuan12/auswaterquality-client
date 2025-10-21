import { useForm } from "antd/es/form/Form";
import { ModalBase } from "../../../components";
import { Form, Input, notification } from "antd";
import { AdminPeopleService } from "../../../services";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

type PeopleFormFields = {
  name: string;
  avatarUrl: string;
  bioLink: string;
};

type Props = {
  refetchData: VoidFunction;
};

type ModalInfo = {
  type?: string;
  detail: {
    _id?: string;
    avatarUrl?: string;
    description?: string;
    name: string;
    bioLink: string;
  };
};

const AOUPeopleModal = forwardRef<object, Props>(({ refetchData }, ref) => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState<Partial<ModalInfo>>({});
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);

  const openModal = useCallback(
    (info: ModalInfo) => {
      setVisible(true);
      setModalInfo(info);
      const peopleDetail = info.detail;
      form.setFieldValue("name", peopleDetail.name);
      form.setFieldValue("description", peopleDetail.description);
      form.setFieldValue("bioLink", peopleDetail.bioLink);
      form.setFieldValue("avatarUrl", peopleDetail.avatarUrl);
    },
    [form]
  );

  const closeModal = useCallback(() => {
    setVisible(false);
    setModalInfo({ type: "CREATE" });
    form.resetFields();
  }, [form]);

  const onFinish = (values: PeopleFormFields) => {
    setFormSubmitLoading(true);
    if (modalInfo?.type === "EDIT") {
      AdminPeopleService.edit(modalInfo?.detail?._id ?? "", values)
        .then(() => {
          notification.success({
            message: "Edit People",
            description: "Edit People Successfully",
          });
          refetchData?.();
          closeModal();
        })
        .catch(() => {
          notification.error({
            message: "Edit People",
            description: "Edit People Failed",
          });
        })
        .finally(() => {
          setFormSubmitLoading(false);
        });
      return;
    }
    AdminPeopleService.create(values)
      .then(() => {
        notification.success({
          message: "Create People",
          description: "Create People Successfully",
        });
        refetchData?.();
        closeModal();
      })
      .catch(() => {
        notification.error({
          message: "Create People",
          description: "Create People Failed",
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
      title={modalInfo?.type === "EDIT" ? "Update People" : "Create People"}
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
        <Form.Item name="avatarUrl" label="Avatar Url">
          <Input placeholder="Enter avatar url" />
        </Form.Item>
        <Form.Item name="bioLink" label="Bio Link">
          <Input placeholder="Enter bio link" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea
            placeholder="Enter description"
            rows={4}
            style={{ resize: "none" }}
          />
        </Form.Item>
      </Form>
    </ModalBase>
  );
});

export default AOUPeopleModal;
