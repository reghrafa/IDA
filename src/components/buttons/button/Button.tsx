import React from 'react';
import IButtonProps from './IButtonProps';

import {View, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import EduText from '../text/EduText';
import {Colors} from '../../../theme/theme';

const Button = (props: IButtonProps) => {
  const color1: any = Colors.light;
  const color2: any = Colors.blue;

  let textColor = color1;
  let backgroundColor = color2;
  if (props.inverted) {
    textColor = color2;
    backgroundColor = color1;
  }
  if (props.transparent) {
    backgroundColor = 'transparent';
  }

  if (props.textColor) {
    textColor = props.textColor;
  }
  if (props.backgroundColor) {
    backgroundColor = props.backgroundColor;
  }

  const borderColor = textColor;
  const borderWidth = props.withBorder ? 1 : 0;
  const borderRadius = props.borderRadius || 8;
  const width = props.width || 240;
  const textFontWeight = props.fontWeight || 'bold';
  const textFontSize = props.fontSize || 18;
  const textContent = props.children || '';

  const style = StyleSheet.create({
    button: {props.inline
      ? {...props.style}
      : {
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderWidth,
          backgroundColor: backgroundColor,
          paddingTop: 0.666666,
          paddingBottom: 0.666666,
          width: props.noWidth ? undefined : width,
          marginBottom: props.noMargin ? undefined : 16,
          ...props.style,
        }
    },
    text: {...(props.inline
      ? {
          color: Colors.blue,
        }
      : {
          color: textColor,
          height: 24,
          textAlignVertical: 'center',
          textAlign: 'center',
        }),
    fontSize: textFontSize,
  }},
  });

  const btnComp = (
    <Button
      onPress={props.onPress}
      feedbacktype={props.feedbacktype}
      style={style.button}>
      <Text style={style.text} fontWeight={props.fontWeight}>
        {textContent}
      </Text>
    </Button>
  );

  if (props.center) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {btnComp}
      </View>
    );
  }
  return btnComp;
};

export default Button;
