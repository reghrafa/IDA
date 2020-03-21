import { IEdubaoTheme } from "./IEdubaoTheme";

const DESIGN_GRID: number = 16;

export type Colorstrings =
  | "primary"
  | "secondary"
  | "tertiary"
  | "selected"
  | "bluefont"
  | "grey"
  | "fontgrey"
  | "light"
  | "lighter"
  | "lightest"
  | "dark"
  | "darker"
  | "darkest";
export type FontSizeStrings =
  | "tiniest9"
  | "tiny10"
  | "smallest12"
  | "smaller14"
  | "small16"
  | "normal18"
  | "large21"
  | "larger24"
  | "largest32";

export type EdubaoThemeShadowItem =
  | {}
  | {
      shadowColor: string;
      shadowOffset: {
        width: number;
        height: number;
      };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };

const getShadowWithStrength = (strength?: number): EdubaoThemeShadowItem => {
  let s = strength || 1;
  if (s < 1) return {};
  if (s > 24) {
    s = 24;
  }
  return {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: [
        1,
        1,
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        8,
        8,
        9,
        9,
        10,
        10,
        11,
        11,
        12
      ][s - 1]
    },
    shadowOpacity: Math.round(1.8 * s + 18) / 100,
    shadowRadius: Math.round((0.65326 * s + 0.25396) * 100) / 100,
    elevation: strength
  };
};

const theme: IEdubaoTheme = {
  colors: {
    primary: "#0D507A",
    secondary: "#7ED0FC",
    tertiary: "#B5173B",
    selected: "#7ED0FC",

    bluefont: "#1E3056",
    grey: "#b0c6d5",
    fontgrey: "#b1b1b1",

    light: "#F9FAFF",
    lighter: "",
    lightest: "#ffffff",
    dark: "",
    darker: "#363636",
    darkest: ""
  },
  typography: {
    //Sizes
    size: {
      tiniest9: 9,
      tiny10: 10,
      smallest12: 12,
      smaller14: 14,
      small16: 16,
      normal18: 18,
      large21: 21,
      larger24: 24,
      largest32: 32
    }
  },
  grid: {
    default: DESIGN_GRID,
    gridFactor: (f: number) => f * DESIGN_GRID
  },
  shadows: {
    default: getShadowWithStrength(5),
    shadow: getShadowWithStrength
  },
  modalButtons: {
    default: {
      backgroundColor: "#0D507A",
      height: 48,
      borderRadius: 16,
      width: "100%"
    },
    dismiss: { backgroundColor: "red" }
  }
};

export default theme;
