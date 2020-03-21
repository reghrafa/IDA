import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import { useNavigation } from "react-navigation-hooks";
import useTheme from "../../../../themes/useTheme";
import { TouchableOpacity } from "react-native";
import BackArrow from "../../../../assets/images/BackArrow";
import { Colorstrings } from "../../../../themes/EdubaoTheme";

export interface IHeaderIcon {
  icon: (iconColor?: Colorstrings) => JSX.Element;
  onPress: () => void;
}

export interface IStickyHeaderProps {
  title?: string;
  translationKey?: string;
  iconColor?: Colorstrings;
  color?: Colorstrings;
  bookmark?: IHeaderIcon;
  link?: IHeaderIcon;
  backgroundColor?: Colorstrings;
  opacity?: number;
  marginHorizontal?: number;
  optionalSections?: ((opacity?: number) => JSX.Element)[];
}

const StickyHeader: React.FC<IStickyHeaderProps> = ({
  title,
  translationKey,
  iconColor,
  color,
  bookmark,
  link,
  backgroundColor,
  opacity,
  marginHorizontal,
  optionalSections
}) => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: "row",
          height: theme.grid.gridFactor(3),
          alignItems: "center",
          marginLeft:
            (marginHorizontal ? marginHorizontal : theme.grid.gridFactor(1)) -
            theme.grid.gridFactor(1),
          marginRight:
            (marginHorizontal ? marginHorizontal : theme.grid.gridFactor(1)) -
            theme.grid.gridFactor(0.5),
          backgroundColor: backgroundColor
            ? theme.colors[backgroundColor]
            : "transparent"
        }}
      >
        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            padding: theme.grid.gridFactor(1)
          }}
        >
          <BackArrow
            color={theme.colors[iconColor || "lightest"]}
            width={theme.grid.gridFactor(1)}
            height={theme.grid.gridFactor(1)}
          />
        </TouchableOpacity>
        <EduText
          style={{
            opacity: opacity,
            margin: theme.grid.gridFactor(1)
          }}
          translationKey={translationKey}
          size="smaller14"
          fontWeight="bold"
          color={color || "lightest"}
          numberOfLines={1}
        >
          {title}
        </EduText>
        {optionalSections ? (
          optionalSections.map(e => e(opacity))
        ) : (
          <View style={{ flex: 1 }} />
        )}
        {link && (
          <TouchableOpacity
            onPress={link.onPress}
            style={{
              paddingVertical: theme.grid.gridFactor(1),
              paddingHorizontal: theme.grid.gridFactor(0.5)
            }}
          >
            {link.icon(iconColor)}
          </TouchableOpacity>
        )}
        {bookmark && (
          <TouchableOpacity
            onPress={bookmark.onPress}
            style={{
              paddingVertical: theme.grid.gridFactor(1),
              paddingHorizontal: theme.grid.gridFactor(0.5)
            }}
          >
            {bookmark.icon(iconColor)}
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

export default StickyHeader;
