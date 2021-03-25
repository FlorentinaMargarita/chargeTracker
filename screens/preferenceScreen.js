import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View } from "react-native";
import InputField from "../components/inputField";

export default function PreferenceScreen() {
  //maybe I could do it with drop down menue that would be easier for the database to handle.

  return (
    <View style={styles.container}>
       <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
      <InputField />
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    marginTop: "5%",
    backgroundColor: "#fff",
    //  alignItems: 'center',
    justifyContent: "center",
  },
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
    alignItems: "center",
    // justifyContent: 'center',
  },

  divider: {
    height: "2%",
    backgroundColor: themeStyle.PRIMARY_COLOR,
  },
});
