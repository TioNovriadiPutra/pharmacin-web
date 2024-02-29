import CashierForm from "components/layouts/CashierForm";
import PageHeader from "components/layouts/PageHeader";
import { tambahPembelianHeader } from "constants/header";
import Container from "containers/Container";
import useCashierForm from "hooks/useCashierForm";

const TambahPembelian = () => {
  const { control, isLoading } = useCashierForm();

  return (
    <Container>
      <PageHeader headerData={tambahPembelianHeader} />

      <CashierForm control={control} isLoading={isLoading} />
    </Container>
  );
};

export default TambahPembelian;
