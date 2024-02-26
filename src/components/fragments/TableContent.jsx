import TableRow from "components/elements/TableRow";
import PropTypes from "prop-types";

const TableContent = ({ contentData }) => {
  return (
    <div className="flex-1 bg-white rounded-md px-3.5">
      {contentData.map((item, index) => (
        <TableRow key={index.toString()} rowData={item} />
      ))}
    </div>
  );
};

export default TableContent;

TableContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object),
};
