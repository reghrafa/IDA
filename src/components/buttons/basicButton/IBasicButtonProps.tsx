import {ViewStyle} from 'react-native';

export default interface IBasicButtonProps {
  key?: number;
  children?: any;
  onPress?: () => void;
  style?: ViewStyle;
  feedbacktype?: 'opacity' | 'hightlight';
}
