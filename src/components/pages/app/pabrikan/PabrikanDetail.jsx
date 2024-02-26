import PageDetailHeader from "components/layouts/PageDetailHeader";
import PageTable from "components/layouts/PageTable";
import DetailHeaderSkeleton from "components/skeleton/DetailHeaderSkeleton";
import TableSkeleton from "components/skeleton/TableSkeleton";
import Container from "containers/Container";
import useDrugFactoryController from "controllers/drugFactoryController";
import { unHashIdUrl } from "helpers/hash";
import { useParams } from "react-router-dom";

const PabrikanDetail = () => {
  const { id } = useParams();

  const { useQueryGetDrugFactoryDetail } = useDrugFactoryController();

  const { tableData, isLoading } = useQueryGetDrugFactoryDetail(unHashIdUrl(id));

  return (
    <Container>
      {isLoading ? <DetailHeaderSkeleton /> : <PageDetailHeader title={tableData.title} onDetail={() => tableData.onDetailModal(tableData.detailData)} />}

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default PabrikanDetail;
