import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { DonutProps } from './Donut.types';
import { apply, C } from '../../styles';
import { GrayColor } from '../../Colors';
import { PrimaryColor } from 'cookunity-ui';
import Text, { FontWeight, TextAlign, TextSize, TextVariant } from '../Text';
import { View } from 'react-native';

const Donut = ({ radius, percentage, text }: DonutProps) => {
  const strokeWidth = 4;
  const perimeter = 2 * Math.PI * radius;
  const strokeDashOffset = perimeter - (perimeter * Number(percentage)) / 100;
  const diameter = radius * 2;
  const x = diameter + strokeWidth * 2;
  const y = diameter + strokeWidth * 2;
  const height = diameter;
  const width = diameter;
  const cx = radius + strokeWidth;
  const cy = radius + strokeWidth;

  return (
    <View
      style={{
        height,
        width,
      }}
    >
      <Svg
        viewBox={`0 0 ${x} ${y}`}
        style={apply({
          overflow: 'visible',
          transform: [{ rotateZ: '-90deg' }],
          height,
          width,
        })}
      >
        <Circle cx={cx} cy={cy} r={radius} fill="transparent" />
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="transparent"
          stroke={GrayColor.medium}
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="transparent"
          stroke={PrimaryColor.green}
          strokeWidth={strokeWidth}
          strokeDasharray={perimeter}
          strokeDashoffset={strokeDashOffset}
        />
      </Svg>

      {radius >= 38 && (
        <View
          style={apply(C.absolute, C.justifyCenter, C.itemsCenter, {
            height,
            width,
          })}
        >
          <Text
            align={TextAlign.Center}
            variant={TextVariant.Heading}
            size={TextSize.Heading3}
          >
            {`${percentage}%`}
          </Text>
          {text && (
            <Text
              align={TextAlign.Center}
              variant={TextVariant.Paragraph}
              size={TextSize.Paragraph2}
              weight={FontWeight.Regular}
            >
              {text}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default Donut;
