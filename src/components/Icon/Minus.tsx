import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './Icon.types';

const Minus = ({ fill, height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Path
      d="M10.833 9.167h5a.833.833 0 110 1.666h-5-6.666a.833.833 0 110-1.666h5 1.666z"
      fill={fill}
    />
  </Svg>
);

export default Minus;
