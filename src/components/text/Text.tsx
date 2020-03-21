import React from 'react';
import ITextProps from './ITextProps';
import {Text, StyleSheet} from 'react-native';

const TextComp: React.FC<ITextProps> = ({children, color}) => {
  const style = StyleSheet.create({
    text: {
      color: color ? color.HEX : '#242424',
    },
  });
  return <Text style={style.text}>{children}</Text>;
};

export default TextComp;
