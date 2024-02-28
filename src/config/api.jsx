const BASE_URL = "http://localhost:3333/";

const AUTH_PREFIX = BASE_URL + "auth";
const REGIS_PREFIX = AUTH_PREFIX + "/register";
const FACTORY_PREFIX = BASE_URL + "drug-factory";
const DRUG_PREFIX = BASE_URL + "drug";
const DRUG_CATEGORY_PREFIX = DRUG_PREFIX + "/category";
const STOCK_PREFIX = BASE_URL + "stock";

export const ENDPOINT = {
  login: AUTH_PREFIX + "/login",
  registerAdmin: REGIS_PREFIX + "/admin",
  getFactories: FACTORY_PREFIX,
  addFactory: FACTORY_PREFIX + "/partnership",
  getCategories: DRUG_CATEGORY_PREFIX,
  getDrugs: DRUG_PREFIX,
  getStocks: STOCK_PREFIX,
};
