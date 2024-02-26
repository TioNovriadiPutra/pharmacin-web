import { useNavigate } from "react-router-dom";

const AuthFormFooter = () => {
  const nav = useNavigate();

  return (
    <div className="border-t border-bar mt-6 items-center pt-4.5 gap-1">
      <h5 className="text-light-gray">Tidak punya akun?</h5>

      <button className="p-0" onClick={() => nav("/register")}>
        <h2 className="text-primary">Daftar Disini</h2>
      </button>
    </div>
  );
};

export default AuthFormFooter;
