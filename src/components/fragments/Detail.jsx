import DetailBox from "components/elements/DetailBox";
import PropTypes from "prop-types";
import DetailFooter from "./DetailFooter";
import ScrollContainer from "containers/ScrollContainer";

const Detail = ({ detailData, withFooter = true, styles, contentStyles }) => {
  return (
    <div className={`flex-1 gap-8.5 ${styles}`}>
      {detailData.title && <h1 className="text-dark-blue text-center whitespace-nowrap">{detailData.title}</h1>}

      <ScrollContainer styles={`gap-6 ${contentStyles}`}>
        {detailData.inputs.map((item, index) => (
          <DetailBox key={index.toString()} itemData={item} />
        ))}
      </ScrollContainer>

      {withFooter && <DetailFooter footerData={detailData.footer} />}
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  detailData: PropTypes.object,
  withFooter: PropTypes.bool,
  styles: PropTypes.string,
  contentStyles: PropTypes.string,
};
