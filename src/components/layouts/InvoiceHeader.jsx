import React from "react";
import PropTypes from "prop-types";
import DetailBoxSection from "components/fragments/DetailBoxSection";

const InvoiceHeader = ({ headerData }) => {
  return (
    <div className="bg-white px-6 py-4.5 rounded-md">
      <DetailBoxSection data={headerData.first} styles="w-2/4" />
    </div>
  );
};

export default InvoiceHeader;

InvoiceHeader.propTypes = {
  headerData: PropTypes.object,
};
