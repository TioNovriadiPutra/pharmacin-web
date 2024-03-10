import { queryClient } from "config/query";
import { addKategoriForm } from "constants/form";
import { showToast } from "helpers/toast";
import useDrugCategoryModel from "models/drugCategoryModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addDrugCategory, deleteDrugCategory, getDrugCategoryDetail, updateDrugCategory } from "services/drugCategory";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";

const useDrugCategoryController = () => {
  const { useGetDrugCategory } = useDrugCategoryModel();

  // GET - Get Clinic Drug Categories - Access : Admin,Administrator
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
                onClick: (id) => queryGetDrugCategoryUpdateForm(id),
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

  // GET - Drug Category Update Form Data - Access : Admin,Administrator
  const queryGetDrugCategoryUpdateForm = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addKategoriForm };

    await getDrugCategoryDetail(id)
      .then((response) => {
        Object.assign(formData, {
          title: "Edit Kategori",
          defaultValues: {
            categoryName: response.data.category_name,
          },
          submitButton: {
            ...formData.submitButton,
            label: "Edit Kategori",
            onClick: (data) => updateDrugCategoryMutation.mutate({ id, data }),
          },
        });

        setRecoil(showFormModalState, true);
        setRecoil(formModalDataState, formData);
      })
      .catch((error) => {
        showToast("failed", error.error.message);
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  // POST - Add Clinic New Drug Category - Access : Admin,Administrator
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
      } else {
        showToast("failed", error.error.message);
        setRecoil(formModalDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // PUT - Update Clinic Drug Category Data - Access : Admin,Administrator
  const updateDrugCategoryMutation = useMutation(updateDrugCategory, {
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
      } else {
        showToast("failed", error.error.message);
        setRecoil(formModalDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // DELETE - Delete Clinic Drug Category Data - Access : Admin,Administrator
  const deleteDrugCategoryMutation = useMutation(deleteDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDrugCategories"] });
    },
    onError: (error) => {
      showToast("failed", error.error.message);
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
