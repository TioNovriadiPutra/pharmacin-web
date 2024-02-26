import ModalContainer from "containers/ModalContainer";
import { animated } from "@react-spring/web";
import useDetailModal from "hooks/useDetailModal";
import BackButton from "components/elements/BackButton";
import Detail from "components/fragments/Detail";

const DetailModal = () => {
  const { showDetailModal, detailData, detailAnim, onClose } = useDetailModal();

  if (showDetailModal) {
    return (
      <ModalContainer styles="flex-row">
        <div className="flex-1" onClick={onClose} />

        <animated.div style={{ width: detailAnim }} className="bg-white h-full rounded-tl-md rounded-bl-md px-3.5 overflow-hidden pt-9 pb-6 relative">
          <BackButton styles="top-8.5 left-8" onClick={onClose} />

          <Detail detailData={detailData} />
        </animated.div>
      </ModalContainer>
    );
  }

  return null;
};

export default DetailModal;
