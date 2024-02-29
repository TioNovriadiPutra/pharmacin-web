import { queryClient } from "config/query";
import { addPabrikForm } from "constants/form";
import { formatCurrency } from "helpers/formatter";
import { hashIdUrl } from "helpers/hash";
import { showToast } from "helpers/toast";
import useDrugFactoryModel from "models/drugFactoryModel";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { addDrugFactory, deleteDrugFactory } from "services/drugFactory";
import {
  formModalDataState,
  showFormModalState,
  validationErrorState,
} from "store/atom/formState";
import {
  detailDataState,
  editDataState,
  isLoadingState,
  showConfirmationModalState,
  showDetailModalState,
} from "store/atom/pageState";

const useDrugFactoryController = () => {
  const { useGetDrugFactories, useGetDrugFactoryDetail } =
    useDrugFactoryModel();
  const nav = useNavigate();

  const useQueryGetDrugFactories = () => {
    const { data, isLoading } = useGetDrugFactories();

    const tableData = {
      header: ["Nama Pabrik", "Email", "Nomor Telepon", "Tindakan"],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: data.data.map((item) => {
          const data = [
            item.factory_name,
            item.factory_email,
            item.factory_phone,
          ];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(editDataState, {
                    onApprove: () => deleteDrugFactoryMutation.mutate(id),
                  });
                },
              },
            ],
            onDetail: (id) => {
              nav(`/pabrikan/${hashIdUrl(id)}`);
            },
          };
        }),
      });

      Object.assign(addPabrikForm, {
        submitButton: {
          ...addPabrikForm.submitButton,
          onClick: (data) => addDrugFactoryMutation.mutate(data),
        },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const useQueryGetDrugFactoryDetail = (id) => {
    const { data, isLoading } = useGetDrugFactoryDetail(id);

    const tableData = {
      header: [
        "Nama Obat",
        "Nama Generik",
        "Kategori",
        "Harga Beli",
        "Harga Jual",
        "Takaran",
        "Stock",
      ],
      backDest: "/pabrikan",
      onDetailModal: (data) => {
        setRecoil(showDetailModalState, true);
        setRecoil(detailDataState, data);
      },
    };

    if (!isLoading) {
      Object.assign(tableData, {
        title: data.data.factory_name,
        table: data.data.drug_list
          ? data.data.drug_list.map((item) => {
              const data = [
                item.drug,
                item.drug_generic_name || "-",
                item.category_name,
                formatCurrency(item.purchase_price),
                formatCurrency(item.selling_price),
                item.dose || "-",
                item.total_stock,
              ];

              return {
                id: item.id,
                data,
              };
            })
          : [],
        detailData: {
          title: "Informasi Pabrik",
          inputs: [
            {
              type: "text",
              title: "Nama Pabrik",
              value: data.data.factory_name,
            },
            {
              type: "text",
              title: "Email Pabrik",
              value: data.data.factory_email,
            },
            {
              type: "text",
              title: "Telepon Pabrik",
              value: data.data.factory_phone,
            },
          ],
          footer: [
            {
              label: "Jenis Obat",
              value: data.data.drug_list ? data.data.drug_list.length : 0,
              color: "bg-light-primary",
              textColor: "text-primary",
            },
          ],
        },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const addDrugFactoryMutation = useMutation(addDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getDrugFactories"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const deleteDrugFactoryMutation = useMutation(deleteDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDrugFactories"] });
    },
    onError: (error) => {
      if (error.error.status === 404) {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(editDataState, null);
      setRecoil(showConfirmationModalState, false);
    },
  });

  return {
    useQueryGetDrugFactories,
    useQueryGetDrugFactoryDetail,
  };
};

export default useDrugFactoryController;
