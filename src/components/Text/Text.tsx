import React from 'react';
import { apply, classNames } from '../../styles';
import { Text as RNText } from 'react-native';
import {
  FontWeight,
  TextAlign,
  TextProps,
  TextSize,
  TextVariant,
} from './Text.types';
import { TextColor } from '../../Colors';

const Text = ({
  align,
  children,
  color = TextColor.black,
  style,
  uppercase,
  variant,
  size,
  weight = FontWeight.Regular,
  ...props
}: TextProps) => (
  <RNText
    {...props}
    style={apply(
      style,
      classNames({
        'familyGilroyExtraBold':
          variant === TextVariant.Heading || variant === TextVariant.Hero,
        'font15 line18':
          variant === TextVariant.Hero && size === TextSize.Hero1,
        'font12 line15':
          variant === TextVariant.Hero && size === TextSize.Hero2,
        'font9 line11':
          variant === TextVariant.Heading && size === TextSize.Heading1,
        'font6 line8':
          variant === TextVariant.Heading && size === TextSize.Heading2,
        'font5 line7':
          variant === TextVariant.Heading && size === TextSize.Heading3,
        'font4 line6':
          variant === TextVariant.Heading && size === TextSize.Heading4,
        'familyGilroySemiBold font5 line6': variant === TextVariant.Quote,
        'familyRobotoBold line3': variant === TextVariant.Caption,
        'font4 line5':
          variant === TextVariant.Paragraph && size === TextSize.Paragraph1,
        'familyRobotoRegular':
          variant === TextVariant.Paragraph && weight === FontWeight.Regular,
        'familyRobotoBold':
          variant === TextVariant.Paragraph && weight === FontWeight.Bold,
        'familyReinata font20 line22': variant === TextVariant.Chef,
        'alignLeft': align === TextAlign.Left,
        'alignCenter': align === TextAlign.Center,
        'alignRight': align === TextAlign.Right,
      }),
      { color },
      variant === TextVariant.Caption && { fontSize: 10 },
      variant === TextVariant.Paragraph &&
        size === TextSize.Paragraph2 && { fontSize: 14, lineHeight: 22 },
      uppercase && { textTransform: 'uppercase' }
    )}
  >
    {`${children}`}
  </RNText>
);

export default Text;
