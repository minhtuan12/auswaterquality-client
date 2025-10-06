import { Modal } from "antd";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: VoidFunction;
  onContactUsClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const AccessToDataModal = ({ open, onClose, onContactUsClick }: Props) => {
  return (
    <Modal open={open} onCancel={onClose} centered footer={null}>
      <div style={{ fontSize: 16, paddingTop: 20 }}>
        Data unavailable for download with an expected release date likely in
        mid-2026. Future data updates will depend on continued funding and
        collaboration with data providers. For inquiries or expressions of
        interest in collaboration, please{" "}
        <Link to={"/"} onClick={onContactUsClick}>
          contact us
        </Link>
      </div>
    </Modal>
  );
};

export default AccessToDataModal;
