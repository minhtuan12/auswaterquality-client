import { forwardRef, useImperativeHandle, useState } from "react";
import { ModalBase } from "../../components";
// import { Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useContextModal } from "../../contexts";

type Props = { onConfirm: VoidFunction };

export type TakePhotoModalAction = {
  open: VoidFunction;
  close: VoidFunction;
};

const ConfirmScreenshotModal = forwardRef<TakePhotoModalAction, Props>(
  ({ onConfirm }, ref) => {
    const [checked, setChecked] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { contactUs } = useContextModal();

    const open = () => {
      setIsModalOpen(true);
    };

    const close = () => {
      setChecked(false);
      setSubmitLoading(false);
      setIsModalOpen(false);
    };

    const handleConfirm = () => {
      setSubmitLoading(true);
      close();
      onConfirm();
    };

    useImperativeHandle(ref, () => ({ open, close }), []);

    return (
      <ModalBase
        open={isModalOpen}
        title={"Take a photo"}
        confirmText="Take a photo"
        onConfirm={handleConfirm}
        onCancel={close}
        okButtonProps={{
          disabled: !checked,
          loading: submitLoading,
        }}
        footer={null}
      >
        <div style={{ fontSize: 16 }}>
          Data unavailable for download with an expected release date likely in
          mid-2026. Future data updates will depend on continued funding and
          collaboration with data providers. For inquiries or expressions of
          interest in collaboration, please{" "}
          <Link
            to={"/"}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              contactUs.open();
            }}
          >
            contact us
          </Link>
          {/* <div style={{ marginTop: 10 }}>
            <Checkbox
              checked={checked}
              onClick={() => {
                setChecked((pre) => !pre);
              }}
            >
              I have read, understood, and agree to the terms stated above.
            </Checkbox>
          </div> */}
        </div>
      </ModalBase>
    );
  }
);

export default ConfirmScreenshotModal;
