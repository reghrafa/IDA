import { LayoutChangeEvent } from 'react-native';

export default interface IStickyHeaderListProps{
  header: (opacity: number) => JSX.Element;
  children: (onLayout: (e: LayoutChangeEvent) => void) => JSX.Element | JSX.Element[];
  backgroundLayer: JSX.Element;
}