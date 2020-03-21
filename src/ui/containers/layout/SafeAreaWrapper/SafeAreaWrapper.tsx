import React from "react";
import { SafeAreaView } from "react-navigation";
import ISafeAreaWrapperProps from "./ISafeAreaWrapperProps";
import { StatusBar } from "react-native";
import useTheme from "../../../../themes/useTheme";

const SafeAreaWrapper: React.FC<ISafeAreaWrapperProps> = ({
  children,
  flex,
  backgroundColor,
  top,
  bottom
}) => {
  const theme = useTheme();
  const sTop = top ? top : "always";
  const sBottom = bottom ? bottom : "never";
  return (
    <SafeAreaView
      style={{
        flex: flex,
        backgroundColor: theme.colors[backgroundColor || "primary"]
      }}
      forceInset={{ top: sTop, bottom: sBottom }}
    >
      <React.Fragment>
        <StatusBar
          backgroundColor={theme.colors[backgroundColor || "primary"]}
        />
        {children}
      </React.Fragment>
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
