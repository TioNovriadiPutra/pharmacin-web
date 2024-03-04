import { queryClient } from "config/query";
import { showToast } from "helpers/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { cancelQueue } from "services/queue";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";

const useQueueController = () => {
  const cancelQueueMutation = useMutation(cancelQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getQueueingPatients"] });
      queryClient.invalidateQueries({ queryKey: ["getPatients"] });
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
    cancelQueueMutation,
  };
};

export default useQueueController;
