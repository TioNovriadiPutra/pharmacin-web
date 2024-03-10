import { queryClient } from "config/query";
import { addObatForm } from "constants/form";
import { formatCurrency } from "helpers/formatter";
import { showToast } from "helpers/toast";
import useDrugModel from "models/drugModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addDrug, deleteDrug, getDrugDetail, updateDrug } from "services/drug";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { deleteDataState, detailDataState, isLoadingState, showConfirmationModalState, showDetailModalState } from "store/atom/pageState";

const useDrugController = () => {
  const { useGetDrugs } = useDrugModel();

  // GET -Get Clinic drugs - Access : Admin,Administrator
  const useQueryGetDrugs = () => {
    const results = useGetDrugs();

    const isLoading = results.some((result) => result.isLoading);

    const tableData = {
      header: ["Nama Obat", "Nama Generik", "Kategori", "Rak", "Harga Jual", "Komposisi", "Tindakan"],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: results[0].data.data.map((item) => {
          const data = [item.drug, item.drug_generic_name, item.category_name, item.shelve, formatCurrency(item.selling_price), item.composition];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "info",
                onClick: (id) => queryGetDrugDetail(id),
              },
              {
                type: "edit",
                onClick: (id) => queryGetDrugUpdateForm(id),
              },
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(deleteDataState, {
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
          } else if (input.name === "unitId") {
            Object.assign(input, {
              items: results[3].data.data.map((item) => {
                return {
                  label: item.unit_name,
                  value: item.id,
                };
              }),
            });
          }

          return input;
        }),
        submitButton: {
          ...addObatForm.submitButton,
          onClick: (data) =>
            addDrugMutation.mutate({
              ...data,
              categoryId: data.categoryId ? data.categoryId.value : null,
              factoryId: data.factoryId ? data.factoryId.value : null,
              unitId: data.categoryId ? data.categoryId.value : null,
            }),
        },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  // GET - Get Drug Update Form Data - Access : Admin,Administrator
  const queryGetDrugUpdateForm = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addObatForm };

    await getDrugDetail(id)
      .then((response) => {
        Object.assign(formData, {
          title: "Edit Obat",
          defaultValues: {
            drug: response.data.drug,
            drugGenericName: response.data.drug_generic_name,
            unitId: response.data.unit,
            composition: response.data.composition,
            categoryId: response.data.drug_category,
            shelve: response.data.shelve,
            factoryId: response.data.drug_factory,
            purchasePrice: response.data.purchase_price,
            sellingPrice: response.data.selling_price,
          },
          submitButton: {
            ...formData.submitButton,
            label: "Edit Obat",
            onClick: (data) =>
              updateDrugMutation.mutate({
                id,
                data: {
                  ...data,
                  categoryId: data.categoryId ? data.categoryId.value : null,
                  factoryId: data.factoryId ? data.factoryId.value : null,
                  unitId: data.unitId ? data.unitId.value : null,
                },
              }),
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

  // GET - Get Clinic Drug Detail - Access : Admin,Administrator
  const queryGetDrugDetail = async (id) => {
    setRecoil(isLoadingState, true);

    await getDrugDetail(id)
      .then((response) => {
        const detailData = {
          title: "Informasi Obat",
          inputs: [
            {
              title: "ID",
              value: response.data.drug_number,
            },
            {
              title: "Nama Obat",
              value: response.data.drug,
            },
            {
              title: "Nama Generik",
              value: response.data.drug_generic_name || "-",
            },
            {
              title: "Satuan",
              value: response.data.unit_name,
            },
            {
              title: "Komposisi",
              value: response.data.composition,
            },
            {
              title: "Kategori",
              value: response.data.drug_category.label,
            },
            {
              title: "Rak",
              value: response.data.shelve || "-",
            },
            {
              title: "Pabrikan",
              value: response.data.drug_factory.label,
            },
            {
              title: "Harga Beli Pabrikan",
              value: formatCurrency(response.data.purchase_price),
            },
            {
              title: "Harga Jual",
              value: formatCurrency(response.data.selling_price),
            },
          ],
          footer: [
            {
              label: "Stock",
              value: response.data.total_stock,
              color: "bg-light-primary",
              textColor: "text-primary",
            },
          ],
        };

        setRecoil(showDetailModalState, true);
        setRecoil(detailDataState, detailData);
      })
      .catch((error) => {
        showToast("failed", error.error.message);
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  // POST - Add Clinic New Drug Data - Access : Admin,Administrator
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

  // PUT - Update Clinic Drug Data - Access : Admin,Administrator
  const updateDrugMutation = useMutation(updateDrug, {
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

  // DELETE - Delete Clinic Drug Data - Access : Admin,Administrator
  const deleteDrugMutation = useMutation(deleteDrug, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDrugs"] });
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
    useQueryGetDrugs,
  };
};

export default useDrugController;
