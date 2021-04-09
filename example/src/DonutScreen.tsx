import * as React from 'react';

import { View } from 'react-native';
import { apply, C, Donut } from 'cookunity-ui';

export const DonutScreen = () => (
  <View style={apply(C.px3, C.flex)}>
    <View style={apply(C.h30, C.w30)}>
      <Donut radius={30} percentage={100} />
      <Donut radius={60} percentage={60} />
      <Donut radius={38} percentage={100} text="DV" />
      <Donut radius={60} percentage={60} text="FQ" />
    </View>
  </View>
);

export default DonutScreen;
