const BASE_URL = "http://localhost:3333/";

const AUTH_PREFIX = BASE_URL + "auth";
const REGIS_PREFIX = AUTH_PREFIX + "/register";
const FACTORY_PREFIX = BASE_URL + "drug-factory";
const DRUG_PREFIX = BASE_URL + "drug";
const DRUG_CATEGORY_PREFIX = DRUG_PREFIX + "/category";
const STOCK_PREFIX = BASE_URL + "stock";
const TRANSACTION_PREFIX = BASE_URL + "transaction";
const PURCHASE_PREFIX = TRANSACTION_PREFIX + "/purchase";
const PATIENT_PREFIX = BASE_URL + "patient";
const DOCTOR_PREFIX = BASE_URL + "doctor";
const QUEUE_PREFIX = BASE_URL + "queue";
const USER_PREFIX = BASE_URL + "user";

export const ENDPOINT = {
  login: AUTH_PREFIX + "/login/desktop",
  registerAdmin: REGIS_PREFIX + "/admin",
  logout: AUTH_PREFIX + "/logout",
  getFactories: FACTORY_PREFIX,
  addFactory: FACTORY_PREFIX + "/partnership",
  getCategories: DRUG_CATEGORY_PREFIX,
  getDrugs: DRUG_PREFIX,
  getStocks: STOCK_PREFIX,
  getPurchaseTransactions: PURCHASE_PREFIX,
  getPatients: PATIENT_PREFIX,
  getQueueingPatients: PATIENT_PREFIX + "/queue",
  getDoctors: DOCTOR_PREFIX,
  cancelQueue: QUEUE_PREFIX + "/cancel",
  getUserProfile: USER_PREFIX + "/profile",
};
