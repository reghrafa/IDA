import React from "react";
import ReactNativeModal from "react-native-modal";
import { observer } from "mobx-react";
import IBaseModalProps from "./IBaseModalProps";
import useUiStore from "../../../../../dataLayer/stores/hooks/UseUiStore";

const BaseModal: React.FC<IBaseModalProps> = ({ modalKey, children }) => {
  const { modalStore } = useUiStore();
  return (
    <ReactNativeModal
      isVisible={modalStore.modalVisible(modalKey)}
      onBackButtonPress={modalStore.closeModal}
      onBackdropPress={modalStore.closeModal}
      animationIn="zoomIn"
    >
      {children}
    </ReactNativeModal>
  );
};

export default observer(BaseModal);
