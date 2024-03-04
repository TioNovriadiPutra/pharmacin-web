import SwitchButton from "components/elements/SwitchButton";
import PropTypes from "prop-types";

export const PageSubHeader = ({ subHeaderData }) => {
  return (
    <div className="flex-row">
      {subHeaderData.functionData.map((item, index) => {
        if (item.type === "switch") {
          return <SwitchButton key={index.toString()} buttonData={item.buttons} styles="flex-1" buttonStyles="flex-1 items-center" onClick={item.onClick} />;
        }
      })}
    </div>
  );
};

PageSubHeader.propTypes = {
  subHeaderData: PropTypes.object,
};
