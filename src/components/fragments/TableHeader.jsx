import HeaderItem from "components/elements/HeaderItem";
import PropTypes from "prop-types";

const TableHeader = ({ headerData }) => {
  return (
    <div className="flex-row bg-white px-3.5 py-4.25 gap-6 rounded-md">
      {headerData.map((item, index) => (
        <HeaderItem key={index.toString()} title={item} />
      ))}
    </div>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.string),
};
