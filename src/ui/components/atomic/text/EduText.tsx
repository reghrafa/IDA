import React from "react";
import { Text, TextStyle, TextProperties } from "react-native";
import { Colorstrings, FontSizeStrings } from "../../../../themes/EdubaoTheme";
import { capitalize } from "../../../../helpers/basehelpers";
import I18n from "../../../../translations/I18n";
import useTheme from "../../../../themes/useTheme";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { observer } from "mobx-react";

interface IEduTextProps extends TextProperties {
  translationKey?: string;
  style?: TextStyle;
  children?: string;
  color?: Colorstrings;
  customColor?: string;
  size?: FontSizeStrings;
  fontWeight?: "bold" | "regular" | "semibold";
  lang?: string;
  interpolations?: {};
}

const EduText: React.FC<IEduTextProps> = ({
  translationKey,
  lang,
  interpolations,
  customColor,
  color: propColor,
  fontWeight,
  style: propStyle,
  children,
  size,
  ...rest
}) => {
  const theme = useTheme();
  const { rootStore } = useStore();

  const content = translationKey
    ? lang
      ? I18n.t(translationKey, {
          locale: lang,
          ...(interpolations ? interpolations : {})
        })
      : rootStore.settings.language
      ? I18n.t(translationKey, {
          locale: rootStore.settings.language,
          ...(interpolations ? interpolations : {})
        })
      : I18n.t(translationKey, { ...(interpolations ? interpolations : {}) })
    : children || "";

  const color = customColor || theme.colors[propColor || "lightest"];
  const fontSize = theme.typography.size[size || "normal18"];
  const fontFamily = fontWeight
    ? `Nunito-${capitalize(fontWeight)}`
    : "Nunito-Regular";
  const style: TextStyle = {
    flexShrink: 1,
    color,
    fontSize,
    fontFamily,
    ...propStyle
  };
  return (
    <Text style={style} {...rest}>
      {content}
    </Text>
  );
};

EduText.defaultProps = {
  lang: "",
  translationKey: "",
  interpolations: {},
  style: undefined,
  color: "lightest",
  customColor: "",
  size: "normal18",
  fontWeight: "regular"
};

export default observer(EduText);
