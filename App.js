import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LandingScreen from './components/landingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SessionScreen from './components/sessionScreen';

const Stack = createStackNavigator();

export default function App() {

// const goToLandingPage = navigation.navigate('LandingScreen')
  return (
    <NavigationContainer>
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
