import { NavigationState, NavigationScreenProp } from "react-navigation";

interface NavigationParams {
  text: string;
}
export type Navigation = NavigationScreenProp<
  NavigationState,
  NavigationParams
>;

export interface INavigationProps {
  navigation?: Navigation;
}
