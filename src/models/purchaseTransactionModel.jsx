import { useQuery } from "react-query";
import { getDrugFactories } from "services/drugFactory";
import {
  getPurchaseTransactionDetail,
  getPurchaseTransactions,
} from "services/purchaseTransaction";

const usePurchaseTransactionModel = () => {
  const useGetPurchaseTransactions = () => {
    return useQuery({
      queryKey: ["getPurchaseTransactions"],
      queryFn: () => getPurchaseTransactions(),
    });
  };

  const useGetPurchaseFactories = () => {
    return useQuery({
      queryKey: ["getPurchaseFactories"],
      queryFn: () => getDrugFactories(),
    });
  };

  const useGetPurchaseTransactionDetail = (id) => {
    return useQuery({
      queryKey: ["getPurchaseTransactionDetail"],
      queryFn: () => getPurchaseTransactionDetail(id),
    });
  };

  return {
    useGetPurchaseTransactions,
    useGetPurchaseFactories,
    useGetPurchaseTransactionDetail,
  };
};

export default usePurchaseTransactionModel;
