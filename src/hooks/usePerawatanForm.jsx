import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "store/atom/pageState";

const usePerawatanForm = () => {
  const switchIndex = useRecoilValue(switchIndexState);

  const { control, handleSubmit } = useForm();

  return {
    switchIndex,
    control,
  };
};

export default usePerawatanForm;
