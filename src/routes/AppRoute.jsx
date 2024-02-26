import CustomDrawer from "components/layouts/CustomDrawer";
import Dashboard from "components/pages/app/Dashboard";
import Notifikasi from "components/pages/app/Notifikasi";
import Kategori from "components/pages/app/obat/Kategori";
import KelolaObat from "components/pages/app/obat/KelolaObat";
import Pabrikan from "components/pages/app/pabrikan/Pabrikan";
import PabrikanDetail from "components/pages/app/pabrikan/PabrikanDetail";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <div className="flex-1 flex-row">
      <CustomDrawer />

      <Routes>
        <Route path="notifikasi" element={<Notifikasi />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="pabrikan" element={<Pabrikan />} />
        <Route path="pabrikan/:id" element={<PabrikanDetail />} />
        <Route path="obat/*" element={<ObatRoute />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </div>
  );
};

const ObatRoute = () => {
  return (
    <Routes>
      <Route path="kategori" element={<Kategori />} />
      <Route path="kelola" element={<KelolaObat />} />
    </Routes>
  );
};

export default AppRoute;
