import React from "react";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import "react-native-svg";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Chart() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const { colors } = useTheme();
  const contentInset = { top: 20, bottom: 20 }

  return (
    // <View style={styles.linechart}>
    <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
      <YAxis
        data={data}
        // contentInset={contentInset}
        svg={{
          fill: "grey",
          fontSize: 10,
        }}
        numberOfTicks={10}
        formatLabel={(value) => `${value}ºC`}
      />
          <View style={{ flex: 1, marginLeft: 10 }}>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: colors.secondary }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linechart: {
    marginTop: "20%",
    marginBottom: "20%",
    width: "70%",
  },
});
