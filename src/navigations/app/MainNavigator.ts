import {
  createBottomTabNavigator,
  NavigationRouteConfigMap,
  BottomTabNavigatorConfig
} from "react-navigation";
import GuideNavigator from "./guide/GuideNavigator";
import OfferScreen from "../../ui/screens/offer/OfferScreen";
import MainTabBar from "../../ui/components/composite/navigationBars/MainTabBar";
import TabBarIcon from "../../ui/components/composite/navigationBars/TabBarIcon";
import PremiumNavigator from "./service/PremiumNavigator";
import {
  INav,
  NAVIGATION_PATH_GUIDE_NAVIGATOR,
  NAVIGATION_PATH_PREMIUM_NAVIGATOR,
  NAVIGATION_PATH_OFFERS
} from "../../Constants";

let nav: INav = {};
nav[NAVIGATION_PATH_GUIDE_NAVIGATOR] = GuideNavigator;
nav[NAVIGATION_PATH_PREMIUM_NAVIGATOR] = PremiumNavigator;
nav[NAVIGATION_PATH_OFFERS] = OfferScreen;

export default createBottomTabNavigator(nav, {
  tabBarComponent: MainTabBar,
  defaultNavigationOptions: {
    tabBarIcon: TabBarIcon
  }
});
