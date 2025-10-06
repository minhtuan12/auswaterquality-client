import { Modal } from "antd";
import { useConfiguration } from "../../contexts";
import { ConfigurationText } from "../Input";

const ADWRGuidelineModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: VoidFunction;
}) => {
  const { configurations } = useConfiguration();
  const { methodology } = configurations.data;
  return (
    <Modal open={open} centered footer={null} width={900} onCancel={onClose}>
      <div style={{ overflow: "auto", maxHeight: 600, marginTop: 20 }}>
        <ConfigurationText
          style={{ fontSize: 16, whiteSpace: "pre-line" }}
          data={methodology}
        />
      </div>
    </Modal>
  );
};

export default ADWRGuidelineModal;
