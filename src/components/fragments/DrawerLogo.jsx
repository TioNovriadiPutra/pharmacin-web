import { logo } from "assets/images";
import PropTypes from "prop-types";

const DrawerLogo = ({ onClick }) => {
  return (
    <button className="flex-row items-center py-0 rounded-sm mx-3.75 gap-4.75 overflow-hidden" onClick={onClick}>
      <img src={logo} />

      <h1 className="text-primary">Pharmacin</h1>
    </button>
  );
};

export default DrawerLogo;

DrawerLogo.propTypes = {
  onClick: PropTypes.func,
};
