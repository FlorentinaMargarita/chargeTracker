import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputField from "../components/inputField";
import Divider from "../components/divider";
import CustomButton from "../components/customButton";

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
      <CustomButton onPress={()=>{}} buttonText="send" />
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
});
