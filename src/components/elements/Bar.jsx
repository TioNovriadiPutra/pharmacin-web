import PropTypes from "prop-types";

const Bar = ({ styles }) => {
  return <div className={`h-px my-6 bg-bar mx-3.75 ${styles}`}></div>;
};

export default Bar;

Bar.propTypes = {
  styles: PropTypes.string,
};
