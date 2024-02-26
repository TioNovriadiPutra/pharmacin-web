import HeaderFunction from "components/fragments/HeaderFunction";
import HeaderTitle from "components/fragments/HeaderTitle";
import PropTypes from "prop-types";

const PageHeader = ({ headerData }) => {
  return (
    <div className="flex-row items-center justify-between">
      <HeaderTitle titleData={headerData.titleData} />

      <HeaderFunction functionData={headerData.functionData} />
    </div>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  headerData: PropTypes.object,
};
