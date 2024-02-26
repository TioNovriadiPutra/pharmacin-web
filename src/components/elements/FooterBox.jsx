import PropTypes from "prop-types";

const FooterBox = ({ itemData }) => {
  return (
    <div className={`flex-1 items-center gap-3.75 pt-3 pb-5.5 rounded-md ${itemData.color}`}>
      <h2 className={`${itemData.textColor}`}>{itemData.value}</h2>

      <h4 className={`${itemData.textColor}`}>{itemData.label}</h4>
    </div>
  );
};

export default FooterBox;

FooterBox.propTypes = {
  itemData: PropTypes.object,
};
