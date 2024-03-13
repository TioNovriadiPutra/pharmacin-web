import { addPembelianForm } from "constants/form";
import { tambahPembelianHeader } from "constants/header";
import usePurchaseTransactionController from "controllers/purchaseTransactionController";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const useCashierForm = () => {
  const { useQueryGetPurchaseFactories, queryGetPurchaseDrugs, addPurchase } =
    usePurchaseTransactionController();

  const { control, getValues, watch, handleSubmit, setValue, reset } = useForm({
    defaultValues: addPembelianForm.defaultValues,
  });

  const { isLoading } = useQueryGetPurchaseFactories();

  const factoryId = watch("factoryId");

  useEffect(() => {
    Object.assign(tambahPembelianHeader.functionData[0], {
      onClick: handleSubmit(async (data) => {
        const result = await addPurchase(data);

        if (result) {
          reset(addPembelianForm.defaultValues);
        }
      }),
    });
  }, []);

  useEffect(() => {
    if (factoryId) {
      queryGetPurchaseDrugs(getValues("factoryId.value"));
    }
  }, [factoryId]);

  return {
    control,
    isLoading,
    setValue,
  };
};

export default useCashierForm;
