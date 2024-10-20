import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TamaguiProvider, Theme } from 'tamagui';
import config from './tamagui.config';
import ScreenOne from './src/components/ScreenOne';
import ScreenTwo from './src/components/ScreenTwo';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="One" component={ScreenOne} />
            <Stack.Screen name="Two" component={ScreenTwo} />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}