import TextAreaInput from "components/elements/TextAreaInput";
import { perawatanForm } from "constants/form";
import PropTypes from "prop-types";

const PerawatanThirdForm = ({ control }) => {
  return (
    <div className="flex-row gap-22">
      <div className="flex-1 gap-3.5">
        {perawatanForm.assessment.inputs.third[0].inputs.map((input, index) => (
          <TextAreaInput key={index.toString()} control={control} inputData={input} />
        ))}
      </div>

      <div className="flex-1 gap-3.5">
        {perawatanForm.assessment.inputs.third[1].inputs.map((input, index) => (
          <TextAreaInput key={index.toString()} control={control} inputData={input} />
        ))}
      </div>
    </div>
  );
};

export default PerawatanThirdForm;

PerawatanThirdForm.propTypes = {
  control: PropTypes.any,
};
