import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";
import { Colorstrings } from "../../../../themes/EdubaoTheme";
import Check from "../../../../assets/images/Check";

export interface IListableListWithTitleProps {
  listable: Array<any>;
  title?: string;
  titleTK?: string;
  noMargin?: boolean;
  customColor?: string;
  textColor?: Colorstrings;
  listableBackgroundColor?: Colorstrings;
  listableTextColor?: Colorstrings;
  backgroundColor?: Colorstrings;
  height?: number | string;
  checkboxStyled?: boolean;
}

const ListableListWithTitle = (props: IListableListWithTitleProps) => {
  const theme = useTheme();
  let titleColor: Colorstrings = "primary";
  let textColor: Colorstrings = "bluefont";
  let listableBackgroundColor: Colorstrings = "bluefont";
  let listableTextColor: Colorstrings = "lightest";
  if (props.textColor) {
    titleColor = textColor = props.textColor;
  }
  if (props.listableTextColor) {
    listableTextColor = props.listableTextColor;
  }
  if (props.listableBackgroundColor) {
    listableBackgroundColor = props.listableBackgroundColor;
  }

  return (
    <View>
      <EduText
        style={{
          marginVertical: theme.grid.gridFactor(1)
        }}
        size="large21"
        color={titleColor}
        translationKey={props.titleTK}
      >
        {props.title}
      </EduText>
      {props.listable.map((e, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: "row",
              paddingVertical: theme.grid.gridFactor(0.5),
              alignItems: "flex-start",
              alignContent: "flex-start"
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors[listableBackgroundColor],
                borderRadius: 50,
                width: theme.grid.gridFactor(1),
                height: theme.grid.gridFactor(1),
                alignItems: "center",
                alignContent: "flex-start",
                justifyContent: "center"
              }}
            >
              {props.checkboxStyled ? (
                <Check color={theme.colors[listableTextColor]} />
              ) : (
                <EduText
                  size="smallest12"
                  style={{
                    textDecorationLine: "none"
                  }}
                  color={listableTextColor}
                >
                  {i + 1 + "."}
                </EduText>
              )}
            </View>

            <EduText
              color={textColor}
              size="small16"
              style={{
                textDecorationLine: "none",
                marginLeft: theme.grid.gridFactor(1)
              }}
            >
              {e}
            </EduText>
          </View>
        );
      })}
    </View>
  );
};

export default ListableListWithTitle;
