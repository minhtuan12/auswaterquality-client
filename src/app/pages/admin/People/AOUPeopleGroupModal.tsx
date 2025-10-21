import { useForm } from "antd/es/form/Form";
import { ModalBase } from "../../../components";
import { Checkbox, Form, Input, InputNumber, notification, Select } from "antd";
import { AdminPeopleGroupService } from "../../../services";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { PeopleGroupType, PeopleType } from "../../../types";

type PeopleFormFields = {
  name: string;
  itemPerPage: number;
  status: number;
  peoples: string[];
};

type Props = {
  peoples: PeopleType[];
  refetchData: VoidFunction;
};

type ModalInfo = {
  type?: string;
  detail: PeopleGroupType;
};

const AOUPeopleGroupModal = forwardRef<object, Props>(
  ({ peoples, refetchData }, ref) => {
    const [form] = useForm();
    const [visible, setVisible] = useState(false);
    const [modalInfo, setModalInfo] = useState<Partial<ModalInfo>>({});
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);

    const getPeoples = useMemo(() => {
      return peoples.map((item) => ({
        key: item._id,
        label: item.name,
        value: item._id,
      }));
    }, [peoples]);

    const openModal = useCallback(
      (info: ModalInfo) => {
        setVisible(true);
        setModalInfo(info);
        const peopleDetail = info.detail;
        if (peopleDetail) {
          form.setFieldValue("name", peopleDetail.name);
          form.setFieldValue("itemPerPage", peopleDetail.meta?.itemPerPage);
          form.setFieldValue("peoples", peopleDetail.peoples);
          form.setFieldValue("status", peopleDetail.status === 1);
        }
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
      const data: PeopleFormFields & { meta?: { [key: string]: unknown } } = {
        ...values,
        status: values.status ? 1 : 0,
      };
      if (values.itemPerPage) {
        data["meta"] = { itemPerPage: values.itemPerPage };
      }
      if (modalInfo?.type === "EDIT") {
        AdminPeopleGroupService.edit(modalInfo?.detail?._id ?? "", data)
          .then(() => {
            notification.success({
              message: "Edit People Group",
              description: "Edit People Group Successfully",
            });
            refetchData?.();
            closeModal();
          })
          .catch(() => {
            notification.error({
              message: "Edit People Group",
              description: "Edit People Group Failed",
            });
          })
          .finally(() => {
            setFormSubmitLoading(false);
          });
        return;
      }
      AdminPeopleGroupService.create(data)
        .then(() => {
          notification.success({
            message: "Create People Group",
            description: "Create People Group Successfully",
          });
          refetchData?.();
          closeModal();
        })
        .catch(() => {
          notification.error({
            message: "Create People Group",
            description: "Create People Group Failed",
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
        title={
          modalInfo?.type === "EDIT" ? "Update People" : "Create People Group"
        }
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
          <Form.Item name="itemPerPage" label="Item Per Page">
            <InputNumber
              placeholder="Enter Item Per Page"
              defaultValue={5}
              min={1}
              max={6}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item name="peoples" label="Peoples">
            <Select
              mode="multiple"
              placeholder="Enter Item Per Page"
              options={getPeoples}
              style={{ width: "100%" }}
            />
          </Form.Item>
          {modalInfo?.type === "EDIT" && (
            <Form.Item
              layout="horizontal"
              name="status"
              valuePropName="checked"
            >
              <Checkbox>Visibility</Checkbox>
            </Form.Item>
          )}
        </Form>
      </ModalBase>
    );
  }
);

export default AOUPeopleGroupModal;
