import { loginBottomVector, loginTopVector, regisTopVector, regisBottomVector } from "assets/images";
import PropTypes from "prop-types";

const AuthContainer = ({ children, type = "login" }) => {
  return (
    <div className={`justify-between h-screen ${type === "login" ? "bg-primary" : "bg-secondary"}`}>
      <img style={{ height: "295px" }} src={type === "login" ? loginTopVector : regisTopVector} alt={`${type}TopVector`} />

      {children}

      <img style={{ height: "356px" }} src={type === "login" ? loginBottomVector : regisBottomVector} alt={`${type}TopVector`} className="object-right" />
    </div>
  );
};

export default AuthContainer;

AuthContainer.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["login", "register"]),
};
