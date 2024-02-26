import { useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { detailDataState, showDetailModalState } from "store/atom/pageState";

const useDetailModal = () => {
  const [showDetailModal, setShowDetailModal] = useRecoilState(showDetailModalState);
  const [detailData, setDetailData] = useRecoilState(detailDataState);

  const detailAnim = useSpringValue(0);

  const handleOpen = () => {
    detailAnim.start(542);
  };

  const onClose = () => {
    detailAnim.start(0);

    setTimeout(() => {
      setShowDetailModal(false);
      setDetailData(null);
    }, 500);
  };

  useEffect(() => {
    if (showDetailModal) {
      handleOpen();
    }
  }, [showDetailModal]);

  return {
    showDetailModal,
    detailData,
    detailAnim,
    onClose,
  };
};

export default useDetailModal;
