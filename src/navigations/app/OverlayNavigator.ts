import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../../ui/screens/profile/ProfileScreen";
import {
  INav,
  NAVIGATION_PATH_PROFILE_OVERLAY
} from "../../Constants";

let nav: INav = {};
nav[NAVIGATION_PATH_PROFILE_OVERLAY] = ProfileScreen;

const OverlayNavigator = createStackNavigator(nav, {
  headerMode: "none",
  initialRouteName: NAVIGATION_PATH_PROFILE_OVERLAY
});

export default OverlayNavigator;
