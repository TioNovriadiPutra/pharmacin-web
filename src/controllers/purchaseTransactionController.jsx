import { addPembelianForm } from "constants/form";
import { invoiceHeader, kelolaPembelianHeader } from "constants/header";
import { formatCurrency } from "helpers/formatter";
import { hashIdUrl } from "helpers/hash";
import { showToast } from "helpers/toast";
import usePurchaseTransactionModel from "models/purchaseTransactionModel";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { getDrugFactoryDetail } from "services/drugFactory";
import { addPurchaseTransaction } from "services/purchaseTransaction";
import { validationErrorState } from "store/atom/formState";
import { isLoadingState } from "store/atom/pageState";

const usePurchaseTransactionController = () => {
  const nav = useNavigate();

  const {
    useGetPurchaseTransactions,
    useGetPurchaseFactories,
    useGetPurchaseTransactionDetail,
  } = usePurchaseTransactionModel();

  const useQueryPurchaseTransactions = () => {
    const { data, isLoading } = useGetPurchaseTransactions();

    const tableData = {
      header: [
        "No Invoice",
        "Nama Pabrik",
        "Tanggal",
        "Total Pembelian",
        "Tindakan",
      ],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: data.data.map((item) => {
          const data = [
            item.invoice_number,
            item.factory_name,
            item.created_at,
            formatCurrency(item.total_price),
          ];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "invoice",
                onClick: (id) => nav(`/pembelian/invoice/${hashIdUrl(id)}`),
              },
              {
                type: "delete",
              },
            ],
          };
        }),
      });

      Object.assign(kelolaPembelianHeader.functionData[0], {
        onClick: () => nav("/pembelian/tambah"),
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const useQueryGetPurchaseFactories = () => {
    const { data, isLoading } = useGetPurchaseFactories();

    if (!isLoading) {
      Object.assign(addPembelianForm.pembelian1.inputs[0], {
        items: data.data.map((item) => {
          return {
            label: item.factory_name,
            value: item.id,
          };
        }),
      });
    }

    return {
      isLoading,
    };
  };

  const useQueryGetPurchaseTransactionDetail = (id) => {
    const { data, isLoading, isError, error } =
      useGetPurchaseTransactionDetail(id);

    const tableData = {
      header: ["Nama Obat", "Kadaluarsa", "QTY", "Harga Beli", "Total"],
      table: [],
    };

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.error.message);
      } else {
        const headerData = [
          data.data.invoice_number,
          data.data.factory_name,
          data.data.transaction_date,
        ];

        Object.assign(invoiceHeader, {
          first: invoiceHeader.first.map((item, index) => {
            Object.assign(item, {
              value: headerData[index],
            });

            return item;
          }),
        });

        Object.assign(tableData, {
          table: data.data.shopping_carts.map((item) => {
            const data = [
              item.drug,
              item.expired,
              item.quantity,
              formatCurrency(item.purchase_price),
              formatCurrency(item.total_price),
            ];

            return {
              data,
            };
          }),
        });
      }
    }

    return {
      tableData,
      isLoading,
    };
  };

  const queryGetPurchaseDrugs = async (id) => {
    setRecoil(isLoadingState, true);

    await getDrugFactoryDetail(id)
      .then((response) => {
        if (response.data.drug_list === null) {
          showToast("failed", "Tidak ada obat yang terdaftar!");
        } else {
          Object.assign(addPembelianForm.pembelian3.temp.inputs[0], {
            items: response.data.drug_list.map((item) => {
              return {
                label: item.drug,
                value: item.id,
                extra: item.purchase_price,
              };
            }),
          });
        }
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  const addPurchaseMutation = useMutation(addPurchaseTransaction, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        showToast("failed", "Semua data harus diisi!");
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useQueryPurchaseTransactions,
    useQueryGetPurchaseFactories,
    useQueryGetPurchaseTransactionDetail,
    queryGetPurchaseDrugs,
    addPurchase: async (data) =>
      await addPurchaseMutation.mutateAsync({
        factoryId: data.factoryId ? data.factoryId.value : null,
        totalPrice: data.totalPrice,
        purchaseItems: data.purchaseItems.map((item) => {
          return {
            drugId: item.drugId ? item.drugId.value : null,
            totalPrice: item.totalPrice,
            expired: item.expired,
            quantity: item.quantity,
          };
        }),
      }),
  };
};

export default usePurchaseTransactionController;
