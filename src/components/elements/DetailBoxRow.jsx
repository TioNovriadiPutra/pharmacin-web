import React from "react";
import PropTypes from "prop-types";

const DetailBoxRow = ({ item }) => {
  return (
    <div className="flex-row">
      <h3 className="text-sub-title flex-1">{item.title}</h3>
      <h3 className="text-black flex-2">: {item.value}</h3>
    </div>
  );
};

export default DetailBoxRow;

DetailBoxRow.propTypes = {
  item: PropTypes.object,
};
