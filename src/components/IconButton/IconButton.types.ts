import type { ViewStyle } from 'react-native';

export type IconButtonProps = {
  disabled?: boolean;
  onPress: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  style?: ViewStyle;
  icon?: any;
};

export enum IconButtonVariant {
  Basic = 'basic',
  Outline = 'outline',
}

export enum IconButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
