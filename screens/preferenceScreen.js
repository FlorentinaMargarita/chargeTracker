import React, { useState, useEffect } from "react";
import themeStyle from "../styles/theme.style";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputField from "../components/inputField";
import Divider from "../components/divider";
import CustomButton from "../components/customButton";

export default function PreferenceScreen() {
  const [miles, setMiles] = useState();
  const [duration, setDuration] = useState();
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [mileage, setMileage] = useState();
  const [battery, setBattery] = useState();

  const postData = () => {
    const body = {
      miles_needed: miles,
      charge_duration: duration,
      make: make,
      model: model,
      year: year,
      mileage: mileage,
      battery_size: battery,
    };
    console.log("body", body);
    fetch("https://dev.powerflex.io/test-server/preferences", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response.ok);

        return response.text();
      })
      .then((text) => {
        console.log(text, "text");
      });
  };

  return (
    <View style={styles.container}>
      <InputField
        text={miles}
        onChangeText={(text) => setMiles(parseInt(text))}
        question={"Miles needed?"}
        keyboardType='numeric'
      />
      <Divider />
      <InputField
        text={duration}
        onChangeText={(text) => setDuration(parseInt(text))}
        question={"Charge Duration?"}
        keyboardType='numeric'
      />
      <Divider />
      <InputField
        text={make}
        onChangeText={(text) => setMake(text)}
        question={"Make?"}
      />
      <Divider />
      <InputField
        text={model}
        onChangeText={(text) => setModel(text)}
        question={"Model?"}
        
      />
      <Divider />
      <InputField
        text={year}
        onChangeText={(text) => setYear(parseInt(text))}
        question={"Year?"}
        keyboardType='numeric'
      />
      <Divider />
      <InputField
        text={mileage}
        onChangeText={(text) => setMileage(parseInt(text))}
        question={"Mileage?"}
        keyboardType='numeric'
      />
      <Divider />
      <InputField
        text={battery}
        onChangeText={(text) => setBattery(parseInt(text))}
        question={"Battery Size?"}
        keyboardType='numeric'
      />
      <CustomButton onPress={postData} buttonText="send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "8%",
  },
});
