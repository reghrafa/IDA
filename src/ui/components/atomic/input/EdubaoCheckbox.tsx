import React from "react";
import Checkbox_Rectangular_Faded from "../../../../assets/images/Checkbox_Rectangular_Faded"; // opacity: 0.5
import Checkbox_Rectangular_Filled from "../../../../assets/images/Checkbox_Rectangular_Filled";
import Checkbox_Rectangular from "../../../../assets/images/Checkbox_Rectangular";
import useTheme from "../../../../themes/useTheme";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
  View
} from "react-native";

export interface IEdubaoCheckbox {
  /**
   * Flag for checking the icon
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Disable checkbox
   * @default false
   */
  disabled?: boolean;
  /**
   * text-decoration: underline
   *
   * @default false
   */
  underline?: boolean;
  /**
   * Style of main container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * style of text
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Size of the text
   *
   * @default 16
   */
  textSize?: number;
  /**
   * Size of the checkbox
   *
   * @default 16
   */
  checkboxSize?: number;
  /**
   * Title of checkbox
   */
  text?: string;
  /**
   * Default checked color
   *
   * @default '#0D507A'
   */
  color?: string;
  /**
   * onPress function for container
   */
  onPress?: () => void;
}

const EdubaoCheckbox = (props: IEdubaoCheckbox) => {
  const theme = useTheme();
  const {
    onPress,
    disabled,
    textSize,
    checkboxSize,
    color,
    checked,
    textStyle,
    underline,
    text,
    containerStyle,
    ...rest
  } = props;
  const Component = disabled ? TouchableWithoutFeedback : TouchableOpacity;

  const renderCheckboxComponent = () => {
    if (disabled) {
      return <Checkbox_Rectangular_Faded />;
    }

    if (checked) {
      return <Checkbox_Rectangular_Filled />;
    }

    return <Checkbox_Rectangular />;
  };

  return (
    <Component onPress={!disabled ? onPress : () => {}}>
      <View
        style={[containerStyle, { flexDirection: "row", alignItems: "center" }]}
        {...rest}
      >
        <View
          style={{
            height: checkboxSize,
            width: checkboxSize,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {renderCheckboxComponent()}
        </View>
        <Text
          style={StyleSheet.flatten([
            {
              marginLeft: theme.grid.gridFactor(0.5),
              textDecorationLine: underline ? "underline" : "none",
              color: theme.colors.bluefont,
              fontFamily: "Nunito-Regular",
              fontSize: textSize,
              letterSpacing: 0,
              opacity: disabled ? 0.5 : 1
            },
            textStyle && textStyle
          ])}
        >
          {text}
        </Text>
      </View>
    </Component>
  );
};

EdubaoCheckbox.defaultProps = {
  textSize: 16,
  checkboxSize: 16,
  color: "#0D507A",
  underline: false,
  disabled: false,
  text: "",
  textStyle: null,
  containerStyle: null
};

export default EdubaoCheckbox;
