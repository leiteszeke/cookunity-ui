import * as React from 'react';

import { ScrollView, View } from 'react-native';
import {
  Button,
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
  C,
  Icon,
  IconButton,
  IconButtonSize,
  IconButtonVariant,
  apply,
} from 'cookunity-ui';

const buttons = [
  [
    { size: ButtonSize.Large },
    { size: ButtonSize.Large, variant: ButtonVariant.Outline },
    {
      size: ButtonSize.Large,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { size: ButtonSize.Large, variant: ButtonVariant.Flat },
    {
      size: ButtonSize.Large,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
  [
    { disabled: true, size: ButtonSize.Large },
    { disabled: true, size: ButtonSize.Large, variant: ButtonVariant.Outline },
    {
      disabled: true,
      size: ButtonSize.Large,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { disabled: true, size: ButtonSize.Large, variant: ButtonVariant.Flat },
    {
      disabled: true,
      size: ButtonSize.Large,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
  [
    { size: ButtonSize.Medium },
    { size: ButtonSize.Medium, variant: ButtonVariant.Outline },
    {
      size: ButtonSize.Medium,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { size: ButtonSize.Medium, variant: ButtonVariant.Flat },
    {
      size: ButtonSize.Medium,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
  [
    { disabled: true, size: ButtonSize.Medium },
    { disabled: true, size: ButtonSize.Medium, variant: ButtonVariant.Outline },
    {
      disabled: true,
      size: ButtonSize.Medium,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { disabled: true, size: ButtonSize.Medium, variant: ButtonVariant.Flat },
    {
      disabled: true,
      size: ButtonSize.Medium,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
  [
    { size: ButtonSize.Small },
    { size: ButtonSize.Small, variant: ButtonVariant.Outline },
    {
      size: ButtonSize.Small,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { size: ButtonSize.Small, variant: ButtonVariant.Flat },
    {
      size: ButtonSize.Small,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
  [
    { disabled: true, size: ButtonSize.Small },
    { disabled: true, size: ButtonSize.Small, variant: ButtonVariant.Outline },
    {
      disabled: true,
      size: ButtonSize.Small,
      variant: ButtonVariant.Basic,
      icon: Icon.Refresh,
      iconPosition: ButtonIconPosition.Left,
    },
    { disabled: true, size: ButtonSize.Small, variant: ButtonVariant.Flat },
    {
      disabled: true,
      size: ButtonSize.Small,
      variant: ButtonVariant.Basic,
      icon: Icon.RightArrow,
      iconPosition: ButtonIconPosition.Right,
    },
  ],
];

const iconButtons = [
  [
    {
      size: IconButtonSize.Large,
      variant: IconButtonVariant.Basic,
      icon: Icon.Plus,
    },
    {
      size: IconButtonSize.Large,
      variant: IconButtonVariant.Outline,
      icon: Icon.Plus,
    },
  ],
  [
    {
      disabled: true,
      size: IconButtonSize.Large,
      variant: IconButtonVariant.Basic,
      icon: Icon.Minus,
    },
    {
      disabled: true,
      size: IconButtonSize.Large,
      variant: IconButtonVariant.Outline,
      icon: Icon.Minus,
    },
  ],
  [
    {
      size: IconButtonSize.Medium,
      variant: IconButtonVariant.Basic,
      icon: Icon.Plus,
    },
    {
      size: IconButtonSize.Medium,
      variant: IconButtonVariant.Outline,
      icon: Icon.Plus,
    },
  ],
  [
    {
      disabled: true,
      size: IconButtonSize.Medium,
      variant: IconButtonVariant.Basic,
      icon: Icon.Minus,
    },
    {
      disabled: true,
      size: IconButtonSize.Medium,
      variant: IconButtonVariant.Outline,
      icon: Icon.Minus,
    },
  ],
  [
    {
      size: IconButtonSize.Small,
      variant: IconButtonVariant.Basic,
      icon: Icon.Plus,
    },
    {
      size: IconButtonSize.Small,
      variant: IconButtonVariant.Outline,
      icon: Icon.Plus,
    },
  ],
  [
    {
      disabled: true,
      size: IconButtonSize.Small,
      variant: IconButtonVariant.Basic,
      icon: Icon.Minus,
    },
    {
      disabled: true,
      size: IconButtonSize.Small,
      variant: IconButtonVariant.Outline,
      icon: Icon.Minus,
    },
  ],
];

export const ButtonScreen = () => (
  <ScrollView
    showsHorizontalScrollIndicator={false}
    horizontal
    style={apply(C.px3, C.flex)}
  >
    <View style={apply(C.row, C.justifyAround)}>
      {buttons.map((buttonColumn, index) => (
        <View style={apply(C.mr8)}>
          {buttonColumn.map((button: any) => (
            <Button
              style={apply(C.mb8)}
              text="Default"
              onPress={() => {}}
              size={button.size}
              disabled={button.disabled}
              variant={button.variant}
              icon={button.icon}
              iconPosition={button.iconPosition}
            />
          ))}

          <View style={C.row}>
            {iconButtons?.[index]?.map((button: any) => (
              <IconButton
                style={apply(C.mb8, C.mr8)}
                onPress={() => {}}
                size={button.size}
                disabled={button.disabled}
                variant={button.variant}
                icon={button.icon}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

export default ButtonScreen;
