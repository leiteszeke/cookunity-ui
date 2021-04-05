import type { ViewStyle } from 'react-native';

export type ButtonProps = {
  disabled?: boolean;
  text: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  style?: ViewStyle;
  icon?: any;
  iconPosition?: ButtonIconPosition;
};

export enum ButtonIconPosition {
  Left = 'left',
  Right = 'right',
}

export enum ButtonVariant {
  Basic = 'basic',
  Outline = 'outline',
  Flat = 'flat',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
