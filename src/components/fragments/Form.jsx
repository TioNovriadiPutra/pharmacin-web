import TextInput from "components/elements/TextInput";
import FormFooter from "./FormFooter";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "store/atom/formState";
import DropdownInput from "components/elements/DropdownInput";
import CurrInput from "components/elements/CurrInput";
import ScrollContainer from "containers/ScrollContainer";

const Form = ({ formData, control, onSubmit, styles, containerStyles }) => {
  const validationError = useRecoilValue(validationErrorState);

  return (
    <div className={`flex-1 gap-8.5 ${containerStyles}`}>
      {formData.title && (
        <h1 className="text-dark-blue text-center whitespace-nowrap">
          {formData.title}
        </h1>
      )}

      <form className="flex-1" onSubmit={onSubmit}>
        <ScrollContainer styles={`gap-6 ${styles}`}>
          {formData.inputs.map((item, index) => {
            if (
              item.type === "text" ||
              item.type === "email" ||
              item.type === "password" ||
              item.type === "date" ||
              item.type === "number"
            ) {
              return (
                <TextInput
                  key={index.toString()}
                  inputData={item}
                  control={control}
                  validationError={
                    validationError &&
                    validationError.find((tmp) => tmp.field === item.name)
                  }
                />
              );
            } else if (item.type === "dropdown") {
              return (
                <DropdownInput
                  key={index.toString()}
                  inputData={item}
                  control={control}
                  validationError={
                    validationError &&
                    validationError.find((tmp) => tmp.field === item.name)
                  }
                />
              );
            } else if (item.type === "currency") {
              return (
                <CurrInput
                  key={index.toString()}
                  inputData={item}
                  control={control}
                  validationError={
                    validationError &&
                    validationError.find((tmp) => tmp.field === item.name)
                  }
                />
              );
            }
          })}
        </ScrollContainer>

        {formData.submitButton && (
          <FormFooter buttonData={formData.submitButton} />
        )}
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  formData: PropTypes.object,
  control: PropTypes.any,
  onSubmit: PropTypes.func,
  styles: PropTypes.string,
  containerStyles: PropTypes.string,
};
