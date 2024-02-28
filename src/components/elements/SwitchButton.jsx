import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "store/atom/pageState";

const SwitchButton = ({ buttonData, onClick }) => {
  const switchIndex = useRecoilValue(switchIndexState);

  return (
    <div className="flex-row gap-3.5">
      {buttonData.map((item, index) => (
        <SubmitButton key={index.toString()} buttonData={item} color={switchIndex === index ? "bg-primary" : "bg-inactive"} styles="px-10.5" onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default SwitchButton;

SwitchButton.propTypes = {
  buttonData: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
