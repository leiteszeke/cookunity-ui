import { apply, classNames } from '../../styles';
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton.types';
import { GrayColor, PrimaryColor } from '../../Colors';

const IconButton = ({
  disabled,
  onPress,
  icon: Icon,
  variant = IconButtonVariant.Basic,
  size = IconButtonSize.Medium,
  style,
}: IconButtonProps) => {
  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  const buttonSize = useMemo(() => {
    switch (size) {
      case IconButtonSize.Small:
        return 10;

      case IconButtonSize.Medium:
        return 14;

      case IconButtonSize.Large:
        return 16;
    }
  }, [size]);

  const fill = useMemo(() => {
    if (variant === IconButtonVariant.Basic) {
      return PrimaryColor.white;
    }

    if (disabled) {
      return GrayColor.medium;
    }

    return PrimaryColor.black;
  }, [disabled, variant]);

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.8}
      style={apply(
        style,
        classNames('radius6 itemsCenter justifyCenter borderMinimum', {
          'h12 w12': size === IconButtonSize.Large,
          'h10 w10': size === IconButtonSize.Medium,
          'h8 w8': size === IconButtonSize.Small,
          'bgPrimaryBlack borderPrimaryBlack':
            variant === IconButtonVariant.Basic && !disabled,
          'bgGrayMedium borderGrayMedium':
            variant === IconButtonVariant.Basic && disabled,
          'bgPrimaryWhite borderPrimaryBlack':
            variant === IconButtonVariant.Outline && !disabled,
          'bgPrimaryWhite borderGrayMedium':
            variant === IconButtonVariant.Outline && disabled,
        })
      )}
      onPress={handlePress}
    >
      <Icon fill={fill} height={buttonSize} width={buttonSize} />
    </TouchableOpacity>
  );
};

export default IconButton;
