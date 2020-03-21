import { Colorstrings } from "../../../../themes/EdubaoTheme";
import { ContentType } from "../../../../types_interfaces/types/basetypes";
import { IHeaderIcon } from "../../../components/composite/headers/StickyHeader";

export default interface IStickyHeaderAfterScrollingDownProps {
  title?: string;
  titleTK?: string;
  bookmark?: IHeaderIcon;
  link?: IHeaderIcon;
  color?: Colorstrings;
  contentBackgroundColor?: Colorstrings;
  category?: ContentType;
  SafeAreaFlex?: number;
  SafeAreaBackgroundColor?: Colorstrings;
  SafeAreaTop?: "always" | "never";
  SafeAreaBottom?: "always" | "never";
  iconColor?: Colorstrings;
  imageUri?: string;
  backgroundColor?: Colorstrings;
  noImageBackgroundColor?: Colorstrings;
  titleColor?: Colorstrings;
  stickyHeaderTitleColor?: Colorstrings;
  optionalStickyHeaderSections?: ((opacity?: number) => JSX.Element)[];
  no30percentOverlay?: boolean;
  alternativeHeaderSection?: (title?: string, titleTK?: string) => JSX.Element;
  imageBackgroundColor?: Colorstrings;
}
