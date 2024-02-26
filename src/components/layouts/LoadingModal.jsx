import { loadingIcon } from "assets/animations";
import ModalContainer from "containers/ModalContainer";
import Lottie from "lottie-react";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "store/atom/pageState";

const LoadingModal = () => {
  const isLoading = useRecoilValue(isLoadingState);

  if (isLoading) {
    return (
      <ModalContainer styles="justify-center items-center">
        <Lottie animationData={loadingIcon} loop />
      </ModalContainer>
    );
  }

  return null;
};

export default LoadingModal;
