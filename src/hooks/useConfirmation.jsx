import { useRecoilState } from "recoil";
import { editDataState, showConfirmationModalState } from "store/atom/pageState";

const useConfirmation = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useRecoilState(showConfirmationModalState);
  const [editData, setEditData] = useRecoilState(editDataState);

  const onClose = () => {
    setShowConfirmationModal(false);
    setEditData(null);
  };

  const onApprove = () => {
    editData.onApprove();
  };

  return {
    showConfirmationModal,
    onClose,
    onApprove,
  };
};

export default useConfirmation;
