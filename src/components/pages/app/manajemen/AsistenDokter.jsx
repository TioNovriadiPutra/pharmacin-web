import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { manajemenAsistenDokterHeader } from "constants/header";
import Container from "containers/Container";
import useDoctorAssistantController from "controllers/doctorAssistantController";

const AsistenDokter = () => {
  const { useQueryGetDoctorAssistants } = useDoctorAssistantController();

  const { tableData, isLoading } = useQueryGetDoctorAssistants();

  return (
    <Container>
      <PageHeader headerData={manajemenAsistenDokterHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default AsistenDokter;
