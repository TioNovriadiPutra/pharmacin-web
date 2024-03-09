import PropTypes from "prop-types";

const ScrollContainer = ({ children, styles }) => {
  return (
    <div
      className={`grow basis-0 overflow-y-auto overflow-x-hidden appearance-none scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar scrollbar-w-1.25 scrollbar-thumb-primary scrollbar-track-white ${styles}`}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;

ScrollContainer.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.string,
};
