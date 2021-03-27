import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import themeStyle from "../styles/theme.style";

export default function InputField({ question, onChangeText, text, keyboardType }) {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.question}> {question}</Text>
      <View>
        <TextInput
          placeholder="Tell us!"
          placeholderTextColor={themeStyle.PRIMARY_COLOR}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    alignItems: "flex-start",
  },
  input: {
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
    color: themeStyle.PRIMARY_COLOR,
    marginBottom: -10,
  },

  question:{
    marginTop: 5, 
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
    marginBottom: -10,
    // flexShrink: 1, 
  },
});
