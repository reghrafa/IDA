import React from 'react';
import Text from '../text/Text';
import {View, TextInput, TextStyle, StyleSheet} from 'react-native';
import Color from '../../helper/Color';
import {Colors} from '../../theme/theme';

export type TextContentType =
  | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode';

export interface IEduTextInput {
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  label?: string;
  password?: boolean;
  textContentType?: TextContentType;
  noMargin?: boolean;
  height?: number;
  multiline?: boolean;
  textstyle?: TextStyle;
  fontWeight?: 'bold' | 'regular' | 'semibold';
  placeholderTextColor?: Color;
  textColor?: Color;
  backgroundColor?: Color;
  labelColor?: Color;
}

const EduTextInput: React.FC<IEduTextInput> = ({
  onChange,
  height,
  label,
  multiline,
  noMargin,
  password,
  placeholder,
  placeholderTextColor,
  textstyle,
  textColor,
  backgroundColor,
  labelColor,
  textContentType,
  value,
}) => {
  const textStyle = textstyle || {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
  };

  const style = StyleSheet.create({
    label: {
      height: 14,
      marginBottom: 4,
      marginLeft: 16,
    },
    wrapper: {
      marginHorizontal: noMargin ? 0 : 32,
      marginBottom: noMargin ? 0 : 30,
    },
    textInput: {
      backgroundColor: backgroundColor?.HEX || Colors.light.HEX,
      color: textColor?.HEX || Colors.light.HEX,
      height: height || 48,
      ...(multiline ? {textAlignVertical: 'top'} : {}),
      ...textStyle,
    },
  });

  return (
    <View style={style.wrapper}>
      {label && (
        <View style={style.label}>
          <Text color={labelColor || Color.fromHEX('#ff00ff')}>{label}</Text>
        </View>
      )}
      <TextInput
        style={style.textInput}
        textContentType={textContentType || 'none'}
        placeholder={placeholder || ''}
        placeholderTextColor={placeholderTextColor?.HEX || undefined}
        onChangeText={onChange}
        value={value}
        secureTextEntry={password}
        multiline={multiline}
      />
    </View>
  );
};

export default EduTextInput;
