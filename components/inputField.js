import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

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
    // flexDirection: 'row',
    alignItems: "flex-start",
    // justifyContent: 'flex-start',
    // backgroundColor: "#F2F2F2",
    //  justifyContent: 'center',
    // borderBottomColor: 'black',
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
    // backgroundColor: "#F2F2F2",
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
    // marginLeft: 'auto',
    // marginBottom: 'auto',
    // borderColor: themeStyle.SECONDARY_COLOR,
    // height: 'auto',
    // flex: 1,
    // backgroundColor: 'green',
    // borderBottomColor: "black",
  },
});
