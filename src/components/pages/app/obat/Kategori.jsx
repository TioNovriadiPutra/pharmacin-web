import PageHeader from "components/layouts/PageHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { kategoriHeader } from "constants/header";
import Container from "containers/Container";
import useDrugCategoryController from "controllers/drugCategoryController";

const Kategori = () => {
  const { useQueryGetDrugCategories } = useDrugCategoryController();

  const { tableData, isLoading } = useQueryGetDrugCategories();

  return (
    <Container>
      <PageHeader headerData={kategoriHeader} />

      {isLoading ? <TableSkeleton /> : <PageTable tableData={tableData} />}
    </Container>
  );
};

export default Kategori;
