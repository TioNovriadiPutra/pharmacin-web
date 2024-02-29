import PropTypes from "prop-types";

const ErrorMessageInput = ({ validationError }) => {
  return (
    validationError && (
      <p className="text-danger px-3.5 absolute top-full z-40 whitespace-nowrap">
        {validationError.message}
      </p>
    )
  );
};

export default ErrorMessageInput;

ErrorMessageInput.propTypes = {
  validationError: PropTypes.object,
};
