import { PropsWithChildren } from "react";
import { Modal, ModalProps } from "antd";

type Props = {
  open?: boolean;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
} & PropsWithChildren &
  ModalProps;

const ModalBase = ({
  confirmText,
  cancelText,
  children,
  onConfirm,
  onCancel,
  ...props
}: Props) => {
  return (
    <Modal
      title={props.title ?? "Modal Title"}
      open={props.open}
      onOk={onConfirm}
      onCancel={onCancel}
      okText={confirmText ?? "Save"}
      cancelText={cancelText ?? "Cancel"}
      centered
      {...props}
    >
      {children}
    </Modal>
  );
};

export default ModalBase;
