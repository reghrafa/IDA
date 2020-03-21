import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginNavigator from "../../navigations/app/sign_in_up/LoginNavigator";
import AppNavigator from "../../navigations/app/MainNavigator";
import DebugScreen from "../../ui/screens/debug/debug/DebugScreen";
import ComponentScreen from "../../ui/screens/debug/components/ComponentScreen";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { useStore } from "../../dataLayer/stores/hooks/useStore";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { sendNavigationEvent } from "../../helpers/analyticsEvents";

const AuthComp = () => {
  const { navigate } = useNavigation();
  const { rootStore } = useStore();
  const navState = useNavigationState();
  SplashScreen.hide();
  useEffect(() => {
    sendNavigationEvent(
      navState.routeName,
      navState.params || {},
      rootStore.settings.onboarded ? "App" : "Start",
      {}
    );
    navigate(rootStore.settings.onboarded ? "App" : "Start");
  });
  return null;
};

const AuthNavigator = createSwitchNavigator(
  {
    Start: LoginNavigator,
    App: AppNavigator,
    Debug: DebugScreen,
    Component: ComponentScreen,
    Auth: AuthComp
  },
  {
    initialRouteName: "Auth"
  }
);
export default createAppContainer(AuthNavigator);
