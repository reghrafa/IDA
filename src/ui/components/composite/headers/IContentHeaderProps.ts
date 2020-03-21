import { ContentType } from "../../../../types_interfaces/types/basetypes";
import { Colorstrings } from "../../../../themes/EdubaoTheme";

export interface IContentHeaderProps {
  title: string;
  contentType?: ContentType;
  translationKey?: string;
  iconColor?: string;
  color?: Colorstrings;
  noBookmark?: boolean;
  noLink?: boolean;
  noIcons?: boolean;
  alternativeHeaderSection?: (title?: string, titleTK?: string) => JSX.Element;
}
