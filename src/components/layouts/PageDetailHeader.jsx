import BackButton from "components/elements/BackButton";
import DetailButton from "components/elements/DetailButton";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PageDetailHeader = ({ title, onDetail }) => {
  const nav = useNavigate();

  return (
    <div className="bg-white relative rounded-md py-3 px-3.5">
      <BackButton styles="top-1.5" onClick={() => nav(-1)} />
      <h3 className="text-dark-blue text-center">{title}</h3>
      <DetailButton styles="top-1.5 right-3.5" onClick={onDetail} />
    </div>
  );
};

export default PageDetailHeader;

PageDetailHeader.propTypes = {
  title: PropTypes.string,
  onDetail: PropTypes.func,
};
