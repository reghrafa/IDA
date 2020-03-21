import React, { useState } from "react";
import LogoHeader from "../../components/composite/headers/LogoHeader";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";

import ImageBanking from "../../../assets/images/Illustrations/01_Onboarding/Onboarding_Banking";
import ImageInsurance from "../../../assets/images/Illustrations/01_Onboarding/Onboarding_Insurance";
import ImageStudyGuide from "../../../assets/images/Illustrations/01_Onboarding/Onboarding_StudyGuide";

import OnboardingButtons from "../../components/composite/onboarding/OnboardingButtons";
import EduCarousel, {
  ICarouselData
} from "../../components/composite/slider/eduCarousel/EduCarousel";

import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { observer } from "mobx-react";
import { NAVIGATION_PATH_FEED } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

export const static_data_onboarding: ICarouselData[] = [
  {
    titleTK: "onboarding.studyguide.title",
    textTK: "onboarding.studyguide.text",
    imageSvg: ImageStudyGuide
  },
  {
    titleTK: "onboarding.banking.title",
    textTK: "onboarding.banking.text",
    imageSvg: ImageBanking
  },
  {
    titleTK: "onboarding.insurance.title",
    textTK: "onboarding.insurance.text",
    imageSvg: ImageInsurance
  }
];

const OnboardingScreen = () => {
  const [state, setState] = useState({ currentIndex: 0 });
  const navigation = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  return (
    <ScreenWrapper>
      <LogoHeader />
      <EduCarousel
        currentIndex={state.currentIndex}
        data={static_data_onboarding}
        onIndexChange={index => setState({ currentIndex: index })}
        noTouch
      />
      <OnboardingButtons
        onLast={static_data_onboarding.length === state.currentIndex + 1}
        jumpToNext={() => setState(s => ({ currentIndex: s.currentIndex + 1 }))}
        jumpToLast={() =>
          setState({ currentIndex: static_data_onboarding.length - 1 })
        }
        jumpToApp={() => {
          rootStore.settings.setOnboarded();
          sendNavigationEvent(routeName, params || {}, "App", {});
          navigation.navigate("App");
        }}
        jumpToLogin={() => {
          rootStore.settings.setOnboarded();
          rootStore.user.signIn({
            successAction: () => {
              sendNavigationEvent(
                routeName,
                params || {},
                NAVIGATION_PATH_FEED,
                {}
              );
              navigation.navigate(NAVIGATION_PATH_FEED);
            },
            failAction: () => {}
          });
        }}
      />
    </ScreenWrapper>
  );
};

export default observer(OnboardingScreen);
