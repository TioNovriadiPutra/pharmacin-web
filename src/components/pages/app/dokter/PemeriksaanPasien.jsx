import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { pemeriksaanHeader } from "constants/header";
import Container from "containers/Container";
import useQueueController from "controllers/queueController";

const PemeriksaanPasien = () => {
  const { useQueryGetDoctorConsultingQueues } = useQueueController();

  const { tableData, isLoading } = useQueryGetDoctorConsultingQueues();

  return (
    <Container>
      <PageHeader headerData={pemeriksaanHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default PemeriksaanPasien;
