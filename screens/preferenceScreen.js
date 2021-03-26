import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputField from "../components/inputField";
import Divider from "../components/divider";
import CustomButton from "../components/customButton";

export default function PreferenceScreen() {
  //maybe I could do it with drop down menue that would be easier for the database to handle.

  const [miles, setMiles] = useState();
  const [duration, setDuration] = useState();
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [mileage, setMileage] = useState();
  const [battery, setBattery] = useState();

  fetch("https://dev.powerflex.io/test-server/preferences", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstParam: miles,
      secondParam: duration,
      thirdParam: make,
      fourthParam: model,
      fifthParam: year,
      sixthParam: mileage,
      seventhParam: battery,
    }),
  });

  return (
    <View style={styles.container}>
      <InputField
        onChangeText={(text) => setMiles(text)}
        question={"Miles needed?"}
      />
      {/* <Text>{miles}</Text> */}
      <Divider />
      <InputField
        onChangeText={(text) => setDuration(text)}
        question={"Charge Duration?"}
      />
      <Divider />
      <InputField onChangeText={(text) => setMake(text)} question={"Make?"} />
      <Divider />
      <InputField onChangeText={(text) => setModel(text)} question={"Model?"} />
      <Divider />
      <InputField onChangeText={(text) => setYear(text)} question={"Year?"} />
      <Divider />
      <InputField
        onChangeText={(text) => setMileage(text)}
        question={"Mileage?"}
      />
      <Divider />
      <InputField
        onChangeText={(text) => setBattery(text)}
        question={"Battery Size?"}
      />
      <CustomButton onPress={() => {}} buttonText="send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    // justifyContent: "space-around",
    marginLeft: "5%",
    marginRight: "5%",
  },
});
