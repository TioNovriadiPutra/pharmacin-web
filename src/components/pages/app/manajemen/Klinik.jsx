import Detail from "components/fragments/Detail";
import PageHeader from "components/layouts/PageHeader";
import ManajemenSkeleton from "components/skeleton/ManajemenSkeleton";
import { manajemenKlinikHeader } from "constants/header";
import Container from "containers/Container";
import useClinicController from "controllers/clinicController";

const Klinik = () => {
  const { useQueryGetClinicDetail } = useClinicController();

  const { detailData, isLoading } = useQueryGetClinicDetail();

  return (
    <Container>
      <PageHeader headerData={manajemenKlinikHeader} />

      {isLoading ? (
        <ManajemenSkeleton />
      ) : (
        <div className="bg-white rounded-md flex-1 p-6">
          <div className="flex-1 w-6/12">
            <Detail detailData={detailData} withFooter={false} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Klinik;
