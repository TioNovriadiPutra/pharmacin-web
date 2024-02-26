const loginForm = {
  title: "Masuk",
  subTitle: "Selamat datang, silahkan masuk dengan akun yang telah terdaftar",
  formData: [
    [
      {
        type: "email",
        name: "email",
        defaultValue: null,
        placeholder: "Email",
      },
      {
        type: "password",
        name: "password",
        defaultValue: null,
        placeholder: "Password",
      },
    ],
  ],
  submitButton: {
    label: "Masuk",
    type: "submit",
  },
};

const registerForm = {
  title: "Daftar",
  subTitle: "Masukan alamat email dan kata sandi untuk membuat akun",
  formData: [
    [
      {
        type: "text",
        name: "fullName",
        defaultValue: null,
        placeholder: "Nama Lengkap",
      },
      {
        type: "dropdown",
        name: "gender",
        defaultValue: null,
        placeholder: "Jenis Kelamin",
        items: [
          {
            label: "Laki-laki",
            value: "male",
          },
          {
            label: "Perempuan",
            value: "female",
          },
        ],
      },
      {
        type: "text",
        name: "phone",
        defaultValue: null,
        placeholder: "Nomor Handphone",
      },
      {
        type: "text",
        name: "clinicName",
        defaultValue: null,
        placeholder: "Nama Klinik",
      },
      {
        type: "text",
        name: "clinicPhone",
        defaultValue: null,
        placeholder: "Nomor Telepon Klinik",
      },
    ],
    [
      {
        type: "email",
        name: "email",
        defaultValue: null,
        placeholder: "Email",
      },
      {
        type: "password",
        name: "password",
        defaultValue: null,
        placeholder: "Password",
      },
      {
        type: "password",
        name: "password_confirmation",
        defaultValue: null,
        placeholder: "Konfirmasi Password",
      },
    ],
  ],
  submitButton: {
    label: "Daftar",
    type: "submit",
  },
};

const addPabrikForm = {
  type: "pabrikan",
  title: "Tambah Pabrik",
  inputs: [
    {
      type: "text",
      name: "factoryName",
      defaultValue: null,
      placeholder: "Nama Pabrik",
      outside: true,
    },
    {
      type: "email",
      name: "factoryEmail",
      defaultValue: null,
      placeholder: "Email Pabrik",
      outside: true,
    },
    {
      type: "text",
      name: "factoryPhone",
      defaultValue: null,
      placeholder: "Telepon Pabrik",
      outside: true,
    },
  ],
  submitButton: {
    type: "submit",
    label: "Tambah Pabrik",
  },
};

const addKategoriForm = {
  type: "kategori",
  title: "Tambah Kategori",
  inputs: [
    {
      type: "text",
      name: "categoryName",
      placeholder: "Nama Kategori",
      outside: true,
    },
  ],
  defaultValues: {
    categoryName: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Kategori",
  },
};

const addObatForm = {
  type: "obat",
  title: "Tambah Obat",
  inputs: [
    {
      type: "text",
      name: "drug",
      placeholder: "Nama Obat",
      outside: true,
    },
    {
      type: "text",
      name: "drugGenericName",
      placeholder: "Nama Generik",
      outside: true,
    },
    {
      type: "text",
      name: "dose",
      placeholder: "Takaran",
      outside: true,
    },
    {
      type: "dropdown",
      name: "categoryId",
      placeholder: "Kategori",
      outside: true,
      items: [],
    },
    {
      type: "text",
      name: "shelve",
      placeholder: "Rak",
      outside: true,
    },
    {
      type: "dropdown",
      name: "factoryId",
      placeholder: "Pabrikan",
      outside: true,
      items: [],
    },
    {
      type: "text",
      name: "purchasePrice",
      placeholder: "Harga Beli",
      outside: true,
    },
    {
      type: "text",
      name: "sellingPrice",
      placeholder: "Harga Jual",
      outside: true,
    },
  ],
  defaultValues: {
    drug: "",
    drugGenericName: "",
    dose: "",
    categoryId: null,
    shelve: "",
    factoryId: null,
    purchasePrice: "",
    sellingPrice: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Obat",
  },
};

export { loginForm, registerForm, addPabrikForm, addKategoriForm, addObatForm };