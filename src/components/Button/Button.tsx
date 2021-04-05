import { C, apply, classNames } from '../../styles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  ButtonIconPosition,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './Button.types';
import { PrimaryColor } from '../../Colors';

const Button = ({
  disabled,
  text,
  onPress,
  icon: Icon,
  iconPosition = ButtonIconPosition.Left,
  variant = ButtonVariant.Basic,
  size = ButtonSize.Medium,
  style,
}: ButtonProps) => {
  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      style={apply(
        style,
        classNames('radius6 row itemsCenter justifyCenter borderMinimum', {
          'h12': size === ButtonSize.Large,
          'h10': size === ButtonSize.Medium,
          'h8': size === ButtonSize.Small,
          'bgPrimaryBlack borderPrimaryBlack':
            variant === ButtonVariant.Basic && !disabled,
          'bgGrayMedium borderGrayMedium':
            variant === ButtonVariant.Basic && disabled,
          'bgPrimaryWhite borderPrimaryBlack':
            variant === ButtonVariant.Outline && !disabled,
          'bgPrimaryWhite borderGrayMedium':
            variant === ButtonVariant.Outline && disabled,
          'bgTransparent borderTransparent': variant === ButtonVariant.Flat,
          'px8': size === ButtonSize.Large || size === ButtonSize.Medium,
          'px6': size === ButtonSize.Small,
        })
      )}
      onPress={handlePress}
    >
      {iconPosition === ButtonIconPosition.Left && Icon && (
        <View style={C.mrDozen}>
          <Icon
            fill={
              variant === ButtonVariant.Basic
                ? PrimaryColor.white
                : PrimaryColor.black
            }
          />
        </View>
      )}
      <Text
        style={classNames('familyGilroyExtraBold', {
          textPrimaryWhite: variant === ButtonVariant.Basic,
          textPrimaryBlack:
            (variant === ButtonVariant.Outline ||
              variant === ButtonVariant.Flat) &&
            !disabled,
          textGrayMedium:
            (variant === ButtonVariant.Outline ||
              variant === ButtonVariant.Flat) &&
            disabled,
          font4: size === ButtonSize.Large,
          fontBasic: size === ButtonSize.Medium,
          font3: size === ButtonSize.Small,
        })}
      >
        {text}
      </Text>
      {iconPosition === ButtonIconPosition.Right && Icon && (
        <View style={C.mlDozen}>
          <Icon
            fill={
              variant === ButtonVariant.Basic
                ? PrimaryColor.white
                : PrimaryColor.black
            }
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
