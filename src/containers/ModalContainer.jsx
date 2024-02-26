import PropTypes from "prop-types";

const ModalContainer = ({ children, styles }) => {
  return (
    <div style={{ zIndex: 1000 }} className={`fixed top-0 left-0 w-full h-full bg-modal ${styles}`}>
      {children}
    </div>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
};
