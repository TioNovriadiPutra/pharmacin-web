import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { manajemenDokterHeader } from "constants/header";
import Container from "containers/Container";
import useDoctorController from "controllers/doctorController";

const Dokter = () => {
  const { useQueryGetDoctors } = useDoctorController();

  const { tableData, isLoading } = useQueryGetDoctors();

  return (
    <Container>
      <PageHeader headerData={manajemenDokterHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default Dokter;
