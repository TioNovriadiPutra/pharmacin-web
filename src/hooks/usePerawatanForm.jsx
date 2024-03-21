import { perawatanForm } from "constants/form";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "store/atom/pageState";

const usePerawatanForm = () => {
  const switchIndex = useRecoilValue(switchIndexState);

  const { control, handleSubmit } = useForm({
    defaultValues: perawatanForm.defaultValues,
  });

  return {
    switchIndex,
    control,
    handleSubmit,
  };
};

export default usePerawatanForm;
