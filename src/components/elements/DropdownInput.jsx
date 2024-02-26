import { dropdownArrow } from "assets/images";
import PropTypes from "prop-types";
import { useState } from "react";
import { Controller } from "react-hook-form";
import ErrorMessageInput from "./ErrorMessageInput";

const DropdownInput = ({ inputData, control, validationError }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Controller
      name={inputData.name}
      control={control}
      render={({ field }) => (
        <div className="gap-0.5 relative">
          {inputData.outside && <h3 className="text-sub-title whitespace-nowrap">{inputData.placeholder}</h3>}

          <div className="relative">
            <div className={`dropdown-container ${validationError ? "border-danger" : "border-border"}`} onClick={() => setIsOpen((prev) => !prev)}>
              <h4 className={`flex-1 ${field.value ? "text-black" : "text-placeholder"}`}>{field.value ? field.value.label : inputData.outside ? "" : inputData.placeholder}</h4>

              <img src={dropdownArrow} />
            </div>

            {isOpen && (
              <div className="dropdown-menu">
                {inputData.items.map((item, index) => (
                  <div key={index.toString()} className="px-2 py-1.5">
                    <button
                      className="px-4 hover:bg-main-background"
                      onClick={() => {
                        field.onChange(item);
                        setIsOpen(false);
                      }}
                    >
                      <p className="text-black">{item.label}</p>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <ErrorMessageInput validationError={validationError} />
        </div>
      )}
    />
  );
};

export default DropdownInput;

DropdownInput.propTypes = {
  inputData: PropTypes.object,
  control: PropTypes.any,
  validationError: PropTypes.object,
};
