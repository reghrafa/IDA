import { Colorstrings } from "../../../../themes/EdubaoTheme";

export default interface IFixHeaderProps {
  title?: string;
  backgroundColor?: Colorstrings;
  headlineOpacity?: number;
  children: JSX.Element;
  iconColor?: Colorstrings;
  SafeAreaFlex?: number;
  SafeAreaBackgroundColor?: Colorstrings;
  SafeAreaTop?: "always" | "never";
  SafeAreaBottom?: "always" | "never";
  translationKey?: string;
  color?: Colorstrings;
  noBookmark?: boolean;
  noLink?: boolean;
  opacity?: number;
  noViewWrapper?: boolean;
}
