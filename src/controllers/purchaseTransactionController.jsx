import { addPembelianForm } from "constants/form";
import { showToast } from "helpers/toast";
import usePurchaseTransactionModel from "models/purchaseTransactionModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { getDrugFactoryDetail } from "services/drugFactory";
import { addPurchaseTransaction } from "services/purchaseTransaction";
import { validationErrorState } from "store/atom/formState";
import { isLoadingState } from "store/atom/pageState";

const usePurchaseTransactionController = () => {
  const { useGetPurchaseFactories } = usePurchaseTransactionModel();

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
    useQueryGetPurchaseFactories,
    queryGetPurchaseDrugs,
    addPurchase: (data) => addPurchaseMutation.mutate(data),
  };
};

export default usePurchaseTransactionController;
