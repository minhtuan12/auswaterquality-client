import { ButtonProps, Popconfirm, PopconfirmProps, TooltipProps } from "antd";
import TooltipButton from "./TooltipButton";
import { PropsWithChildren } from "react";

type Props = {
  tooltip?: TooltipProps;
  title: string;
  description?: string;
  confirmProps?: Omit<PopconfirmProps, "title">;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
} & PropsWithChildren &
  ButtonProps;

const ConfirmButton = ({
  tooltip,
  title,
  description,
  onConfirm,
  onCancel,
  children,
  confirmProps,
  ...props
}: Props) => {
  return (
    <Popconfirm
      title={title}
      description={description ?? "Are you sure to do this actions?"}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText="Confirm"
      cancelText="Cancel"
      {...confirmProps}
    >
      <TooltipButton tooltip={{ ...tooltip, placement: "bottom" }} {...props}>
        {children}
      </TooltipButton>
    </Popconfirm>
  );
};

export default ConfirmButton;
