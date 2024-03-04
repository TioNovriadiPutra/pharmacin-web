import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { kelolaPembelianHeader } from "constants/header";
import Container from "containers/Container";
import usePurchaseTransactionController from "controllers/purchaseTransactionController";

const KelolaPembelian = () => {
  const { useQueryPurchaseTransactions } = usePurchaseTransactionController();

  const { tableData, isLoading } = useQueryPurchaseTransactions();

  return (
    <Container>
      <PageHeader headerData={kelolaPembelianHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default KelolaPembelian;
