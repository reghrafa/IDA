import React from 'react';
import IBasicButtonProps from './IBasicButtonProps';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {View} from 'react-native';

const Button = (props: IBasicButtonProps) => {
  switch (props.feedbacktype) {
    case 'hightlight':
      return (
        <TouchableHighlight onPress={props.onPress}>
          <View style={props.style}>{props.children}</View>
        </TouchableHighlight>
      );
    case 'opacity':
      return (
        <TouchableOpacity onPress={props.onPress}>
          <View style={props.style}>{props.children}</View>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View style={props.style}>{props.children}</View>
        </TouchableWithoutFeedback>
      );
  }
};

export default Button;
