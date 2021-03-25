import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { Button, StyleSheet, Text, View } from "react-native";
import InputField from "../components/inputField";

export default function PreferenceScreen() {
  //maybe I could do it with drop down menue that would be easier for the database to handle.

  return (
    <View style={styles.container}>
      {/* <View style={styles.divider} /> */}
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
      <View style={styles.space} >
      <Button color={themeStyle.SECONDARY_COLOR} title="send"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: "5%",
    backgroundColor: "#fff",
    justifyContent: "center",
    marginLeft:"5%",
    marginRight: "5%",
  },
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
    alignItems: "center",
  },

  divider: {
    marginTop: 5,
    marginVertical: 1,
    borderBottomColor: themeStyle.PRIMARY_COLOR,
    borderBottomWidth: 5,
  },
  space: {
    marginTop:'5%',
    marginLeft:"10%",
    marginRight: "10%",
    // width: '5%',
    // backgroundColor: 'red',
    // borderBottomWidth: 5,
    // marginVertical: '5%',
  },
});
