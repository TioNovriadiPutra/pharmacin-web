import BackButton from "components/elements/BackButton";
import Bar from "components/elements/Bar";
import SubmitButton from "components/elements/SubmitButton";
import ModalContainer from "containers/ModalContainer";
import useConfirmation from "hooks/useConfirmation";

const ConfimationModal = () => {
  const { showConfirmationModal, onClose, onApprove } = useConfirmation();

  if (showConfirmationModal) {
    return (
      <ModalContainer styles="justify-center items-center">
        <div className="bg-white px-3.5 relative w-98 pt-9 pb-6 rounded-md">
          <BackButton styles="top-8.5 left-8" onClick={onClose} />

          <h1 className="text-black text-center">Hapus Data</h1>

          <h3 className="text-center mx-10.5 mt-22 mb-8">Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin ingin menghapus data pada aplikasi?</h3>

          <div>
            <Bar />

            <div className="flex-row gap-6">
              <SubmitButton
                buttonData={{
                  type: "button",
                  label: "Batalkan",
                }}
                color="bg-placeholder"
                styles="flex-1 items-center"
                onClick={onClose}
              />

              <SubmitButton
                buttonData={{
                  type: "button",
                  label: "Hapus",
                }}
                color="bg-danger"
                styles="flex-1 items-center"
                onClick={onApprove}
              />
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }

  return null;
};

export default ConfimationModal;
