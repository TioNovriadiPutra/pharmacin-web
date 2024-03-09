import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { manajemenAdministratorHeader } from "constants/header";
import Container from "containers/Container";
import useUserController from "controllers/userController";

const Administrator = () => {
  const { useQueryGetAdministrators } = useUserController();

  const { tableData, isLoading } = useQueryGetAdministrators();

  return (
    <Container>
      <PageHeader headerData={manajemenAdministratorHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default Administrator;
