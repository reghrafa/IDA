import { Colorstrings } from "../../../../themes/EdubaoTheme";

export default interface ISafeAreaWrapperProps {
  flex?: number;
  backgroundColor?: Colorstrings;
  top?: "always" | "never";
  bottom?: "always" | "never";
}
