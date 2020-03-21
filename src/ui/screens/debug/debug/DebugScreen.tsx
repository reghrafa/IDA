import React from "react";
import { View } from "react-native";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import EduButton from "../../../components/atomic/button/EduButton";
import { NAVIGATION_PATH_FORM } from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

const DebugScreen = () => {
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  return (<View style={{ flex: 1 }}><EduButton onPress={() => {
    sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_FORM, {});
    navigate(NAVIGATION_PATH_FORM);
  }}>TO FORM</EduButton></View>);
};

export default DebugScreen;
