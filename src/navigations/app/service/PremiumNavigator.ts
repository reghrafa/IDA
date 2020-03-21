import { createStackNavigator } from "react-navigation";
import PremiumScreen from "../../../ui/screens/service/PremiumScreen";
import ServicesScreen from "../../../ui/screens/service/ServicesScreen";
import ServicesDetailScreen from "../../../ui/screens/service/ServicesDetailScreen";
import {
  INav,
  NAVIGATION_PATH_PREMIUM,
  NAVIGATION_PATH_SERVICES_OVERVIEW,
  NAVIGATION_PATH_SERVICES_DETAIL,
  NAVIGATION_PATH_PDF
} from "../../../Constants";
import PdfViewerScreen from "../../../ui/screens/generic/pdfViewer/PdfViewerScreen";
import { INavigationProps } from "../../NavigationTypes";

let nav: INav = {};
nav[NAVIGATION_PATH_PREMIUM] = PremiumScreen;
nav[NAVIGATION_PATH_SERVICES_OVERVIEW] = ServicesScreen;
nav[NAVIGATION_PATH_SERVICES_DETAIL] = ServicesDetailScreen;
nav[NAVIGATION_PATH_PDF] = PdfViewerScreen;

const PremiumNavigator = createStackNavigator(nav, {
  initialRouteName: NAVIGATION_PATH_PREMIUM,
  headerMode: "none",
  mode: "card",
  navigationOptions: { tabBarVisible: false }
});

PremiumNavigator.navigationOptions = ({ navigation }: INavigationProps) => {
  if (!navigation) return { tabBarVisible: true };
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default PremiumNavigator;
