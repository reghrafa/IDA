import React from "react";
import DefaultModal from "../defaultModal/DefaultModal";
import Text from "../../../atomic/text/EduText";
import useUiStore from "../../../../../dataLayer/stores/hooks/UseUiStore";

const GlossaryModal: React.FC = () => {
  const { modalStore } = useUiStore();

  const params = modalStore.getActiveParameters<any>();

  if (!params) {
    return null;
  }

  return (
    <DefaultModal
      modalKey="glossary"
      title="Bla"
      buttons={[
        {
          title: "Alles klar",
          style: "default",
          onPress: (): void => {
            console.log("Press");
          }
        }
      ]}
    >
      <Text color="primary" size="normal18">
        Lorem ipsum
      </Text>
    </DefaultModal>
  );
};

export default GlossaryModal;
