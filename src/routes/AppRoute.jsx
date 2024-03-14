import PropTypes from "prop-types";
import CustomDrawer from "components/layouts/CustomDrawer";
import Dashboard from "components/pages/app/Dashboard";
import Notifikasi from "components/pages/app/Notifikasi";
import Pendaftaran from "components/pages/app/Pendaftaran";
import Kategori from "components/pages/app/obat/Kategori";
import KelolaObat from "components/pages/app/obat/KelolaObat";
import Pabrikan from "components/pages/app/pabrikan/Pabrikan";
import PabrikanDetail from "components/pages/app/pabrikan/PabrikanDetail";
import TambahPembelian from "components/pages/app/pembelian/TambahPembelian";
import Stock from "components/pages/app/stock/Stock";
import { Navigate, Route, Routes } from "react-router-dom";
import KelolaPembelian from "components/pages/app/pembelian/KelolaPembelian";
import PemeriksaanPasien from "components/pages/app/dokter/PemeriksaanPasien";
import Perawatan from "components/pages/app/dokter/Perawatan";
import Klinik from "components/pages/app/manajemen/Klinik";
import Karyawan from "components/pages/app/manajemen/Karyawan";
import Dokter from "components/pages/app/manajemen/Dokter";
import AsistenDokter from "components/pages/app/manajemen/AsistenDokter";
import RiwayatKasir from "components/pages/app/manajemen/RiwayatKasir";
import Administrator from "components/pages/app/manajemen/Administrator";
import InvoicePembelian from "components/pages/app/pembelian/InvoicePembelian";

const AppRoute = ({ role }) => {
  return (
    <div className="flex-1 flex-row">
      <CustomDrawer />

      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        {role === 2 ? (
          <>
            <Route path="dokter" element={<PemeriksaanPasien />} />
            <Route path="dokter/perawatan/:id" element={<Perawatan />} />
          </>
        ) : (
          <>
            <Route path="notifikasi" element={<Notifikasi />} />
            <Route path="pabrikan" element={<Pabrikan />} />
            <Route path="pabrikan/:id" element={<PabrikanDetail />} />
            <Route path="obat/*" element={<ObatRoute />} />
            <Route path="stock/*" element={<StockRoute />} />
            <Route path="pembelian/*" element={<PembelianRoute />} />
            <Route path="pendaftaran" element={<Pendaftaran />} />
            {role === 1 && (
              <Route path="manajemen/*" element={<ManajemenRoute />} />
            )}
          </>
        )}

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
      <Route path="tambah" element={<TambahPembelian />} />
      <Route path="kelola" element={<KelolaPembelian />} />
      <Route path="invoice/:id" element={<InvoicePembelian />} />
    </Routes>
  );
};

const ManajemenRoute = () => {
  return (
    <Routes>
      <Route path="klinik" element={<Klinik />} />
      <Route path="administrator" element={<Administrator />} />
      <Route path="karyawan" element={<Karyawan />} />
      <Route path="dokter" element={<Dokter />} />
      <Route path="asisten" element={<AsistenDokter />} />
      <Route path="kasir" element={<RiwayatKasir />} />
    </Routes>
  );
};

export default AppRoute;

AppRoute.propTypes = {
  role: PropTypes.number,
};
