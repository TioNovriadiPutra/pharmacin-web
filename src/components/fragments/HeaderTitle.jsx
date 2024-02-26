import PropTypes from "prop-types";

const HeaderTitle = ({ titleData }) => {
  return (
    <div className="flex-row items-center gap-3">
      <h1 className="text-dark-blue">{titleData.title}</h1>

      <h2 className="text-sub-title">{titleData.subTitle}</h2>
    </div>
  );
};

export default HeaderTitle;

HeaderTitle.propTypes = {
  titleData: PropTypes.object,
};
