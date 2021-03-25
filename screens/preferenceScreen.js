import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-svg';
import themeStyle from '../styles/theme.style';
 


export default function PreferenceScreen() {

  return (
    <View style={styles.container}>
        <Text style={styles.headline}>PREFERENCE SCREEN</Text>
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
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
  },

});
