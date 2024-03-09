import {
  dashboardActive,
  dashboardInactive,
  dokterActive,
  dokterInactive,
  manajemenActive,
  manajemenInactive,
  obatActive,
  obatInactive,
  pabrikanActive,
  pabrikanInactive,
  pembelianActive,
  pembelianInactive,
  pendaftaranActive,
  pendaftaranInactive,
  stockActive,
  stockInactive,
} from "assets/images";

const drawerList = [
  {
    label: "Dashboard",
    path: "/dashboard",
    active: dashboardActive,
    inactive: dashboardInactive,
  },
];

const drawerListDokter = [
  ...drawerList,
  {
    label: "Dokter",
    path: "/dokter",
    active: dokterActive,
    inactive: dokterInactive,
  },
];

const drawerListAdministrator = [
  ...drawerList,
  {
    label: "Pendaftaran",
    path: "/pendaftaran",
    active: pendaftaranActive,
    inactive: pendaftaranInactive,
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
        path: "/pembelian/kelola",
      },
    ],
  },
];

const drawerListAdmin = [
  ...drawerListAdministrator,
  {
    label: "Manajemen",
    path: "/manajemen",
    active: manajemenActive,
    inactive: manajemenInactive,
    subMenu: [
      {
        label: "Klinik",
        path: "/manajemen/klinik",
      },
      {
        label: "Administrator",
        path: "/manajemen/administrator",
      },
      {
        label: "Karyawan",
        path: "/manajemen/karyawan",
      },
      {
        label: "Dokter",
        path: "/manajemen/dokter",
      },
      {
        label: "Asisten Dokter",
        path: "/manajemen/asisten",
      },
      {
        label: "Riwayat Kasir",
        path: "/manajemen/kasir",
      },
    ],
  },
];

export { drawerListDokter, drawerListAdmin, drawerListAdministrator };
