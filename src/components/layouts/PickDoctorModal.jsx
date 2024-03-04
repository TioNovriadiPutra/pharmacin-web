import { confirmIcon } from "assets/images";
import DropdownInput from "components/elements/DropdownInput";
import SubmitButton from "components/elements/SubmitButton";
import { pickDoctorForm } from "constants/form";
import ModalContainer from "containers/ModalContainer";
import usePickDoctorModal from "hooks/usePickDoctorModal";

const PickDoctorModal = () => {
  const { showModal, data, control, onClose, onApprove } = usePickDoctorModal();

  if (showModal) {
    return (
      <ModalContainer styles="justify-center items-center">
        <div className="bg-white py-6 px-3.5 relative w-98 rounded-md">
          <img src={confirmIcon} className="w-23 self-center mb-6" />

          <h1 className="text-center text-black mb-10">Konfirmasi Perawatan</h1>

          <h5 className="text-center mx-8 mb-9 text-black">
            Lanjutkan proses perawatan dengan nama <h2 className="inline">{data.name}</h2> menuju doktor:
          </h5>

          <div className="h-20 mx-8 z-20 relative">
            <DropdownInput control={control} inputData={pickDoctorForm.inputs[0]} />
          </div>

          <div className="flex-row gap-6 border-t pt-6 px-2.5 border-border z-10 relative">
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
                label: "Lanjutkan",
              }}
              color="bg-primary"
              styles="flex-1 items-center"
              onClick={onApprove}
            />
          </div>
        </div>
      </ModalContainer>
    );
  }

  return null;
};

export default PickDoctorModal;
