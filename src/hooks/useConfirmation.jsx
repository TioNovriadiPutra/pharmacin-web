import { useRecoilState } from "recoil";
import { deleteDataState, showConfirmationModalState } from "store/atom/pageState";

const useConfirmation = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(showConfirmationModalState);
  const [deleteData, setDeleteData] = useRecoilState(deleteDataState);

  const onClose = () => {
    setShowConfirmationModal(false);
    setDeleteData(null);
  };

  const onApprove = () => {
    deleteData.onApprove();
  };

  return {
    showConfirmationModal,
    onClose,
    onApprove,
  };
};

export default useConfirmation;
