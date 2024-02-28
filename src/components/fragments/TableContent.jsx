import TableRow from "components/elements/TableRow";
import ScrollContainer from "containers/ScrollContainer";
import PropTypes from "prop-types";

const TableContent = ({ contentData }) => {
  return (
    <ScrollContainer styles="bg-white rounded-md px-3.5">
      {contentData.map((item, index) => (
        <TableRow key={index.toString()} rowData={item} />
      ))}
    </ScrollContainer>
  );
};

export default TableContent;

TableContent.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object),
};
