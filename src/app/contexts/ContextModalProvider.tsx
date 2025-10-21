import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ADWRGuidelineModal, ContactUsFormModal } from "../components/Modal";

type ContextModalContextType = {
  contactUs: { open: VoidFunction; close: VoidFunction };
  methodology: { open: VoidFunction; close: VoidFunction };
};

const ContextModalContext = createContext<ContextModalContextType>({
  contactUs: { open: () => {}, close: () => {} },
  methodology: { open: () => {}, close: () => {} },
});

type Props = PropsWithChildren;

export const ContextModalProvider = ({ children }: Props) => {
  const [visibleContactUsModal, setVisibleContactUsModal] = useState(false);
  const [visibleMethodology, setVisibleMethodology] = useState(false);

  const openContactUsModal = useCallback(() => {
    setVisibleContactUsModal(true);
  }, []);

  const closeContactUsModal = useCallback(() => {
    setVisibleContactUsModal(false);
  }, []);

  const openMethodologyModal = useCallback(() => {
    setVisibleMethodology(true);
  }, []);

  const closeMethodologyModal = useCallback(() => {
    setVisibleMethodology(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      contactUs: { open: openContactUsModal, close: closeContactUsModal },
      methodology: { open: openMethodologyModal, close: closeMethodologyModal },
    }),
    [
      openContactUsModal,
      closeContactUsModal,
      openMethodologyModal,
      closeMethodologyModal,
    ]
  );

  return (
    <ContextModalContext.Provider value={contextValue}>
      <ContactUsFormModal
        open={visibleContactUsModal}
        onClose={closeContactUsModal}
      />
      <ADWRGuidelineModal
        open={visibleMethodology}
        onClose={closeMethodologyModal}
      />
      {children}
    </ContextModalContext.Provider>
  );
};

export const useContextModal = () => {
  const context = useContext(ContextModalContext);
  return context;
};
