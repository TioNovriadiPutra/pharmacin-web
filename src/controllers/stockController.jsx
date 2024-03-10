import { formatCurrency } from "helpers/formatter";
import useStockModel from "models/stockModel";

const useStockController = () => {
  const { useGetStocks } = useStockModel();

  // GET - Get Clinic Drug Stocks Data - Access : Admin,Administrator
  const useQueryGetStocks = () => {
    const { data, isLoading } = useGetStocks();

    const tableData = [
      {
        header: ["Nama Obat", "Nama Pabrik", "Kategori", "Harga Beli", "Harga Jual", "Stock"],
        table: [],
      },
      {
        header: ["Nama Obat", "Nama Pabrik", "Batch ID", "Kadaluarsa", "Stock Beli", "Terjual", "Stock"],
        table: [],
      },
    ];

    if (!isLoading) {
      Object.assign(tableData[0], {
        table: data.data.perItem.map((item) => {
          const data = [item.drug, item.factory_name, item.category_name, formatCurrency(item.purchase_price), formatCurrency(item.selling_price), item.total_stock];

          return {
            id: item.id,
            data,
          };
        }),
      });

      Object.assign(tableData[1], {
        table: data.data.perBatch.map((item) => {
          const data = [item.drug, item.factory_name, item.batch_number, item.expired, item.total_stock, item.sold_stock, item.active_stock];

          return {
            id: item.id,
            data,
          };
        }),
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  return {
    useQueryGetStocks,
  };
};

export default useStockController;
