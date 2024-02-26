import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { pabrikanHeader } from "constants/header";
import Container from "containers/Container";
import useDrugFactoryController from "controllers/drugFactoryController";

const Pabrikan = () => {
  const { useQueryGetDrugFactories } = useDrugFactoryController();

  const { tableData, isLoading } = useQueryGetDrugFactories();

  return (
    <Container>
      <PageHeader headerData={pabrikanHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default Pabrikan;
