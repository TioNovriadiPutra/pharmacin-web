import PropTypes from "prop-types";

const HeaderItem = ({ title }) => {
  return <h3 className={`flex-1 text-sub-title ${title === "Tindakan" && "text-center"}`}>{title}</h3>;
};

export default HeaderItem;

HeaderItem.propTypes = {
  title: PropTypes.string,
};
