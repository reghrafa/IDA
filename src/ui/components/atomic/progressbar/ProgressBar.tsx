import React from "react";
import { View, ViewStyle } from "react-native";
import {
  ColorToString,
  HEXToColor,
} from "../../../../helpers/colorHelpers";
import useTheme from "../../../../themes/useTheme";

export interface IProgressBarProps {
  customColor?: string;
  customBackgroundColor?: string;
  height?: number;
  customRadius?: number;
  progress: number;
  style?: ViewStyle;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  style,
  progress,
  height,
  customBackgroundColor,
  customColor,
  customRadius
}) => {
  const theme = useTheme();
  const s = style || {};
  const p =
    progress < 0 ? 0 : progress > 100 ? 100 : progress;

  return (
    <View
      style={{
        // flex: 1,
        height: height || theme.grid.gridFactor(1),
        borderRadius: customRadius || theme.grid.gridFactor(0.5),
        flexDirection: "row",
        backgroundColor: ColorToString(HEXToColor(customBackgroundColor || theme.colors.light), 0.33),
        ...s
      }}
    >
      <View
        style={{
          height: height || theme.grid.gridFactor(1),
          borderRadius: customRadius || theme.grid.gridFactor(0.5),
          flex: p,
          backgroundColor: ColorToString(HEXToColor(customColor || theme.colors.light))
        }}
      />
      <View style={{ flex: 100 - p }} />
    </View>
  );
};
export default ProgressBar;
