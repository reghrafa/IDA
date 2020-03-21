import { IEdubaoTheme } from "../../../../../themes/EdubaoTheme";

export default interface IModalButton {
  title: string;
  noTranslation?: boolean;
  onPress?: () => void;
  style: keyof IEdubaoTheme["modalButtons"];
  dismissOnClick?: boolean;
}
