import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputField from "../components/inputField";
import Divider from "../components/divider";

export default function PreferenceScreen() {
  //maybe I could do it with drop down menue that would be easier for the database to handle.

  return (
    <View style={styles.container}>
      <InputField question={"Miles needed?"} />
   <Divider />
      <InputField question={"Charge Duration?"} />
      <Divider />
      <InputField question={"Make?"} />
      <Divider />
      <InputField question={"Model?"} />
      <Divider />
      <InputField question={"Year?"} />
      <Divider />
      <InputField question={"Mileage?"} />
      <Divider />
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
