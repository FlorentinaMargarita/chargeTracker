import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import themeStyle from "../styles/theme.style";

export default function CustomButton({ buttonText, onPress }) {
  return (
    <View style={styles.divider}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={styles.text}> {buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    marginTop:'10%',
    borderRadius: 50,
    alignSelf: "center",
    width: "40%",
    height: "30%",
    backgroundColor: themeStyle.SECONDARY_COLOR,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
  },
});
