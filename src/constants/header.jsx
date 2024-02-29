import { setRecoil } from "recoil-nexus";
import { formModalDataState, showFormModalState } from "store/atom/formState";
import { addKategoriForm, addObatForm, addPabrikForm } from "./form";
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

export { pabrikanHeader, kategoriHeader, kelolaObatHeader, stockHeader, tambahPembelianHeader };
