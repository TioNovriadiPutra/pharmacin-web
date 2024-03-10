import { useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";

const useFormModal = () => {
  const [showFormModal, setShowFormModal] = useRecoilState(showFormModalState);
  const [formModalData, setFormModalData] = useRecoilState(formModalDataState);
  const setValidationError = useSetRecoilState(validationErrorState);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formModalData ? formModalData.defaultValues : {},
  });

  const formAnim = useSpringValue(0);

  const handleOpen = () => {
    formAnim.start(542);
    reset(formModalData.defaultValues);
  };

  const onClose = () => {
    formAnim.start(0);

    setTimeout(() => {
      setFormModalData(null);
      setShowFormModal(false);
      setValidationError(null);
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
    formAnim,
    onClose,
    control,
    onSubmit: formModalData && handleSubmit(formModalData.submitButton.onClick),
  };
};

export default useFormModal;
