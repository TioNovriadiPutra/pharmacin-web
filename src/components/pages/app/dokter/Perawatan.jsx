import PageDetailHeader from "components/layouts/PageDetailHeader";
import Container from "containers/Container";
import { useParams } from "react-router-dom";

const Perawatan = () => {
  const { id } = useParams();

  return (
    <Container>
      <PageDetailHeader title="Form Perawatan" />
    </Container>
  );
};

export default Perawatan;
