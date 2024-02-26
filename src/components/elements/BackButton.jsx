import { backIcon } from "assets/images";
import PropTypes from "prop-types";

const BackButton = ({ styles, onClick }) => {
  return (
    <button type="button" className={`py-0 absolute ${styles}`} onClick={onClick}>
      <img src={backIcon} />
    </button>
  );
};

export default BackButton;

BackButton.propTypes = {
  styles: PropTypes.string,
  onClick: PropTypes.func,
};
