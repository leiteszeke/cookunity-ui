import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { classNames, apply, C } from 'cookunity-ui';
import { useFonts } from 'expo-font';

import ButtonScreen from './ButtonScreen';
import ColorsScreen from './ColorsScreen';
import DonutScreen from './DonutScreen';
import TextsScreen from './TextsScreen';

const screenHeight = Dimensions.get('window').height;

enum Screen {
  Button = 'Button',
  Colors = 'Colors',
  Donut = 'Donut',
  Texts = 'Texts',
}

const screens = [Screen.Colors, Screen.Donut, Screen.Texts, Screen.Button];

const App = () => {
  useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Reinata-Regular': require('./assets/fonts/Reinata-Regular.ttf'),
    'ReinataSans-Regular': require('./assets/fonts/ReinataSans-Regular.ttf'),
    'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
    'Gilroy-SemiBold': require('./assets/fonts/Gilroy-SemiBold.ttf'),
    'Gilroy-Light': require('./assets/fonts/Gilroy-Light.otf'),
  });

  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Button);

  const CurrentScreen = useMemo(() => {
    switch (currentScreen) {
      case Screen.Button:
        return ButtonScreen;

      case Screen.Colors:
        return ColorsScreen;

      case Screen.Donut:
        return DonutScreen;

      case Screen.Texts:
        return TextsScreen;

      default:
        return null;
    }
  }, [currentScreen]);

  return (
    <View
      style={classNames('flex', {
        pt8: Platform.OS !== 'web',
      })}
    >
      <ScrollView
        bounces={false}
        style={apply({ height: screenHeight - 72 }, C.px2)}
      >
        <Text
          style={apply(
            C.h8,
            C.font8,
            C.textCenter,
            C.familyGilroyExtraBold,
            C.mb5
          )}
        >
          {currentScreen}
        </Text>
        {CurrentScreen && <CurrentScreen />}
      </ScrollView>
      <ScrollView
        bounces={false}
        horizontal
        style={apply(C.h10, C.bordertopPrimaryBlack, C.bordertopMinimum, C.px3)}
      >
        {screens.map((screen) => (
          <TouchableOpacity
            style={classNames('h10 itemsCenter justifyCenter px3', {
              bgPrimaryGreen: !!(screen === currentScreen),
            })}
            onPress={() => setCurrentScreen(screen)}
          >
            <Text
              style={classNames('textCenter textPrimaryBlack font6', {
                textPrimaryWhite: !!(screen === currentScreen),
              })}
            >
              {screen}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
