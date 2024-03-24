import { pickDoctorForm } from "constants/form";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  pickDoctorDataState,
  showPickDoctorModalState,
} from "store/atom/pageState";

const usePickDoctorModal = () => {
  const [showModal, setShowModal] = useRecoilState(showPickDoctorModalState);
  const [data, setData] = useRecoilState(pickDoctorDataState);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: pickDoctorForm.defaultValues,
  });

  const onClose = () => {
    setData(null);
    reset(pickDoctorForm.defaultValues);
    setShowModal(false);
  };

  const onApprove = data ? handleSubmit(data.onApprove) : null;

  return {
    showModal,
    data,
    control,
    onClose,
    onApprove,
  };
};

export default usePickDoctorModal;
