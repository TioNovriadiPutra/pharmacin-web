import PageDetailHeader from "components/layouts/PageDetailHeader";
import { PageSubHeader } from "components/layouts/PageSubHeader";
import PatientDetailBox from "components/layouts/PatientDetailBox";
import PerawatanAssessment from "components/layouts/PerawatanAssessment";
import { patientSubHeader } from "constants/header";
import Container from "containers/Container";
import ScrollContainer from "containers/ScrollContainer";
import useQueueController from "controllers/queueController";
import { unHashIdUrl } from "helpers/hash";
import usePerawatanForm from "hooks/usePerawatanForm";
import { useParams } from "react-router-dom";

const Perawatan = () => {
  const { id } = useParams();

  const { useQueryGetDoctorConsultingQueueDetail } = useQueueController();

  const { isLoading } = useQueryGetDoctorConsultingQueueDetail(unHashIdUrl(id));

  const { control, switchIndex } = usePerawatanForm();

  return (
    <Container>
      <PageDetailHeader title="Form Perawatan" type="submit" />

      <ScrollContainer styles="gap-3.5">
        <PatientDetailBox />

        <PageSubHeader subHeaderData={patientSubHeader} />

        {!isLoading ? (
          switchIndex === 0 ? (
            <PerawatanAssessment control={control} />
          ) : null
        ) : null}
      </ScrollContainer>
    </Container>
  );
};

export default Perawatan;
