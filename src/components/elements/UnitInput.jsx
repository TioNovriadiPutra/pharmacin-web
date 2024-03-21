import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ErrorMessageInput from "./ErrorMessageInput";

const UnitInput = ({ inputData, control, validationError }) => {
  return (
    <Controller
      name={inputData.name}
      control={control}
      render={({ field }) => {
        return (
          <div className="gap-0.5 relative">
            {inputData.outside && <h3 className="text-sub-title whitespace-nowrap">{inputData.placeholder}</h3>}

            <div className="flex-row items-center gap-2.5">
              <input
                className={`remove-arrow ${validationError && "border-danger"} ${inputData.readOnly && "bg-main-background"} w-15 text-center`}
                type="number"
                placeholder="-"
                readOnly={inputData.readOnly}
                {...field}
              />

              <p className="text-placeholder">{inputData.unit}</p>
            </div>

            <ErrorMessageInput validationError={validationError} />
          </div>
        );
      }}
    />
  );
};

export default UnitInput;

UnitInput.propTypes = {
  inputData: PropTypes.object,
  control: PropTypes.any,
  validationError: PropTypes.object,
};
