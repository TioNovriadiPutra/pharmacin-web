import moment from "moment";

const loginForm = {
  title: "Masuk",
  subTitle: "Selamat datang, silahkan masuk dengan akun yang telah terdaftar",
  formData: [
    [
      {
        type: "email",
        name: "email",
        placeholder: "Email",
      },
      {
        type: "password",
        name: "password",
        placeholder: "Password",
      },
    ],
  ],
  defaultValues: {
    email: "",
    password: "",
  },
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
        placeholder: "Nama Lengkap",
      },
      {
        type: "dropdown",
        name: "gender",
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
        placeholder: "Nomor Handphone",
      },
      {
        type: "text",
        name: "clinicName",
        placeholder: "Nama Klinik",
      },
      {
        type: "text",
        name: "clinicPhone",
        placeholder: "Nomor Telepon Klinik",
      },
      {
        type: "text",
        name: "address",
        placeholder: "Alamat Klinik",
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
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    clinicName: "",
    clinicPhone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    label: "Daftar",
    type: "submit",
  },
};

const addPabrikForm = {
  title: "Tambah Pabrik",
  inputs: [
    {
      type: "text",
      name: "factoryName",
      placeholder: "Nama Pabrik",
      outside: true,
    },
    {
      type: "email",
      name: "factoryEmail",
      placeholder: "Email Pabrik",
      outside: true,
    },
    {
      type: "text",
      name: "factoryPhone",
      placeholder: "Telepon Pabrik",
      outside: true,
    },
  ],
  defaultValues: {
    factoryName: "",
    factoryEmail: "",
    factoryPhone: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Pabrik",
  },
};

const addKategoriForm = {
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
      type: "dropdown",
      name: "unitId",
      placeholder: "Satuan",
      outside: true,
      items: [],
    },
    {
      type: "number",
      name: "composition",
      placeholder: "Komposisi",
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
      type: "currency",
      name: "purchasePrice",
      placeholder: "Harga Beli",
      outside: true,
    },
    {
      type: "currency",
      name: "sellingPrice",
      placeholder: "Harga Jual",
      outside: true,
    },
  ],
  defaultValues: {
    drug: "",
    drugGenericName: "",
    unitId: null,
    composition: "",
    categoryId: null,
    shelve: "",
    factoryId: null,
    purchasePrice: 0,
    sellingPrice: 0,
  },
  submitButton: {
    type: "submit",
    label: "Tambah Obat",
  },
};

const addPembelianForm = {
  pembelian1: {
    type: "form",
    inputs: [
      {
        type: "dropdown",
        name: "factoryId",
        placeholder: "Nama Pabrik",
        outside: true,
        items: [],
      },
      {
        type: "date",
        name: "createdAt",
        placeholder: "Tanggal",
        outside: true,
        readOnly: true,
      },
    ],
  },
  pembelian2: {
    type: "form",
    inputs: [
      {
        type: "currency",
        name: "totalPrice",
        placeholder: "Total",
        outside: true,
        readOnly: true,
      },
    ],
  },
  pembelian3: {
    type: "cart",
    header: ["Nama Obat", "Kadaluarsa", "QTY", "Harga", "Total", "Tindakan"],
    inputs: [
      {
        type: "cart",
        name: "purchaseItems",
        readOnly: true,
      },
    ],
    temp: {
      inputs: [
        {
          type: "dropdown",
          name: "drugId",
          placeholder: "Pilih Obat",
          items: [],
        },
        {
          type: "date",
          name: "expired",
          placeholder: "YYYY-MM-DD",
        },
        {
          type: "number",
          name: "quantity",
          placeholder: "0",
        },
        {
          type: "currency",
          name: "purchasePrice",
          placeholder: "Rp. 0",
          readOnly: true,
        },
        {
          type: "currency",
          name: "totalPrice",
          placeholder: "Rp. 0",
          readOnly: true,
        },
      ],
    },
    defaultTemp: {
      drugId: null,
      expired: "",
      quantity: "",
      purchasePrice: 0,
      totalPrice: 0,
    },
    addButton: {
      type: "button",
      label: "Add Item",
    },
  },
  defaultValues: {
    factoryId: null,
    createdAt: moment().format("YYYY-MM-DD"),
    totalPrice: 0,
    purchaseItems: [],
  },
};

const pickDoctorForm = {
  inputs: [
    {
      type: "dropdown",
      name: "doctorId",
      placeholder: "Pilih Dokter",
      items: [],
    },
  ],
  defaultValues: {
    doctorId: null,
  },
};

const addPatientForm = {
  title: "Tambah Pasien",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Lengkap",
      outside: true,
    },
    {
      type: "text",
      name: "nik",
      placeholder: "Nomor Induk KTP (NIK)",
      outside: true,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      outside: true,
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
      type: "dropdown",
      name: "occupationId",
      placeholder: "Jenis Pekerjaan",
      outside: true,
      items: [],
    },
    {
      type: "text",
      name: "pob",
      placeholder: "Tempat Lahir",
      outside: true,
    },
    {
      type: "date",
      name: "dob",
      placeholder: "Tanggal Lahir",
      outside: true,
    },
    {
      type: "text",
      name: "phone",
      placeholder: "No Handphone",
      outside: true,
    },
    {
      type: "text",
      name: "allergy",
      placeholder: "Allergy",
      outside: true,
    },
  ],
  defaultValues: {
    fullName: "",
    nik: "",
    address: "",
    gender: null,
    occupationId: null,
    pob: "",
    dob: "",
    phone: "",
    allergy: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Pasien",
  },
};

const editKlinikForm = {
  title: "Edit Klinik",
  inputs: [
    {
      type: "text",
      name: "clinicName",
      placeholder: "Nama Klinik",
      outside: true,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
    {
      type: "text",
      name: "clinicPhone",
      placeholder: "Telepon",
      outside: true,
    },
  ],
  defaultValues: {
    clinicName: "",
    address: "",
    clinicPhone: "",
  },
  submitButton: {
    type: "submit",
    label: "Edit Klinik",
  },
};

const addAdministratorForm = {
  title: "Tambah Administrator",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama",
      outside: true,
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      outside: true,
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
      placeholder: "Handphone",
      outside: true,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      outside: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      outside: true,
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
      outside: true,
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Akun",
  },
};

const addDoctorForm = {
  title: "Tambah Administrator",
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      outside: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      outside: true,
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
      outside: true,
    },
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Dokter",
      outside: true,
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      outside: true,
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
      placeholder: "Handphone",
      outside: true,
    },
    {
      type: "dropdown",
      name: "specialityId",
      placeholder: "Spesialisasi",
      outside: true,
      items: [],
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
  ],
  defaultValues: {
    email: "",
    password: "",
    password_confirmation: "",
    fullName: "",
    gender: null,
    phone: "",
    specialityId: null,
    address: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Akun",
  },
};

const addEmployeeForm = {
  title: "Tambah Karyawan",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Karyawan",
      outside: true,
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      outside: true,
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
      placeholder: "Handphone",
      outside: true,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      outside: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      outside: true,
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
      outside: true,
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    address: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Akun",
  },
};

const addDoctorAssistantForm = {
  title: "Tambah Asisten",
  inputs: [
    {
      type: "text",
      name: "fullName",
      placeholder: "Nama Karyawan",
      outside: true,
    },
    {
      type: "dropdown",
      name: "gender",
      placeholder: "Jenis Kelamin",
      outside: true,
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
      placeholder: "Handphone",
      outside: true,
    },
    {
      type: "text",
      name: "address",
      placeholder: "Alamat",
      outside: true,
    },
    {
      type: "dropdown",
      name: "doctorId",
      placeholder: "Dokter",
      outside: true,
      items: [],
    },
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      outside: true,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      outside: true,
    },
    {
      type: "password",
      name: "password_confirmation",
      placeholder: "Konfirmasi Password",
      outside: true,
    },
  ],
  defaultValues: {
    fullName: "",
    gender: null,
    phone: "",
    address: "",
    doctorId: null,
    email: "",
    password: "",
    password_confirmation: "",
  },
  submitButton: {
    type: "submit",
    label: "Tambah Akun",
  },
};

const perawatanForm = {
  assessment: {
    inputs: {
      // first: [
      //   {
      //     type: "text",
      //     name: "icd-10",
      //     placeholder: "Kode ICD-10",
      //     outside: true,
      //   },
      //   {
      //     type: "text",
      //     name: "diagnosa",
      //     placeholder: "Diagnosa ICD-10",
      //     outside: true,
      //     readOnly: true,
      //   },
      // ],
      second: [
        {
          type: "unit",
          name: "weight",
          placeholder: "BB",
          outside: true,
          unit: "Kg",
        },
        {
          type: "unit",
          name: "height",
          placeholder: "TB",
          outside: true,
          unit: "Cm",
        },
        {
          type: "unit",
          name: "temperature",
          placeholder: "Suhu",
          outside: true,
          unit: "°C",
        },
        {
          type: "unit",
          name: "bloodPressure",
          placeholder: "T. Darah",
          outside: true,
          unit: "MmHg",
        },
        {
          type: "unit",
          name: "pulse",
          placeholder: "Nadi",
          outside: true,
          unit: "/Menit",
        },
      ],
      third: [
        {
          inputs: [
            {
              type: "textarea",
              name: "subjective",
              placeholder: "Subjective",
              outside: true,
            },
            {
              type: "textarea",
              name: "objective",
              placeholder: "Objective",
              outside: true,
            },
          ],
        },
        {
          inputs: [
            {
              type: "textarea",
              name: "assessment",
              placeholder: "Assessment",
              outside: true,
            },
            {
              type: "textarea",
              name: "plan",
              placeholder: "Plan",
              outside: true,
            },
          ],
        },
      ],
    },
  },
  tindakan: {
    header: ["Nama Obat", "Kadaluarsa", "QTY", "Harga", "Total", "Tindakan"],
    inputs: [
      {
        type: "cart",
        name: "purchaseItems",
        readOnly: true,
      },
    ],
  },
  defaultValues: {
    // "icd-10": "",
    // diagnose: "",
    weight: "",
    height: "",
    temperature: "",
    bloodPressure: "",
    pulse: "",
    subjective: "",
    objective: "",
    assessment: "",
    plan: "",
  },
};

export {
  loginForm,
  registerForm,
  addPabrikForm,
  addKategoriForm,
  addObatForm,
  addPembelianForm,
  pickDoctorForm,
  addPatientForm,
  editKlinikForm,
  addAdministratorForm,
  addDoctorForm,
  addEmployeeForm,
  addDoctorAssistantForm,
  perawatanForm,
};
