import { dashboardActive, dashboardInactive, obatActive, obatInactive, pabrikanActive, pabrikanInactive, pembelianActive, pembelianInactive, stockActive, stockInactive } from "assets/images";

const drawerList = [
  {
    label: "Dashboard",
    path: "/dashboard",
    active: dashboardActive,
    inactive: dashboardInactive,
  },
  {
    label: "Stock",
    path: "/stock",
    active: stockActive,
    inactive: stockInactive,
    subMenu: [
      {
        label: "Stock",
        path: "/stock",
      },
      {
        label: "Opname",
        path: "/stock/opname",
      },
      {
        label: "Riwayat Stock",
        path: "/stock/riwayat",
      },
    ],
  },
  {
    label: "Obat",
    path: "/obat",
    active: obatActive,
    inactive: obatInactive,
    subMenu: [
      {
        label: "Kategori",
        path: "/obat/kategori",
      },
      {
        label: "Kelola Obat",
        path: "/obat/kelola",
      },
    ],
  },
  {
    label: "Pabrikan",
    path: "/pabrikan",
    active: pabrikanActive,
    inactive: pabrikanInactive,
  },
  {
    label: "Pembelian",
    path: "/pembelian",
    active: pembelianActive,
    inactive: pembelianInactive,
    subMenu: [
      {
        label: "Tambah Pembelian",
        path: "/pembelian/tambah",
      },
      {
        label: "Kelola Pembelian",
        path: "/pembelian",
      },
    ],
  },
];

export { drawerList };
