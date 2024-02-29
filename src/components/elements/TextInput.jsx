import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ErrorMessageInput from "./ErrorMessageInput";

const TextInput = ({ inputData, control, validationError }) => {
  return (
    <Controller
      name={inputData.name}
      control={control}
      render={({ field }) => {
        return (
          <div className="gap-0.5 relative">
            {inputData.outside && <h3 className="text-sub-title whitespace-nowrap">{inputData.placeholder}</h3>}

            <input
              className={`${validationError && "border-danger"} ${inputData.readOnly && "bg-main-background"}`}
              type={inputData.type === "currency" ? "number" : inputData.type}
              placeholder={inputData.outside ? "" : inputData.placeholder}
              readOnly={inputData.readOnly}
              {...field}
            />

            <ErrorMessageInput validationError={validationError} />
          </div>
        );
      }}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  inputData: PropTypes.object,
  control: PropTypes.any,
  validationError: PropTypes.object,
};
