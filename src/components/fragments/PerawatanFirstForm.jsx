import React from "react";
import PropTypes from "prop-types";
import TextInput from "components/elements/TextInput";
import { perawatanForm } from "constants/form";
import Form from "./Form";

const PerawatanFirstForm = ({ control }) => {
  return (
    <div className="flex-row gap-22">
      <div className="grow">
        {perawatanForm.assessment.inputs.first.map((input) => (
          <Form control={control} formData={input} />
        ))}
      </div>
    </div>
  );
};

export default PerawatanFirstForm;

PerawatanFirstForm.propTypes = {
  control: PropTypes.any,
};
