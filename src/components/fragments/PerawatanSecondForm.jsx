import UnitInput from "components/elements/UnitInput";
import { perawatanForm } from "constants/form";
import PropTypes from "prop-types";

const PerawatanSecondForm = ({ control }) => {
  return (
    <div className="flex-row gap-12">
      {perawatanForm.assessment.inputs.second.map((input, index) => (
        <UnitInput key={index.toString()} inputData={input} control={control} />
      ))}
    </div>
  );
};

export default PerawatanSecondForm;

PerawatanSecondForm.propTypes = {
  control: PropTypes.any,
};
