import { useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { editDataState } from "store/atom/pageState";

const useFormModal = () => {
  const [showFormModal, setShowFormModal] = useRecoilState(showFormModalState);
  const [formModalData, setFormModalData] = useRecoilState(formModalDataState);
  const [editData, setEditData] = useRecoilState(editDataState);
  const setValidationError = useSetRecoilState(validationErrorState);

  const formAnim = useSpringValue(0);

  const handleOpen = () => {
    formAnim.start(542);
  };

  const onClose = () => {
    formAnim.start(0);

    setTimeout(() => {
      setFormModalData(null);
      setShowFormModal(false);
      setValidationError(null);
      setEditData(null);
    }, 500);
  };

  useEffect(() => {
    if (showFormModal) {
      handleOpen();
    }
  }, [showFormModal]);

  return {
    showFormModal,
    formModalData,
    editData,
    formAnim,
    onClose,
  };
};

export default useFormModal;
