import React from "react";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";
import LogoHeader from "../../components/composite/headers/LogoHeader";
import EduText from "../../components/atomic/text/EduText";
import EduButton from "../../components/atomic/button/EduButton";
import { View } from "react-native";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import I18n from "i18n-js";
import { NAVIGATION_PATH_ONBOARDING } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

/**
 *
 * NOT USED!!
 *
 */

const ObjectiveSelectScreen = () => {
  const { navigate, goBack } = useNavigation();
  const { routeName, params } = useNavigationState();
  return (
    <ScreenWrapper>
      <LogoHeader />
      <EduText
        size="large21"
        color="primary"
        style={{ margin: 32, height: 34 }}
      >
        ObjectiveSelectScreen
      </EduText>
      <View style={{ flex: 1 }} />
      <EduButton center onPress={() => {
        sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_ONBOARDING, {});
        navigate(NAVIGATION_PATH_ONBOARDING);
      }}>
        Select Objective
      </EduButton>
      <EduButton center onPress={() => {
        sendNavigationEvent(routeName, params || {}, "BACK", {});
        goBack();
      }}>
        {I18n.t("global.clickable.back")}
      </EduButton>
    </ScreenWrapper>
  );
};

export default ObjectiveSelectScreen;
