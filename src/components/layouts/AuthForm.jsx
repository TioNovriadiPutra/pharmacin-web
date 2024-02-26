import { logoFull } from "assets/images";
import AuthInputBox from "components/fragments/AuthInputBox";
import { loginForm, registerForm } from "constants/form";
import PropTypes from "prop-types";

const AuthForm = ({ type = "login" }) => {
  return (
    <div style={{ marginTop: "42px" }} className="absolute self-center gap-6 h-full">
      <img style={{ height: "91px" }} src={logoFull} alt="logoFull" className="object-center" />

      <AuthInputBox formData={type === "login" ? loginForm : registerForm} type={type} />
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  type: PropTypes.oneOf(["login", "register"]),
};
