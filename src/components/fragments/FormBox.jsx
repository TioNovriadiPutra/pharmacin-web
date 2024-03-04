import PropTypes from "prop-types";
import Form from "./Form";
import CartInput from "./CartInput";

const FormBox = ({ styles, formData, control, setValue }) => {
  return (
    <div className={`bg-white flex-1 rounded-md ${styles}`}>
      {formData.type === "form" ? <Form formData={formData} control={control} /> : <CartInput cartData={formData} control={control} setValue={setValue} />}
    </div>
  );
};

export default FormBox;

FormBox.propTypes = {
  styles: PropTypes.string,
  formData: PropTypes.object,
  control: PropTypes.any,
  setValue: PropTypes.any,
};
