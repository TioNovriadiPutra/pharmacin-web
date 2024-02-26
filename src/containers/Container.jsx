import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="flex-1 bg-main-background p-3.5 gap-3.5">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
