import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './Icon.types';

const RightArrow = ({ fill, height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Path
      d="M4.167 10.833h9.883l-3.025 3.634a.834.834 0 001.283 1.066l4.167-5a.99.99 0 00.075-.125c0-.041.042-.066.058-.108a.836.836 0 00.059-.3.835.835 0 00-.059-.3c0-.042-.041-.067-.058-.108a.984.984 0 00-.075-.125l-4.167-5a.834.834 0 00-1.283 1.066l3.025 3.634H4.167a.833.833 0 100 1.666z"
      fill={fill}
    />
  </Svg>
);

export default RightArrow;
