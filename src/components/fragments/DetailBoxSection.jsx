import React from "react";
import PropTypes from "prop-types";
import DetailBoxRow from "components/elements/DetailBoxRow";

const DetailBoxSection = ({ data, styles }) => {
  return (
    <div className={`gap-3 ${styles}`}>
      {data.map((item, index) => (
        <DetailBoxRow key={index.toString()} item={item} />
      ))}
    </div>
  );
};

export default DetailBoxSection;

DetailBoxSection.propTypes = {
  data: PropTypes.array,
  styles: PropTypes.string,
};
