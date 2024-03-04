import PageHeader from "components/layouts/PageHeader";
import { PageSubHeader } from "components/layouts/PageSubHeader";
import PageTable from "components/layouts/PageTable";
import PickDoctorModal from "components/layouts/PickDoctorModal";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { pendaftaranHeader, pendaftaranSubHeader } from "constants/header";
import Container from "containers/Container";
import usePatientController from "controllers/patientController";
import { useRecoilValue } from "recoil";
import { switchIndexState } from "store/atom/pageState";

const Pendaftaran = () => {
  const switchIndex = useRecoilValue(switchIndexState);

  const { useQueryGetPatients } = usePatientController();

  const { tableData, isLoading } = useQueryGetPatients();

  return (
    <Container>
      <PageHeader headerData={pendaftaranHeader} />

      <PageSubHeader subHeaderData={pendaftaranSubHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData[switchIndex]} />}

      <PickDoctorModal />
    </Container>
  );
};

export default Pendaftaran;
