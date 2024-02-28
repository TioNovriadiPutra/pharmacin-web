import SubmitButton from "components/elements/SubmitButton";
import SwitchButton from "components/elements/SwitchButton";
import PropTypes from "prop-types";

const HeaderFunction = ({ functionData }) => {
  return (
    <div className="flex-row">
      {functionData.map((item, index) => {
        if (item.type === "button") {
          return <SubmitButton key={index.toString()} buttonData={item} color="bg-primary" styles="px-10.5" onClick={item.onClick} />;
        } else if (item.type === "switch") {
          return <SwitchButton key={index.toString()} buttonData={item.buttons} onClick={item.onClick} />;
        }
      })}
    </div>
  );
};

export default HeaderFunction;

HeaderFunction.propTypes = {
  functionData: PropTypes.arrayOf(PropTypes.object),
};
