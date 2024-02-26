import PropTypes from "prop-types";

const SubmitButton = ({ buttonData, color = "bg-inactive", styles, onClick }) => {
  return (
    <button
      type={buttonData.type}
      className={`${color} ${color !== "bg-inactive" ? "text-white" : "text-inactive-label"} self-center whitespace-nowrap ${styles}`}
      onClick={buttonData !== "submit" && onClick}
    >
      {buttonData.label}
    </button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  buttonData: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.string,
  onClick: PropTypes.func,
};
