import CustomDrawer from "components/layouts/CustomDrawer";
import Dashboard from "components/pages/app/Dashboard";
import Notifikasi from "components/pages/app/Notifikasi";
import Kategori from "components/pages/app/obat/Kategori";
import KelolaObat from "components/pages/app/obat/KelolaObat";
import Pabrikan from "components/pages/app/pabrikan/Pabrikan";
import PabrikanDetail from "components/pages/app/pabrikan/PabrikanDetail";
import TambahPembelian from "components/pages/app/pembelian/TambahPembelian";
import Stock from "components/pages/app/stock/Stock";
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
        <Route path="stock/*" element={<StockRoute />} />
        <Route path="pembelian/*" element={<PembelianRoute />} />
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

const StockRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Stock />} />
    </Routes>
  );
};

const PembelianRoute = () => {
  return (
    <Routes>
      <Route path="" element={<TambahPembelian />} />
    </Routes>
  );
};

export default AppRoute;
