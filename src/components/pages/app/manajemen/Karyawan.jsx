import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { manajemenKaryawanHeader } from "constants/header";
import Container from "containers/Container";
import useEmployeeController from "controllers/employeeController";

const Karyawan = () => {
  const { useQueryGetEmployees } = useEmployeeController();

  const { tableData, isLoading } = useQueryGetEmployees();

  return (
    <Container>
      <PageHeader headerData={manajemenKaryawanHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default Karyawan;
