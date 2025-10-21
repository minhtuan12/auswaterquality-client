import { PropsWithChildren } from "react";
import { Button, ButtonProps, Tooltip, TooltipProps } from "antd";

type Props = {
  tooltip?: TooltipProps;
} & PropsWithChildren &
  ButtonProps;

const TooltipButton = ({ tooltip, children, ...props }: Props) => {
  if (tooltip) {
    return (
      <Tooltip {...tooltip}>
        <Button {...props}>{children}</Button>
      </Tooltip>
    );
  }

  return <Button {...props}>{children}</Button>;
};

export default TooltipButton;
