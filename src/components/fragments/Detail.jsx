import DetailBox from "components/elements/DetailBox";
import PropTypes from "prop-types";
import DetailFooter from "./DetailFooter";
import ScrollContainer from "containers/ScrollContainer";

const Detail = ({ detailData }) => {
  return (
    <div className="flex-1 gap-8.5">
      <h1 className="text-dark-blue text-center whitespace-nowrap">{detailData.title}</h1>

      <ScrollContainer styles="gap-6 mx-8">
        {detailData.inputs.map((item, index) => (
          <DetailBox key={index.toString()} itemData={item} />
        ))}
      </ScrollContainer>

      <DetailFooter footerData={detailData.footer} />
    </div>
  );
};

export default Detail;

Detail.propTypes = {
  detailData: PropTypes.object,
};
