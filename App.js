import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import LandingScreen from './screens/landingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SessionScreen from './screens/sessionScreen';

const Stack = createStackNavigator();

const MyTheme = {
  // ...DefaultTheme,
  colors: {
    primary: '#001A70',
    secondary: '#FE5815'
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SessionScreen" component={SessionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
