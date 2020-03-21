import React from "react";
import { IButtonProps } from "./Button";
import { FontSizeStrings } from "../../../../themes/EdubaoTheme";

import { View, ViewStyle, TextStyle } from "react-native";

import Button from "./Button";
import EduText from "../text/EduText";
import useTheme from "../../../../themes/useTheme";

interface IEduButtonProps extends IButtonProps {
  translationKey?: string;
  interpolations?: object;
  children?: string;
  transparent?: boolean;
  inverted?: boolean;
  withBorder?: boolean;
  fontWeight?: "regular" | "bold";
  backgroundImage?: string;
  borderRadius?: number;
  center?: boolean;
  width?: number;
  fontSize?: FontSizeStrings;
  inline?: boolean;
  style?: ViewStyle;
  noWidth?: boolean;
  noMargin?: boolean;
  textColor?: string;
  backgroundColor?: string;
  lang?: string;
}

export const EduButton: React.FC<IEduButtonProps> = (
  props: IEduButtonProps
) => {
  const theme = useTheme();

  const color1 = theme.colors.lightest;
  const color2 = theme.colors.primary;

  let textColor = color1;
  let backgroundColor = color2;
  if (props.inverted) {
    textColor = color2;
    backgroundColor = color1;
  }
  if (props.transparent) {
    backgroundColor = "transparent";
  }

  if (props.textColor) {
    textColor = props.textColor;
  }
  if (props.backgroundColor) {
    backgroundColor = props.backgroundColor;
  }

  const borderColor = textColor;
  const borderWidth = props.withBorder ? 1 : 0;
  const borderRadius = props.borderRadius || theme.grid.gridFactor(1);
  const width = props.width || 240;
  const textFontWeight = props.fontWeight || "bold";
  const textFontSize = props.fontSize
    ? theme.typography.size[props.fontSize]
    : theme.typography.size.normal18;
  const textContent = props.children || "";

  const buttonStyle: ViewStyle = props.inline
    ? { ...props.style }
    : {
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: backgroundColor,
        paddingTop: theme.grid.gridFactor(2 / 3),
        paddingBottom: theme.grid.gridFactor(2 / 3),
        width: props.noWidth ? undefined : width,
        marginBottom: props.noMargin ? undefined : theme.grid.gridFactor(1),
        ...props.style
      };

  const textStyle: TextStyle = {
    ...(props.inline
      ? {
          color: theme.colors.bluefont
        }
      : {
          color: textColor,
          height: theme.grid.gridFactor(1.5),
          textAlignVertical: "center",
          textAlign: "center"
        }),
    fontSize: textFontSize
  };

  const btnComp = (
    <Button
      onPress={props.onPress}
      feedbacktype={props.feedbacktype}
      style={buttonStyle}
    >
      <EduText
        translationKey={props.translationKey}
        interpolations={props.interpolations}
        style={textStyle}
        fontWeight={props.fontWeight}
        lang={props.lang}
      >
        {textContent}
      </EduText>
    </Button>
  );

  if (props.center) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {btnComp}
      </View>
    );
  }
  return btnComp;
};

export default EduButton;
