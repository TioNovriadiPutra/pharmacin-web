import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { stockHeader } from "constants/header";
import Container from "containers/Container";
import useStockController from "controllers/stockController";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "store/atom/pageState";

const Stock = () => {
  const switchIndex = useRecoilValue(switchIndexState);

  const { useQueryGetStocks } = useStockController();

  const { tableData, isLoading } = useQueryGetStocks();

  return (
    <Container>
      <PageHeader headerData={stockHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData[switchIndex]} />}
    </Container>
  );
};

export default Stock;
