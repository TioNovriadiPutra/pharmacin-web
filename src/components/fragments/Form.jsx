import TextInput from "components/elements/TextInput";
import { useForm } from "react-hook-form";
import FormFooter from "./FormFooter";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "store/atom/formState";
import DropdownInput from "components/elements/DropdownInput";
import CurrInput from "components/elements/CurrInput";
import ScrollContainer from "containers/ScrollContainer";

const Form = ({ formData, editData }) => {
  const validationError = useRecoilValue(validationErrorState);

  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });

  return (
    <div className="flex-1 gap-8.5">
      <h1 className="text-dark-blue text-center whitespace-nowrap">{formData.title}</h1>

      <form className="flex-1" onSubmit={handleSubmit(formData.type.includes("edit") ? editData.onApprove : formData.submitButton.onClick)}>
        <ScrollContainer styles="gap-6 mx-8">
          {formData.inputs.map((item, index) => {
            if (item.type === "text" || item.type === "email" || item.type === "password") {
              return <TextInput key={index.toString()} inputData={item} control={control} validationError={validationError && validationError.find((tmp) => tmp.field === item.name)} />;
            } else if (item.type === "dropdown") {
              return <DropdownInput key={index.toString()} inputData={item} control={control} validationError={validationError && validationError.find((item) => item.field === item.name)} />;
            } else if (item.type === "currency") {
              return <CurrInput key={index.toString()} inputData={item} control={control} validationError={validationError && validationError.find((tmp) => tmp.field === item.name)} />;
            }
          })}
        </ScrollContainer>

        <FormFooter buttonData={formData.submitButton} />
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  formData: PropTypes.object,
  editData: PropTypes.object,
};
