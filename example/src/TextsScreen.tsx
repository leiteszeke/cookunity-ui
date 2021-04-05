import * as React from 'react';

import { ScrollView, Text as RNText, View } from 'react-native';
import {
  apply,
  C,
  Text,
  TextSize,
  FontWeight,
  TextVariant,
} from 'cookunity-ui';

export const TextsScreen = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={apply(C.px3)}
    style={apply(C.flex)}
  >
    <View style={apply(C.mr7)}>
      <RNText style={apply(C.mb2, C.familyGilroyExtraBold, C.font6)}>
        Family Gilroy
      </RNText>
      <View>
        <Text variant={TextVariant.Hero} size={TextSize.Hero1}>
          Hero 1
        </Text>
        <Text variant={TextVariant.Hero} size={TextSize.Hero2}>
          Hero 2
        </Text>
        <Text variant={TextVariant.Heading} size={TextSize.Heading1}>
          Heading 1
        </Text>
        <Text variant={TextVariant.Heading} size={TextSize.Heading2}>
          Heading 2
        </Text>
        <Text variant={TextVariant.Heading} size={TextSize.Heading3}>
          Heading 3
        </Text>
        <Text variant={TextVariant.Heading} size={TextSize.Heading4}>
          Heading 4
        </Text>
        <Text variant={TextVariant.Quote}>Quotes</Text>
      </View>
      <View style={C.h4} />
      <RNText style={apply(C.mb2, C.familyReinata, C.font10)}>
        Family Reinata
      </RNText>
      <View>
        <Text variant={TextVariant.Chef}>Chefs</Text>
      </View>
    </View>
    <View>
      <RNText style={apply(C.mb2, C.familyRobotoBold, C.font6)}>
        Family Roboto
      </RNText>
      <View>
        <Text
          variant={TextVariant.Paragraph}
          size={TextSize.Paragraph1}
          weight={FontWeight.Regular}
        >
          Paragraph 1
        </Text>
        <Text
          variant={TextVariant.Paragraph}
          size={TextSize.Paragraph2}
          weight={FontWeight.Regular}
        >
          Paragraph 2
        </Text>
        <Text variant={TextVariant.Caption}>Caption</Text>
      </View>
    </View>
  </ScrollView>
);

export default TextsScreen;
