import { createMaterialTopTabNavigator } from "react-navigation";
import FeedScreen from "../../../ui/screens/guide/feed/FeedScreen";
import GuideTabBar from "../../../ui/components/composite/navigationBars/GuideTabBar";
import {
  NAVIGATION_PATH_FEED,
  NAVIGATION_PATH_BOOKMARK,
  INav
} from "../../../Constants";
import BookmarkScreen from "../../../ui/screens/guide/bookmark/BookmarkScreen";

let nav: INav = {};
nav[NAVIGATION_PATH_FEED] = FeedScreen;
nav[NAVIGATION_PATH_BOOKMARK] = BookmarkScreen;

const FeedNavigator = createMaterialTopTabNavigator(nav, {
  initialRouteName: NAVIGATION_PATH_FEED,
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: GuideTabBar
});

export default FeedNavigator;
