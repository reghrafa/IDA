import { ViewStyle } from "react-native";
import FastImage, {
  FastImageSource,
  FastImageProperties
} from "react-native-fast-image";

export interface IEduImageProps extends FastImageProperties {
  subText?: string;
  noLightbox?: boolean;
  height?: number;
  style?: ViewStyle;
  source: FastImageSource;
  noMargin?: boolean;
  withMargin?:boolean;
  noCenteredText?: boolean;
  resizeMode?: FastImage.ResizeMode;
  onLBOpen?: () => void;
  onLBClose?: () => void;
}
