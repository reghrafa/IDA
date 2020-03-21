import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import CardContentTypeLabel from "./CardContentTypeLabel";
import useTheme from "../../../../themes/useTheme";
import {
  Renderable,
  ContentType
} from "../../../../types_interfaces/types/basetypes";
import { Colorstrings } from "../../../../themes/EdubaoTheme";

export interface IEduCardProps {
  contentType?: ContentType;
  title: string;
  text: string;
  noMargin?: boolean;
  upperCard?: Renderable;
  leftSideCard?: Renderable;
  rightSideCard?: Renderable;
  customColor?: string;
  textColor?: Colorstrings;
  backgroundColor?: Colorstrings;
  shadow?: number;
  height?: number | string;
}

const EduCardSmall: React.FC<IEduCardProps> = ({
  textColor,
  upperCard,
  leftSideCard,
  rightSideCard,
  contentType,
  text,
  title,
  backgroundColor,
  customColor,
  height,
  noMargin,
  shadow
}) => {
  const theme = useTheme();
  let titleColor: Colorstrings = "primary";
  if (textColor) {
    titleColor = textColor;
  }
  const lowerCard = (
    <View style={{ padding: theme.grid.gridFactor(1) }}>
      {contentType && (
        <CardContentTypeLabel
          iconSize={0.75}
          fontSize="tiniest9"
          hasArrow
          contentType={contentType}
        />
      )}
      <EduText
        fontWeight="bold"
        color={titleColor}
        size="small16"
        style={{
          paddingTop: theme.grid.gridFactor(0.5),
          marginBottom: theme.grid.gridFactor(0.5)
        }}
        numberOfLines={1}
      >
        {title}
      </EduText>
      <EduText
        color={textColor || "bluefont"}
        size="smallest12"
        style={{
          maxHeight: 48
        }}
        numberOfLines={2}
      >
        {text}
      </EduText>
    </View>
  );

  return (
    <View
      style={{
        borderRadius: theme.grid.gridFactor(1),
        marginHorizontal: noMargin ? 0 : theme.grid.gridFactor(1),
        marginBottom: noMargin ? 0 : theme.grid.gridFactor(1),
        flexDirection: "row",
        backgroundColor: customColor
          ? customColor
          : backgroundColor
          ? theme.colors[backgroundColor]
          : theme.colors.lightest,
        ...(shadow ? theme.shadows.shadow(shadow) : {}),
        ...(height ? { height: height } : {})
      }}
    >
      {leftSideCard}
      <View
        style={{
          flex: 1,
          flexGrow: 1
        }}
      >
        {upperCard}
        {lowerCard}
      </View>
      {rightSideCard}
    </View>
  );
};

export default EduCardSmall;
