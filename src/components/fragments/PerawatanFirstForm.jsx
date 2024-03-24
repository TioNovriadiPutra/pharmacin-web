import PropTypes from "prop-types";
import { perawatanForm } from "constants/form";
import TextInput from "components/elements/TextInput";

const PerawatanFirstForm = ({ control }) => {
  return (
    <div className="flex-row gap-22">
      <div className="w-2/4 gap-3.5">
        {perawatanForm.assessment.inputs.first.map((input, index) => (
          <TextInput
            key={index.toString()}
            control={control}
            inputData={input}
          />
        ))}
      </div>
    </div>
  );
};

export default PerawatanFirstForm;

PerawatanFirstForm.propTypes = {
  control: PropTypes.any,
};
