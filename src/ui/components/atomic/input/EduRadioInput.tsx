import React from "react";
import { View, ViewStyle, TouchableWithoutFeedback } from "react-native";
import useTheme from "../../../../themes/useTheme";
import EduText from "../text/EduText";
import Checkbox_Circular_Faded from "../../../../assets/images/Checkbox_Circular_Faded";
import Checkbox_Circular_Filled from "../../../../assets/images/Checkbox_Circular_Filled";
import Checkbox_Circular from "../../../../assets/images/Checkbox_Circular";

interface IRadioButton {
  key?: number;
  labelTK?: string;
  label?: string;
  onPress?: () => void;
  selected: boolean;
  style?: ViewStyle;
  disabled?: boolean;
}

// I removed the touchable radio button component because the radiobutton is almost always touchable. And if not we can just omit the onPress
const RadioButton = (props: IRadioButton) => {
  const theme = useTheme();
  const { disabled, selected, onPress } = props;
  const renderRadioComponent = () => {
    if (disabled) {
      return <Checkbox_Circular_Faded />;
    }

    if (selected) {
      return <Checkbox_Circular_Filled />;
    }

    return <Checkbox_Circular />;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        {renderRadioComponent()}
        <View style={{ marginLeft: theme.grid.gridFactor(0.5) }}>
          {props.labelTK && (
            <EduText
              style={{
                opacity: disabled ? 0.5 : 1
              }}
              color="bluefont"
              translationKey={props.labelTK}
            />
          )}
          {props.label && !props.labelTK && (
            <EduText
              style={{
                opacity: disabled ? 0.5 : 1
              }}
              color="bluefont"
            >
              {props.label}
            </EduText>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;
