import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import themeStyle from "../styles/theme.style";

export default function InputField({ question }) {
  const [text, onChangeText] = useState("Tell us!");

  return (
    <View style={styles.subContainer}>
      <Text> {question}</Text>
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "flex-start",
  },
  fieldContainer: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // backgroundColor: 'red',
    // width: '100%',
    // flex: 1,
    // backgroundColor: 'red',
  },
  input: {
fontSize: themeStyle.FONT_SIZE_LARGE,
  },
});
