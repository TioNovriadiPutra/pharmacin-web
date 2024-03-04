import { useQuery } from "react-query";
import { getDrugFactories } from "services/drugFactory";
import { getPurchaseTransactions } from "services/purchaseTransaction";

const usePurchaseTransactionModel = () => {
  const useGetPurchaseTransactions = () => {
    return useQuery({ queryKey: ["getPurchaseTransactions"], queryFn: () => getPurchaseTransactions() });
  };

  const useGetPurchaseFactories = () => {
    return useQuery({ queryKey: ["getPurchaseFactories"], queryFn: () => getDrugFactories() });
  };

  return {
    useGetPurchaseTransactions,
    useGetPurchaseFactories,
  };
};

export default usePurchaseTransactionModel;
