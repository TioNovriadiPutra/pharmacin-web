import PropTypes, { any } from "prop-types";
import Form from "./Form";

const FormBox = ({ styles, formData, control }) => {
  return (
    <div className={`bg-white flex-1 rounded-md ${styles}`}>
      <Form formData={formData} control={control} />
    </div>
  );
};

export default FormBox;

FormBox.propTypes = {
  styles: PropTypes.string,
  formData: PropTypes.object,
  control: any,
};
