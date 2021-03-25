import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function LandingScreen({navigation}) {
  
  const goToSessionPage =()=>{navigation.navigate('SessionScreen')} ;
  return (
    <View style={styles.container}>
        <Text>LANDING SCREEN</Text>
      <Button onPress={goToSessionPage} title="Session Screen">Session Screen</Button>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
