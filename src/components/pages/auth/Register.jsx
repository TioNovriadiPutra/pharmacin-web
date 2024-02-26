import AuthForm from "components/layouts/AuthForm";
import AuthContainer from "containers/AuthContainer";

const Register = () => {
  return (
    <AuthContainer type="register">
      <AuthForm type="register" />
    </AuthContainer>
  );
};

export default Register;
