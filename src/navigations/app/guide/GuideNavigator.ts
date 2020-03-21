import { createStackNavigator } from "react-navigation";
import FeedNavigator from "./FeedNavigator";
import TodoScreen from "../../../ui/screens/todo/TodoScreen";
import TodoDetailScreen from "../../../ui/screens/todo/TodoDetailScreen";
import CategoriesScreen from "../../../ui/screens/guide/categories/CategoriesScreen";
import CategoriesDetailScreen from "../../../ui/screens/guide/categories/CategoriesDetailScreen";
import ArticleScreen from "../../../ui/screens/guide/articles/ArticleScreen";
import ProfileScreen from "../../../ui/screens/profile/ProfileScreen";
import ImprintScreen from "../../../ui/screens/profile/ImprintScreen";
import LanguageChangeScreen from "../../../ui/screens/profile/LanguageChangeScreen";
import {
  INav,
  NAVIGATION_PATH_TODO,
  NAVIGATION_PATH_TODO_DETAIL,
  NAVIGATION_PATH_CATEGORIES,
  NAVIGATION_PATH_CATEGORIES_DETAIL,
  NAVIGATION_PATH_ARTICLE,
  NAVIGATION_PATH_PROFILE,
  NAVIGATION_PATH_IMPRINT,
  NAVIGATION_PATH_CHANGE_LANGUAGE,
  NAVIGATION_PATH_FEED_NAVIGATOR,
  NAVIGATION_PATH_FORM
} from "../../../Constants";
import { INavigationProps } from "../../NavigationTypes";
import FormScreen from "../../../ui/screens/form/FormScreen";

let nav: INav = {};
nav[NAVIGATION_PATH_FEED_NAVIGATOR] = FeedNavigator;
nav[NAVIGATION_PATH_TODO] = TodoScreen;
nav[NAVIGATION_PATH_TODO_DETAIL] = TodoDetailScreen;
nav[NAVIGATION_PATH_CATEGORIES] = CategoriesScreen;
nav[NAVIGATION_PATH_CATEGORIES_DETAIL] = CategoriesDetailScreen;
nav[NAVIGATION_PATH_ARTICLE] = ArticleScreen;
nav[NAVIGATION_PATH_PROFILE] = ProfileScreen;
nav[NAVIGATION_PATH_IMPRINT] = ImprintScreen;
nav[NAVIGATION_PATH_CHANGE_LANGUAGE] = LanguageChangeScreen;
nav[NAVIGATION_PATH_FORM] = FormScreen;

const GuideNavigator = createStackNavigator(nav, {
  initialRouteName: NAVIGATION_PATH_FEED_NAVIGATOR,
  headerMode: "none",
  mode: "card",
  navigationOptions: { tabBarVisible: false }
});

GuideNavigator.navigationOptions = ({ navigation }: INavigationProps) => {
  if (!navigation) return { tabBarVisible: true };
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default GuideNavigator;
