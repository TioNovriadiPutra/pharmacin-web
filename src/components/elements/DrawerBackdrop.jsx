import PropTypes from "prop-types";

const DrawerBackdrop = ({ onClick }) => {
  return <div className="bg-modal absolute h-screen w-screen z-40" onClick={onClick}></div>;
};

export default DrawerBackdrop;

DrawerBackdrop.propTypes = {
  onClick: PropTypes.func,
};
