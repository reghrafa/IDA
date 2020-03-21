import { EdubaoThemeShadowItem } from "./EdubaoTheme";

export interface ITheme {
  theme?: IEdubaoTheme;
}
export interface IEdubaoTheme {
  colors: IEdubaoThemeColors;
  typography: IEdubaoThemeTypography;
  grid: IEdubaoThemeGrid;
  shadows: IEdubaoThemeShadow;
  modalButtons: any;
}
interface IEdubaoThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  selected: string;
  bluefont: string;
  grey: string;
  fontgrey: string;
  light: string;
  lighter: string;
  lightest: string;
  dark: string;
  darker: string;
  darkest: string;
}
interface IEdubaoThemeTypography {
  size: {
    tiniest9: number;
    tiny10: number;
    smallest12: number;
    smaller14: number;
    small16: number;
    normal18: number;
    large21: number;
    larger24: number;
    largest32: number;
  };
}
interface IEdubaoThemeGrid {
  default: number;
  gridFactor: (f: number) => number;
}
interface IEdubaoThemeShadow {
  default: EdubaoThemeShadowItem;
  shadow: (strength?: number) => EdubaoThemeShadowItem;
}
