import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { IconProps } from './Icon.types';

const Refresh = ({ fill, height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.928 4.167h9.997c1.65 0 2.992 1.319 2.992 2.94v2.06a.833.833 0 11-1.667 0v-2.06c0-.701-.594-1.274-1.325-1.274H4.928l1.078 1.078a.834.834 0 01-1.178 1.178l-2.5-2.5a.832.832 0 010-1.178l2.5-2.5a.832.832 0 111.178 1.178L4.928 4.167zm9.066 7.744a.833.833 0 011.178 0l2.5 2.5a.832.832 0 010 1.178l-2.5 2.5a.831.831 0 01-1.178 0 .832.832 0 010-1.178l1.078-1.078H5.075c-1.65 0-2.992-1.319-2.992-2.94v-2.06a.833.833 0 111.667 0v2.06c0 .702.594 1.274 1.325 1.274h9.997l-1.078-1.078a.832.832 0 010-1.178z"
      fill={fill}
    />
  </Svg>
);

export default Refresh;
