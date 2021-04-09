import type { SvgProps } from 'react-native-svg';

export type DonutProps = SvgProps & {
  radius: number;
  percentage: number | string;
  text?: string;
};
