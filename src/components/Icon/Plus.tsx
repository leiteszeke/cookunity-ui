import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './Icon.types';

const Plus = ({ fill, height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Path
      d="M15.833 9.167h-5v-5a.833.833 0 10-1.666 0v5h-5a.833.833 0 100 1.666h5v5a.833.833 0 101.666 0v-5h5a.833.833 0 100-1.666z"
      fill={fill}
    />
  </Svg>
);

export default Plus;
