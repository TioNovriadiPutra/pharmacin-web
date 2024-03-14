import React from "react";
import PropTypes from "prop-types";
import HeaderItem from "components/elements/HeaderItem";

const InvoiceTableHeader = ({ headerData }) => {
  return (
    <div className="flex-row bg-main-background px-3.5 py-4.25 gap-6 rounded-md">
      {headerData.map((item, index) => (
        <HeaderItem key={index.toString()} title={item} />
      ))}
    </div>
  );
};

export default InvoiceTableHeader;

InvoiceTableHeader.propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.string),
};
