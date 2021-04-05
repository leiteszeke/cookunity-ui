import type { TextColor } from 'src/Colors';
import type { PropsWithTypedChildren, WithTestID } from 'src/types';
import type { TextProps as RNTextProps } from 'react-native';

export enum TextVariant {
  Hero = 'hero',
  Heading = 'heading',
  Paragraph = 'paragraph',
  Caption = 'caption',
  Chef = 'chef',
  Quote = 'quote',
}

export enum TextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum FontWeight {
  Regular = 'Regular',
  Bold = 'Bold',
}

export enum TextSize {
  Hero1 = 'hero1',
  Hero2 = 'hero2',
  Heading1 = 'heading1',
  Heading2 = 'heading2',
  Heading3 = 'heading3',
  Heading4 = 'heading4',
  Paragraph1 = 'paragraph1',
  Paragraph2 = 'paragraph2',
  Basic = 'basic',
}

export type FontProps = WithTestID<{
  align?: TextAlign;
  color?: TextColor;
  uppercase?: boolean;
}>;

type BasicText = FontProps & {
  variant: TextVariant.Caption | TextVariant.Chef | TextVariant.Quote;
  size?: TextSize.Basic;
  weight?: FontWeight.Regular;
};

type HeroText = FontProps & {
  variant: TextVariant.Hero;
  size: TextSize.Hero1 | TextSize.Hero2;
  weight?: FontWeight.Regular;
};

type HeadingText = FontProps & {
  variant: TextVariant.Heading;
  size:
    | TextSize.Heading1
    | TextSize.Heading2
    | TextSize.Heading3
    | TextSize.Heading4;
  weight?: FontWeight.Regular;
};

type ParagraphText = FontProps & {
  variant: TextVariant.Paragraph;
  size: TextSize.Paragraph1 | TextSize.Paragraph2;
  weight: FontWeight.Regular | FontWeight.Bold;
};

export type TextProps = PropsWithTypedChildren<
  | (RNTextProps & BasicText)
  | (RNTextProps & HeroText)
  | (RNTextProps & HeadingText)
  | (RNTextProps & ParagraphText),
  string
>;
