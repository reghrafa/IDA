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
  contentType: ContentType;
  title?: string;
  titleTK?: string;
  text?: string;
  textTK?: string;
  noMargin?: boolean;
  upperCard?: Renderable;
  leftSideCard?: Renderable;
  rightSideCard?: Renderable;
  customColor?: string;
  textColor?: Colorstrings;
  backgroundColor?: Colorstrings;
  shadow?: number;
  height?: number | string;
  small?: boolean;
  trimTitleToLength?: number;
  trimTextToLength?: number;
}

const EduCard = (props: IEduCardProps) => {
  const theme = useTheme();
  let titlecolor: Colorstrings = "primary";
  let textcolor: Colorstrings = "bluefont";
  if (props.textColor) {
    titlecolor = textcolor = props.textColor;
  }
  let upperCard = props.upperCard || null;
  let leftSideCard = props.leftSideCard || null;
  let rightSideCard = props.rightSideCard || null;

  const lowerCard = (
    <View style={{ padding: theme.grid.gridFactor(1) }}>
      <CardContentTypeLabel hasArrow contentType={props.contentType} />
      <EduText
        fontWeight="bold"
        color={titlecolor}
        size={props.small ? "small16" : "large21"}
        style={{
          paddingTop: theme.grid.gridFactor(1),
          marginBottom: theme.grid.gridFactor(1)
        }}
        translationKey={props.titleTK}
        numberOfLines={2}
      >
        {props.title}
      </EduText>
      <EduText
        color={textcolor}
        size={props.small ? "smallest12" : "small16"}
        translationKey={props.textTK}
        numberOfLines={3}
      >
        {props.text}
      </EduText>
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: props.customColor
          ? props.customColor
          : props.backgroundColor
          ? theme.colors[props.backgroundColor]
          : theme.colors.lightest,
        marginHorizontal: props.noMargin ? 0 : theme.grid.gridFactor(1),
        marginBottom: props.noMargin ? 0 : theme.grid.gridFactor(1),
        borderRadius: theme.grid.gridFactor(1),
        flexDirection: "row",
        ...(props.shadow ? theme.shadows.shadow(props.shadow) : {}),
        ...(props.height ? { height: props.height } : {})
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

export default EduCard;
