import InvoiceHeader from "components/layouts/InvoiceHeader";
import InvoiceTable from "components/layouts/InvoiceTable";
import PageDetailHeader from "components/layouts/PageDetailHeader";
import PageTable from "components/layouts/PageTable";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { invoiceHeader } from "constants/header";
import Container from "containers/Container";
import usePurchaseTransactionController from "controllers/purchaseTransactionController";
import { unHashIdUrl } from "helpers/hash";
import React from "react";
import { useParams } from "react-router-dom";

const InvoicePembelian = () => {
  const { id } = useParams();

  const { useQueryGetPurchaseTransactionDetail } =
    usePurchaseTransactionController();

  const { tableData, isLoading } = useQueryGetPurchaseTransactionDetail(
    unHashIdUrl(id)
  );

  return (
    <Container>
      <PageDetailHeader title="Invoice Pembelian" />

      <InvoiceHeader headerData={invoiceHeader} />

      {isLoading ? <TableSkeleton /> : <InvoiceTable tableData={tableData} />}
    </Container>
  );
};

export default InvoicePembelian;
