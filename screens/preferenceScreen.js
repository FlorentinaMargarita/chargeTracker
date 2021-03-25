import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputField from "../components/inputField";

export default function PreferenceScreen() {
  //maybe I could do it with drop down menue that would be easier for the database to handle.

  return (
    <View style={styles.container}>
      <InputField question={"Miles needed?"} />
      <View style={styles.divider} />
      <InputField question={"Charge Duration?"} />
      <View style={styles.divider} />
      <InputField question={"Make?"} />
      <View style={styles.divider} />
      <InputField question={"Model?"} />
      <View style={styles.divider} />
      <InputField question={"Year?"} />
      <View style={styles.divider} />
      <InputField question={"Mileage?"} />
      <View style={styles.divider} />
      <InputField question={"Battery Size?"} />
      <TouchableOpacity onPress={()=>{}}  style={styles.touchable}>
        <Text style={styles.text}> Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    marginLeft:"5%",
    marginRight: "5%",
  },

  divider: {
    marginBottom: '1%',
    marginVertical: 1,
    borderBottomColor: themeStyle.PRIMARY_COLOR,
    borderBottomWidth: 5,
  },
  touchable: {
   marginTop:'5%',
    borderRadius: 50,
    alignSelf: 'center',
    width: '50%',
    height: '5%',
    backgroundColor: themeStyle.SECONDARY_COLOR,
    justifyContent: 'center',
  },
  text: {
     alignSelf: 'center',
     justifyContent: 'center',
     color: 'white',
   },
});
