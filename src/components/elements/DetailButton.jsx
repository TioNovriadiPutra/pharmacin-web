import { detailIcon } from "assets/images";
import PropTypes from "prop-types";

const DetailButton = ({ styles, onClick }) => {
  return (
    <button type="button" className={`py-0 absolute ${styles}`} onClick={onClick}>
      <img src={detailIcon} />
    </button>
  );
};

export default DetailButton;

DetailButton.propTypes = {
  styles: PropTypes.string,
  onClick: PropTypes.func,
};
