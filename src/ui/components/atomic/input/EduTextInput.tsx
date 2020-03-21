import React from "react";
import EduText from "../text/EduText";
import { View, TextInput, TextStyle } from "react-native";
import useTheme from "../../../../themes/useTheme";
import i18n from "../../../../translations/I18n";
import { capitalize } from "../../../../helpers/basehelpers";
import { Colorstrings } from "../../../../themes/EdubaoTheme";

export type TextContentType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode";

export interface IEduTextInput {
  placeholderTK?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  labelTK?: string;
  label?: string;
  password?: boolean;
  textContentType?: TextContentType;
  noMargin?: boolean;
  height?: number;
  multiline?: boolean;
  style?: TextStyle;
  fontWeight?: "bold" | "regular" | "semibold";
  placeholderTextColor?: Colorstrings;
  textColor?: Colorstrings;
  backgroundColor?: Colorstrings;
  labelColor?: Colorstrings;
}

const EduTextInput: React.FC<IEduTextInput> = ({
  onChange,
  fontWeight,
  height,
  label,
  labelTK,
  multiline,
  noMargin,
  password,
  placeholder,
  placeholderTK,
  placeholderTextColor,
  style,
  textColor,
  backgroundColor,
  labelColor,
  textContentType,
  value
}) => {
  const theme = useTheme();
  const fontFamily = fontWeight
    ? `Nunito-${capitalize(fontWeight)}`
    : "Nunito-Regular";

  const textStyle = style || {
    paddingTop: theme.grid.gridFactor(0.8125),
    paddingBottom: theme.grid.gridFactor(0.8125),
    paddingLeft: theme.grid.gridFactor(1),
    paddingRight: theme.grid.gridFactor(1),
    borderRadius: theme.grid.gridFactor(1)
  };

  return (
    <View
      style={{
        marginHorizontal: noMargin ? 0 : theme.grid.gridFactor(2),
        marginBottom: noMargin ? 0 : theme.grid.gridFactor(30 / 16)
      }}
    >
      {(labelTK || label) && (
        <EduText
          color={labelColor || "primary"}
          size="tiny10"
          style={{
            height: theme.grid.gridFactor(14 / 16),
            marginBottom: theme.grid.gridFactor(4 / 16),
            marginLeft: theme.grid.gridFactor(1)
          }}
          translationKey={labelTK}
        >
          {label}
        </EduText>
      )}
      <TextInput
        style={{
          backgroundColor: theme.colors[backgroundColor || "primary"],
          color: theme.colors[textColor || "lightest"],
          height: height || 48,
          fontSize: theme.typography.size.small16,
          fontFamily: fontFamily,
          ...(multiline ? { textAlignVertical: "top" } : {}),
          ...textStyle
        }}
        textContentType={textContentType || "none"}
        placeholder={placeholderTK ? i18n.t(placeholderTK) : placeholder || ""}
        placeholderTextColor={
          placeholderTextColor && theme.colors[placeholderTextColor]
        }
        onChangeText={onChange}
        value={value}
        secureTextEntry={password}
        multiline={multiline}
      />
    </View>
  );
};

export default EduTextInput;
