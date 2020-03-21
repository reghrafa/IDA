import React from "react";
import { View } from "react-native";
import useTheme from "../../../../themes/useTheme";
import EduTextInput from "./EduTextInput";

export interface IEduSearchInput {
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
}

const EduSearchInput = (props: IEduSearchInput) => {
  const theme = useTheme();
  const placeholder = props.placeholder || "Search";

  return (
    <View
      style={{
        marginHorizontal: theme.grid.gridFactor(2),
        marginBottom: theme.grid.gridFactor(1),
        marginTop: theme.grid.gridFactor(0.5)
      }}
    >
      <EduTextInput
        style={{
          paddingHorizontal: theme.grid.gridFactor(1),
          paddingVertical: theme.grid.gridFactor(5 / 16),
          backgroundColor: theme.colors.lightest,
          color: theme.colors.primary,
          height: theme.grid.gridFactor(2),
          borderRadius: theme.grid.gridFactor(1)
        }}
        placeholderTextColor="#8f98ab"
        placeholder={placeholder}
        onChange={props.onChange}
        value={props.value}
        noMargin
      />
    </View>
  );
};

export default EduSearchInput;
