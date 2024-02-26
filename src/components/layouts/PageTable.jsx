import TableContent from "components/fragments/TableContent";
import TableHeader from "components/fragments/TableHeader";
import PropTypes from "prop-types";

const PageTable = ({ tableData }) => {
  return (
    <div className="flex-1 gap-3.5">
      <TableHeader headerData={tableData.header} />

      <TableContent contentData={tableData.table} />
    </div>
  );
};

export default PageTable;

PageTable.propTypes = {
  tableData: PropTypes.object,
};
