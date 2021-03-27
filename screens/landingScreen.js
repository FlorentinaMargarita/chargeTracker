import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Divider from '../components/divider';
import themeStyle from '../styles/theme.style';


export default function LandingScreen({navigation}) {
  
  const goToSessionPage =()=>{navigation.navigate('SessionScreenOverview')} ;

  const goToPreferencePage = () => {navigation.navigate('PreferenceScreen')} ;

  const image = require('../images/logoFlower1.jpg')
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image style={{height: 200}} source={image}/>
      </View>
      <Text style={styles.headline}>This is your Charge Tracker</Text>
      <View style={styles.buttonContainer}>
      <Button color={themeStyle.SECONDARY_COLOR} onPress={goToSessionPage} title="Session Screen">Session Screen</Button>
      <Divider />
      <Button color={themeStyle.SECONDARY_COLOR} onPress={goToPreferencePage} title="Preference Screen">Preference Screen</Button>
      </View>
      <StatusBar style="dark" />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
    textAlignVertical: 'center',
  },
  buttonContainer:{
    width: '50%',
  },
  image: {
    width: '30%',
    alignItems: 'center',
    
  }
});
