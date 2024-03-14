import React from "react";
import PropTypes from "prop-types";
import InvoiceTableHeader from "components/fragments/InvoiceTableHeader";
import TableContent from "components/fragments/TableContent";

const InvoiceTable = ({ tableData }) => {
  return (
    <div className="bg-white rounded-md px-2.5 py-3.5 flex-1">
      <InvoiceTableHeader headerData={tableData.header} />

      <TableContent contentData={tableData.table} />
    </div>
  );
};

export default InvoiceTable;

InvoiceTable.propTypes = {
  tableData: PropTypes.object,
};
