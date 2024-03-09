import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ErrorMessageInput from "./ErrorMessageInput";
import CurrencyInput from "react-currency-input-field";

const CurrInput = ({ inputData, control, validationError }) => {
  return (
    <Controller
      name={inputData.name}
      control={control}
      render={({ field }) => {
        return (
          <div className="gap-0.5 relative">
            {inputData.outside && (
              <h3 className="text-sub-title whitespace-nowrap">
                {inputData.placeholder}
              </h3>
            )}

            <CurrencyInput
              prefix="Rp."
              placeholder={inputData.outside ? "" : inputData.placeholder}
              intlConfig={{ locale: "id-ID", currency: "IDR" }}
              value={field.value}
              onValueChange={(value) => field.onChange(parseInt(value) || 0)}
              readOnly={inputData.readOnly}
              className={`${inputData.readOnly && "bg-main-background"} ${
                validationError && "border-danger"
              }`}
            />

            <ErrorMessageInput validationError={validationError} />
          </div>
        );
      }}
    />
  );
};

export default CurrInput;

CurrInput.propTypes = {
  inputData: PropTypes.object,
  control: PropTypes.any,
  validationError: PropTypes.object,
};
