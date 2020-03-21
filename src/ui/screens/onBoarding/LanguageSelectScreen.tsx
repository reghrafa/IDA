import React from "react";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import LanguageChange from "../../components/composite/languageChange/LanguageChange";
import { NAVIGATION_PATH_ONBOARDING } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const LanguageSelectScreen = () => {
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();

  return (
    <LanguageChange
      bottomButtonData={[
        {
          translationKey: "global.button.confirm",
          action: () => {
            if (rootStore.settings.language) {
              rootStore.getInitialData(rootStore.settings.language);
              sendNavigationEvent(
                routeName,
                params || {},
                NAVIGATION_PATH_ONBOARDING,
                {}
              );
              navigate(NAVIGATION_PATH_ONBOARDING);
            }
          }
        }
      ]}
      titleTK="onboarding.language.text"
    />
  );
};

export default observer(LanguageSelectScreen);
