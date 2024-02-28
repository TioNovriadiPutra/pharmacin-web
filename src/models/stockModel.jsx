import { useQuery } from "react-query";
import { getStocks } from "services/stock";

const useStockModel = () => {
  const useGetStocks = () => {
    return useQuery({ queryKey: ["getStocks"], queryFn: () => getStocks() });
  };

  return {
    useGetStocks,
  };
};

export default useStockModel;
