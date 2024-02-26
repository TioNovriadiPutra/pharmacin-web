import { setRecoil } from "recoil-nexus";
import { formModalDataState, showFormModalState } from "store/atom/formState";
import { addKategoriForm, addObatForm, addPabrikForm } from "./form";

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

export { pabrikanHeader, kategoriHeader, kelolaObatHeader };
