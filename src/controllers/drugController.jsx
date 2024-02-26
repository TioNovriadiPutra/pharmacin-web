import { queryClient } from "config/query";
import { addObatForm } from "constants/form";
import { formatCurrency } from "helpers/formatter";
import { showToast } from "helpers/toast";
import useDrugModel from "models/drugModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addDrug, deleteDrug, getDrugDetail, updateDrug } from "services/drug";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { editDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";

const useDrugController = () => {
  const { useGetDrugs } = useDrugModel();

  const useQueryGetDrugs = () => {
    const results = useGetDrugs();

    const isLoading = results.some((result) => result.isLoading);

    const tableData = {
      header: ["Nama Obat", "Nama Generik", "Kategori", "Rak", "Harga Jual", "Takaran", "Tindakan"],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: results[0].data.data.map((item) => {
          const data = [item.drug, item.drug_generic_name, item.category_name, item.shelve, formatCurrency(item.selling_price), item.dose];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "edit",
                onClick: (id) => queryGetDrugUpdateForm(id),
              },
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(editDataState, {
                    onApprove: () => deleteDrugMutation.mutate(id),
                  });
                },
              },
            ],
          };
        }),
      });

      Object.assign(addObatForm, {
        inputs: addObatForm.inputs.map((input) => {
          if (input.name === "categoryId") {
            Object.assign(input, {
              items: results[1].data.data.map((item) => {
                return {
                  label: item.category_name,
                  value: item.id,
                };
              }),
            });
          } else if (input.name === "factoryId") {
            Object.assign(input, {
              items: results[2].data.data.map((item) => {
                return {
                  label: item.factory_name,
                  value: item.id,
                };
              }),
            });
          }

          return input;
        }),
        submitButton: { ...addObatForm.submitButton, onClick: (data) => addDrugMutation.mutate({ ...data, categoryId: data.categoryId.value, factoryId: data.factoryId.value }) },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const queryGetDrugUpdateForm = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addObatForm };

    await getDrugDetail(id)
      .then((response) => {
        Object.assign(formData, {
          type: formData.type + "-edit",
          title: "Edit Obat",
          defaultValues: {
            drug: response.data.drug,
            drugGenericName: response.data.drug_generic_name,
            dose: response.data.dose,
            categoryId: {
              label: response.data.drug_category.category_name,
              value: response.data.drug_category.id,
            },
            shelve: response.data.shelve,
            factoryId: {
              label: response.data.drug_factory.factory_name,
              value: response.data.drug_factory.id,
            },
            purchasePrice: response.data.purchase_price,
            sellingPrice: response.data.selling_price,
          },
        });

        setRecoil(showFormModalState, true);
        setRecoil(formModalDataState, formData);
        setRecoil(editDataState, {
          onApprove: (data) => updateDrugMutation.mutate({ id, data }),
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

  const addDrugMutation = useMutation(addDrug, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getDrugs"] });
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

  const updateDrugMutation = useMutation(updateDrug, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      setRecoil(editDataState, null);
      queryClient.invalidateQueries({ queryKey: ["getDrugs"] });
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

  const deleteDrugMutation = useMutation(deleteDrug, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDrugs"] });
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
    useQueryGetDrugs,
  };
};

export default useDrugController;
