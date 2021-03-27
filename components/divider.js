import React from "react";
import { StyleSheet, View } from "react-native";
import themeStyle from "../styles/theme.style";

export default function Divider() {


  return (
    <View style={styles.divider} />
  );
}

const styles = StyleSheet.create({
  divider: {
    marginBottom: 2,
    marginVertical: 1,
    borderBottomColor: themeStyle.PRIMARY_COLOR,
    borderBottomWidth: 5,
  },
});
