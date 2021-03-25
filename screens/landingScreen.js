import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import themeStyle from '../styles/theme.style';


export default function LandingScreen({navigation}) {
  
  const goToSessionPage =()=>{navigation.navigate('SessionScreen')} ;

  const goToPreferencePage = () => {navigation.navigate('PreferenceScreen')} ;
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>LANDING SCREEN</Text>
      <Button onPress={goToSessionPage} title="Session Screen">Session Screen</Button>
      <Button onPress={goToPreferencePage} title="Preference Screen">Preference Screen</Button>
      <StatusBar style="dark" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
  },
});
