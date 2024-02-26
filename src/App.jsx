import ConfimationModal from "components/layouts/ConfimationModal";
import DetailModal from "components/layouts/DetailModal";
import FormModal from "components/layouts/FormModal";
import LoadingModal from "components/layouts/LoadingModal";
import Toast from "components/layouts/Toast";
import Login from "components/pages/auth/Login";
import Register from "components/pages/auth/Register";
import useAuthController from "controllers/authController";
import { Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import AppRoute from "routes/AppRoute";
import { isLoggedInSelector } from "store/selector/authSelector";

const App = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  const { useIsLoggedIn } = useAuthController();

  useIsLoggedIn();

  return (
    <div className="flex-1">
      <LoadingModal />
      <FormModal />
      <ConfimationModal />
      <DetailModal />

      <Routes>
        <Route path="login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />

        <Route path="register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />

        {isLoggedIn ? <Route path="/*" element={<AppRoute />} /> : <Route path="*" element={<Navigate to="login" />} />}
      </Routes>

      <Toast />
    </div>
  );
};

export default App;
