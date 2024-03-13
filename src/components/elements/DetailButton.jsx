import { assesmentIcon, detailIcon } from "assets/images";
import PropTypes from "prop-types";

const DetailButton = ({ styles, onClick, type = "detail" }) => {
  return (
    <button
      type="button"
      className={`py-0 absolute ${styles}`}
      onClick={onClick}
    >
      <img src={type === "detail" ? detailIcon : assesmentIcon} />
    </button>
  );
};

export default DetailButton;

DetailButton.propTypes = {
  styles: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["detail", "submit"]),
};
