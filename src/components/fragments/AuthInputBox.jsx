import SubmitButton from "components/elements/SubmitButton";
import TextInput from "components/elements/TextInput";
import useAuthController from "controllers/authController";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { validationErrorState } from "store/atom/formState";
import AuthFormFooter from "./AuthFormFooter";
import DropdownInput from "components/elements/DropdownInput";

const AuthInputBox = ({ formData, type }) => {
  const validationError = useRecoilValue(validationErrorState);

  const { control, handleSubmit } = useForm({
    defaultValues: formData.defaultValues,
  });
  const { useLogin, useRegisterAdmin } = useAuthController();

  return (
    <div className={`${type === "login" ? "w-97" : "w-100"} ${type === "login" ? "py-10.5" : "py-8"} px-11.5 flex-1 bg-white rounded-md max-h-100`}>
      <div className={`items-center text-center gap-2 mx-12 ${type === "login" ? "mb-18" : "mb-12"}`}>
        <h1 className="text-gray">{formData.title}</h1>
        <p className="text-light-gray">{formData.subTitle}</p>
      </div>

      <form onSubmit={handleSubmit(type === "login" ? useLogin : useRegisterAdmin)} className="flex-1">
        <div className="flex-row gap-12.5">
          {formData.formData.map((inputPage, index) => (
            <div key={index.toString()} className="gap-6 flex-1">
              {inputPage.map((inputData, index) => {
                if (inputData.type === "text" || inputData.type === "email" || inputData.type === "password") {
                  return (
                    <TextInput key={index.toString()} inputData={inputData} control={control} validationError={validationError && validationError.find((item) => item.field === inputData.name)} />
                  );
                } else if (inputData.type === "dropdown") {
                  return (
                    <DropdownInput key={index.toString()} inputData={inputData} control={control} validationError={validationError && validationError.find((item) => item.field === inputData.name)} />
                  );
                }
              })}
            </div>
          ))}
        </div>

        <SubmitButton buttonData={formData.submitButton} color={type === "login" ? "bg-primary" : "bg-secondary"} styles={`${type === "login" ? "mt-18" : "mt-5"} px-26`} />
      </form>

      {type === "login" && <AuthFormFooter />}
    </div>
  );
};

export default AuthInputBox;

AuthInputBox.propTypes = {
  formData: PropTypes.object,
  type: PropTypes.oneOf(["login", "register"]),
};
