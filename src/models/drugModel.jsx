import { useQueries } from "react-query";
import { getDrugs } from "services/drug";
import { getDrugCategories } from "services/drugCategory";
import { getDrugFactories } from "services/drugFactory";

const useDrugModel = () => {
  const useGetDrugs = () => {
    return useQueries([
      { queryKey: ["getDrugs"], queryFn: () => getDrugs() },
      { queryKey: ["getDrugCategoriesDropdown"], queryFn: () => getDrugCategories() },
      { queryKey: ["getDrugFactoriesDropdown"], queryFn: () => getDrugFactories() },
    ]);
  };

  return {
    useGetDrugs,
  };
};

export default useDrugModel;
