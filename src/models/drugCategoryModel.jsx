import { useQuery } from "react-query";
import { getDrugCategories } from "services/drugCategory";

const useDrugCategoryModel = () => {
  const useGetDrugCategory = () => {
    return useQuery({ queryKey: ["getDrugCategories"], queryFn: () => getDrugCategories() });
  };

  return {
    useGetDrugCategory,
  };
};

export default useDrugCategoryModel;
