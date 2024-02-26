import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { kelolaObatHeader } from "constants/header";
import Container from "containers/Container";
import useDrugController from "controllers/drugController";

const KelolaObat = () => {
  const { useQueryGetDrugs } = useDrugController();

  const { tableData, isLoading } = useQueryGetDrugs();

  return (
    <Container>
      <PageHeader headerData={kelolaObatHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default KelolaObat;
