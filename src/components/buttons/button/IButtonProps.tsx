import IBasicButtonProps from '../basicButton/IBasicButtonProps';
import {ViewStyle} from 'react-native';

export default interface IButtonProps extends IBasicButtonProps {
  children?: string;
  transparent?: boolean;
  inverted?: boolean;
  withBorder?: boolean;
  fontWeight?: 'regular' | 'bold';
  backgroundImage?: string;
  borderRadius?: number;
  center?: boolean;
  width?: number;
  fontSize?: number;
  inline?: boolean;
  style?: ViewStyle;
  noWidth?: boolean;
  noMargin?: boolean;
  textColor?: string;
  backgroundColor?: string;
}
