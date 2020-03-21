import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react";
import IDefaultModalProps from "./IDefaultModalProps";
import BaseModal from "../base/BaseModal";
import Text from "../../../atomic/text/EduText";
import Button from "../../../atomic/button/Button";
import useTheme from "../../../../../themes/useTheme";
import useUiStore from "../../../../../dataLayer/stores/hooks/UseUiStore";
import { invokeEventHandler } from "../../../../../helpers/ReactShortcuts";

const DefaultModal: React.FC<IDefaultModalProps> = ({
  modalKey,
  title,
  buttons,
  children
}) => {
  const theme = useTheme();
  const { modalStore } = useUiStore();

  return (
    <BaseModal modalKey={modalKey}>
      <View
        style={{
          borderRadius: theme.grid.gridFactor(1),
          backgroundColor: "white",
          padding: theme.grid.gridFactor(1.5),
          paddingBottom: theme.grid.gridFactor(2)
        }}
      >
        <Text color="primary" size="normal18">
          {title}
        </Text>
        {children}
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: theme.grid.gridFactor(1)
          }}
        >
          {buttons.map((x, i) => (
            <>
              <Button
                onPress={
                  x.dismissOnClick
                    ? (): void => {
                        modalStore.closeModal();
                        invokeEventHandler(x.onPress);
                      }
                    : x.onPress
                }
                style={theme.modalButtons[x.style]}
              >
                {x.title}
              </Button>
              {i === buttons.length - 1 ? null : (
                <View style={{ height: theme.grid.gridFactor(1) }} />
              )}
            </>
          ))}
        </View>
      </View>
    </BaseModal>
  );
};

export default observer(DefaultModal);
