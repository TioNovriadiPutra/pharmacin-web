import { useQuery } from "react-query";
import { getDrugFactories } from "services/drugFactory";

const usePurchaseTransactionModel = () => {
  const useGetPurchaseFactories = () => {
    return useQuery({ queryKey: ["getPurchaseFactories"], queryFn: () => getDrugFactories() });
  };

  return {
    useGetPurchaseFactories,
  };
};

export default usePurchaseTransactionModel;
