import { createStackNavigator } from "react-navigation";
import OnboardingScreen from "../../../ui/screens/onBoarding/OnboardingScreen";
import LanguageSelectScreen from "../../../ui/screens/onBoarding/LanguageSelectScreen";
import {
  NAVIGATION_PATH_LANGUAGE_SELECT,
  INav,
  NAVIGATION_PATH_ONBOARDING
} from "../../../Constants";

let nav: INav = {};
nav[NAVIGATION_PATH_LANGUAGE_SELECT] = LanguageSelectScreen;
nav[NAVIGATION_PATH_ONBOARDING] = OnboardingScreen;

const LoginNavigator = createStackNavigator(nav, {
  initialRouteName: NAVIGATION_PATH_LANGUAGE_SELECT,
  defaultNavigationOptions: {
    header: null
  }
});

export default LoginNavigator;
