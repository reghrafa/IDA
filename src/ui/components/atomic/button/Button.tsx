import React from "react";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ViewStyle
} from "react-native";

export interface IButtonProps {
  key?: number;
  children?: any;
  onPress?: () => void;
  style?: ViewStyle;
  feedbacktype?: "opacity" | "hightlight";
}

const Button = (props: IButtonProps) => {
  switch (props.feedbacktype) {
    case "hightlight":
      return (
        <TouchableHighlight onPress={props.onPress}>
          <View style={props.style}>{props.children}</View>
        </TouchableHighlight>
      );
    case "opacity":
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
