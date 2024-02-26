import { animated } from "@react-spring/web";
import { failedIcon, successIcon } from "assets/images";
import useToast from "hooks/useToast";

const Toast = () => {
  const { toastType, toastAnim, toastMessage } = useToast();

  return (
    <animated.div
      style={{ bottom: toastAnim }}
      className={`w-82 px-3.5 py-2.5 rounded-lg ${
        toastType === "success" ? "bg-light-primary border-primary" : "bg-light-danger border-danger"
      } border flex-row self-center absolute items-center gap-13`}
    >
      <img src={toastType === "success" ? successIcon : failedIcon} />

      <h4 className="text-black">{toastMessage}</h4>
    </animated.div>
  );
};

export default Toast;
