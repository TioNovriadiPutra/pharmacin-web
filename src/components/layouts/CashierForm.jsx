import FormBox from "components/fragments/FormBox";
import CashierFormSkeleton from "components/skeleton/CashierFormSkeleton";
import { addPembelianForm } from "constants/form";
import PropTypes from "prop-types";

const CashierForm = ({ control, isLoading, setValue }) => {
  if (isLoading) {
    return <CashierFormSkeleton />;
  }

  return (
    <div className="flex-1 gap-3.5">
      <div className="flex-row gap-3.5 h-48">
        <FormBox styles="py-5 px-4.5" formData={addPembelianForm.pembelian1} control={control} />

        <FormBox styles="flex-2 py-5 px-4.5" formData={addPembelianForm.pembelian2} control={control} />
      </div>

      <FormBox styles="p-2.5" formData={addPembelianForm.pembelian3} control={control} setValue={setValue} />
    </div>
  );
};

export default CashierForm;

CashierForm.propTypes = {
  control: PropTypes.any,
  isLoading: PropTypes.bool,
  setValue: PropTypes.any,
};
