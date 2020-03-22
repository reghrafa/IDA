export default interface ITallButtonProps {
  translationKey?: string;
  children?: string;
  onPress?: () => void;
  backgroundImage?: string;
  icon?: 'point' | 'info' | null;
  selected?: boolean;
}
