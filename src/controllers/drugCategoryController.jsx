import { queryClient } from "config/query";
import { addKategoriForm } from "constants/form";
import { showToast } from "helpers/toast";
import useDrugCategoryModel from "models/drugCategoryModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addDrugCategory, deleteDrugCategory, getDrugCategoryDetail, updateDrugCategory } from "services/drugCategory";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { deleteDataState, editDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";

const useDrugCategoryController = () => {
  const { useGetDrugCategory } = useDrugCategoryModel();

  const useQueryGetDrugCategories = () => {
    const { data, isLoading } = useGetDrugCategory();

    const tableData = {
      header: ["ID", "Kategori", "Tindakan"],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: data.data.map((item) => {
          const data = [item.category_number, item.category_name];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "edit",
                onClick: (id) => queryGetDrugCategoryDetail(id),
              },
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(deleteDataState, {
                    onApprove: () => deleteDrugCategoryMutation.mutate(id),
                  });
                },
              },
            ],
          };
        }),
      });

      Object.assign(addKategoriForm, {
        submitButton: { ...addKategoriForm.submitButton, onClick: (data) => addDrugCategoryMutation.mutate(data) },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const queryGetDrugCategoryDetail = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addKategoriForm };

    await getDrugCategoryDetail(id)
      .then((response) => {
        Object.assign(formData, {
          type: formData.type + "-edit",
          title: "Edit Kategori",
          defaultValues: {
            categoryName: response.data.category_name,
          },
          submitButton: {
            type: "submit",
            label: "Edit Kategori",
          },
        });

        setRecoil(showFormModalState, true);
        setRecoil(formModalDataState, formData);
        setRecoil(editDataState, {
          onApprove: (data) => updateDrugCategoryMutation.mutate({ id, data }),
        });
      })
      .catch((error) => {
        if (error.error.status === 404) {
          showToast("failed", error.error.message);
        }
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  const addDrugCategoryMutation = useMutation(addDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getDrugCategories"] });
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

  const updateDrugCategoryMutation = useMutation(updateDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      setRecoil(editDataState, null);
      queryClient.invalidateQueries({ queryKey: ["getDrugCategories"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else if (error.error.status === 404) {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const deleteDrugCategoryMutation = useMutation(deleteDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDrugCategories"] });
    },
    onError: (error) => {
      if (error.error.status === 404) {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(deleteDataState, null);
      setRecoil(showConfirmationModalState, false);
    },
  });

  return {
    useQueryGetDrugCategories,
  };
};

export default useDrugCategoryController;
