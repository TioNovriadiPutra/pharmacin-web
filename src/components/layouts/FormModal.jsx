import { animated } from "@react-spring/web";
import BackButton from "components/elements/BackButton";
import Form from "components/fragments/Form";
import ModalContainer from "containers/ModalContainer";
import useFormModal from "hooks/useFormModal";

const FormModal = () => {
  const { showFormModal, formModalData, formAnim, onClose, control, onSubmit } =
    useFormModal();

  if (showFormModal) {
    return (
      <ModalContainer styles="flex-row">
        <animated.div
          style={{ width: formAnim }}
          className="bg-white h-full rounded-tr-md rounded-br-md px-3.5 overflow-hidden pt-9 pb-6"
        >
          <BackButton styles="top-8.5 left-8" onClick={onClose} />

          <Form
            styles="mx-8"
            formData={formModalData}
            control={control}
            onSubmit={onSubmit}
          />
        </animated.div>

        <div className="flex-1" onClick={onClose} />
      </ModalContainer>
    );
  }

  return null;
};

export default FormModal;
