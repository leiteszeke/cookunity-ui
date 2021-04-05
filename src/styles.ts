import C, {
  boxShadow,
  classNames,
  responsive,
  extend,
  apply,
  theme,
} from 'consistencss';
import { GrayColor, PrimaryColor, SecondaryColor } from './Colors';

extend({
  classes: {
    letterzero: apply({ letterSpacing: 0 }),
    lettertwo: apply({ letterSpacing: 0.2 }),
    letterfour: apply({ letterSpacing: 0.4 }),
    grow: apply({ flexGrow: 1 }),
  },
  colors: {
    primaryBlack: PrimaryColor.black,
    primaryWhite: PrimaryColor.white,
    primaryGreen: PrimaryColor.green,
    secondaryYellow: SecondaryColor.yellow,
    secondaryPink: SecondaryColor.pink,
    secondaryLime: SecondaryColor.lime,
    secondaryBlue: SecondaryColor.blue,
    secondaryGreen: SecondaryColor.green,
    secondaryRed: SecondaryColor.red,
    grayDarkest: GrayColor.darkest,
    grayDarker: GrayColor.darker,
    grayMedium: GrayColor.medium,
    grayLighter: GrayColor.lighter,
    grayLightest: GrayColor.lightest,
    transparent: 'transparent',
  },
  sizing: {
    middle: 0.5,
    minimum: 1,
    double: 2,
    dozen: 10,
    basic: 14,
  },
  fonts: {
    gilroyExtraBold: 'Gilroy-ExtraBold',
    gilroyLight: 'Gilroy-Light',
    gilroySemiBold: 'Gilroy-SemiBold',
    reinata: 'Reinata-Regular',
    reinataSans: 'ReinataSans-Regular',
    robotoBold: 'Roboto-Bold',
    robotoRegular: 'Roboto-Regular',
    robotoLight: 'Roboto-Light',
  },
});

export { C, boxShadow, classNames, extend, apply, theme, responsive };
export default { C, boxShadow, classNames, extend, apply, theme, responsive };
