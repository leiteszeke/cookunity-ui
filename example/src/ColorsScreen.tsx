import * as React from 'react';

import { ScrollView, Text, View } from 'react-native';
import { apply, C } from 'cookunity-ui';

const primaryColors = ['bgPrimaryBlack', 'bgPrimaryWhite', 'bgPrimaryGreen'];

const secondaryColors = [
  'bgSecondaryYellow',
  'bgSecondaryPink',
  'bgSecondaryLime',
  'bgSecondaryBlue',
  'bgSecondaryGreen',
  'bgSecondaryRed',
];

const grayscale = [
  'bgGrayDarkest',
  'bgGrayDarker',
  'bgGrayMedium',
  'bgGrayLighter',
  'bgGrayLightest',
];

export const ColorsScreen = () => (
  <ScrollView style={apply(C.px3, C.flex)}>
    <View style={apply(C.mb2)}>
      <Text style={C.mb2}>Primary Colors</Text>
      <View style={C.row}>
        {primaryColors.map((color) => (
          <View
            key={color}
            style={apply(
              C.w12,
              C.h12,
              C.mr2,
              C.borderPrimaryBlack,
              C.borderMinimum,
              C[color]
            )}
          />
        ))}
      </View>
    </View>
    <View style={apply(C.mb2)}>
      <Text style={C.mb2}>Secondary Colors</Text>
      <View style={C.row}>
        {secondaryColors.map((color) => (
          <View
            key={color}
            style={apply(
              C.w12,
              C.h12,
              C.mr2,
              C.borderPrimaryBlack,
              C.borderMinimum,
              C[color]
            )}
          />
        ))}
      </View>
    </View>
    <View style={apply(C.mb2)}>
      <Text style={C.mb2}>Grays</Text>
      <View style={C.row}>
        {grayscale.map((color) => (
          <View
            key={color}
            style={apply(
              C.w12,
              C.h12,
              C.mr2,
              C.borderPrimaryBlack,
              C.borderMinimum,
              C[color]
            )}
          />
        ))}
      </View>
    </View>
  </ScrollView>
);

export default ColorsScreen;
