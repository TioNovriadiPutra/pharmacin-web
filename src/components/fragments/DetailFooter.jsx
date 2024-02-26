import FooterBox from "components/elements/FooterBox";
import PropTypes from "prop-types";

const DetailFooter = ({ footerData }) => {
  return (
    <div className="flex-row mx-8">
      {footerData.map((item, index) => (
        <FooterBox key={index.toString()} itemData={item} />
      ))}
    </div>
  );
};

export default DetailFooter;

DetailFooter.propTypes = {
  footerData: PropTypes.array,
};
