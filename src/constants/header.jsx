import { setRecoil } from "recoil-nexus";
import { formModalDataState, showFormModalState } from "store/atom/formState";
import {
  addKategoriForm,
  addObatForm,
  addPabrikForm,
  addPatientForm,
} from "./form";
import { switchIndexState } from "store/atom/pageState";

const pabrikanHeader = {
  titleData: {
    title: "Pabrikan",
    subTitle: "/ Kelola Pabrik",
  },
  functionData: [
    {
      type: "button",
      label: "Tambah Pabrik",
      onClick: () => {
        setRecoil(formModalDataState, addPabrikForm);
        setRecoil(showFormModalState, true);
      },
    },
  ],
};

const kategoriHeader = {
  titleData: {
    title: "Obat",
    subTitle: "/ Kategori",
  },
  functionData: [
    {
      type: "button",
      label: "Tambah Kategori",
      onClick: () => {
        setRecoil(formModalDataState, addKategoriForm);
        setRecoil(showFormModalState, true);
      },
    },
  ],
};

const kelolaObatHeader = {
  titleData: {
    title: "Obat",
    subTitle: "/ Kelola",
  },
  functionData: [
    {
      type: "button",
      label: "Tambah Obat",
      onClick: () => {
        setRecoil(formModalDataState, addObatForm);
        setRecoil(showFormModalState, true);
      },
    },
  ],
};

const stockHeader = {
  titleData: {
    title: "Stock",
    subTitle: "/ Stock",
  },
  functionData: [
    {
      type: "switch",
      buttons: [
        {
          type: "button",
          label: "Per Obat",
        },
        {
          type: "button",
          label: "Per Item",
        },
      ],
      onClick: (index) => setRecoil(switchIndexState, index),
    },
  ],
};

const tambahPembelianHeader = {
  titleData: {
    title: "Pembelian",
  },
  functionData: [
    {
      type: "button",
      label: "Konfirmasi",
    },
  ],
};

const kelolaPembelianHeader = {
  titleData: {
    title: "Pembelian",
    subTitle: "/ Kelola Pembelian",
  },
  functionData: [
    {
      type: "button",
      label: "Tambah Pembelian",
    },
  ],
};

const pendaftaranHeader = {
  titleData: {
    title: "Pendaftaran",
    subTitle: "/ Daftar Pasien",
  },
  functionData: [
    {
      type: "button",
      label: "Daftar Pasien Baru",
      onClick: () => {
        setRecoil(formModalDataState, addPatientForm);
        setRecoil(showFormModalState, true);
      },
    },
  ],
};

const pendaftaranSubHeader = {
  functionData: [
    {
      type: "switch",
      buttons: [
        {
          type: "button",
          label: "Daftar Antrian",
        },
        {
          type: "button",
          label: "Data Pasien Terdaftar",
        },
      ],
      onClick: (index) => setRecoil(switchIndexState, index),
    },
  ],
};

export {
  pabrikanHeader,
  kategoriHeader,
  kelolaObatHeader,
  stockHeader,
  tambahPembelianHeader,
  kelolaPembelianHeader,
  pendaftaranHeader,
  pendaftaranSubHeader,
};
