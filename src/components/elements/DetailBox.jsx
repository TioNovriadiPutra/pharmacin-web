import PropTypes from "prop-types";

const DetailBox = ({ itemData }) => {
  return (
    <div className="gap-0.5">
      <h3 className="text-sub-title whitespace-nowrap">{itemData.title}</h3>

      <div className="border border-border outline-none px-3.5 py-2.5 rounded-md w-full min-h-9.5">
        <h4 className="whitespace-nowrap text-black">{itemData.value}</h4>
      </div>
    </div>
  );
};

export default DetailBox;

DetailBox.propTypes = {
  itemData: PropTypes.object,
};
