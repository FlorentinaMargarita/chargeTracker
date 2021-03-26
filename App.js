import React from 'react';

import LandingScreen from './screens/landingScreen';
import PreferenceScreen from './screens/preferenceScreen';
import SessionScreen from './screens/sessionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import themeStyle from './styles/theme.style';
import SessionScreenOverview from './screens/sessionScreenOverview';

const Stack = createStackNavigator();

const MyTheme = {
  colors: {
    primary: '#001A70',
    secondary: '#FE5815'
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
        <Stack.Screen  options={{ title: 'Welcome To PowerFlex', headerTintColor: themeStyle.PRIMARY_COLOR }}name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SessionScreenOverview" component={SessionScreenOverview} />
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
        <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}