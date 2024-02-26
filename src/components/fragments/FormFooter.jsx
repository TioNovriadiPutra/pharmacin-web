import Bar from "components/elements/Bar";
import SubmitButton from "components/elements/SubmitButton";
import PropTypes from "prop-types";

const FormFooter = ({ buttonData }) => {
  return (
    <div>
      <Bar />

      <SubmitButton buttonData={buttonData} color="bg-primary" styles="w-4/5 items-center" />
    </div>
  );
};

export default FormFooter;

FormFooter.propTypes = {
  buttonData: PropTypes.object,
};
