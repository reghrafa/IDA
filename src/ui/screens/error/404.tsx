import React from "react";
import { View } from "react-native";
import EduText from "../../components/atomic/text/EduText";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import EduButton from "../../components/atomic/button/EduButton";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

// TODO: Do we need translations?!

const P404 = () => {
  const { navigate, goBack } = useNavigation();
  const { routeName, params } = useNavigationState();
  return (
    <View>
      <EduText color="bluefont" translationKey="error.notyetfinished.label" />
      <EduButton onPress={goBack} translationKey="global.clickable.back" />
      <EduButton onPress={() => {
        sendNavigationEvent(routeName, params || {}, "Start", {});
        navigate("Start");
      }} translationKey="error.backtostart.label" />
    </View>
  );
};

export default P404;
