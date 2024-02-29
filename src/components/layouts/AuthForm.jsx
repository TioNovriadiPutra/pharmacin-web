import { logoFull } from "assets/images";
import AuthInputBox from "components/fragments/AuthInputBox";
import { loginForm, registerForm } from "constants/form";
import PropTypes from "prop-types";

const AuthForm = ({ type = "login" }) => {
  return (
    <div
      style={{ height: `${window.innerHeight - 84}px` }}
      className="absolute self-center gap-6 my-10.5"
    >
      <img
        style={{ height: "91px" }}
        src={logoFull}
        alt="logoFull"
        className="object-center"
      />

      <AuthInputBox
        type={type}
        formData={type === "login" ? loginForm : registerForm}
      />
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  type: PropTypes.oneOf(["login", "register"]),
};
