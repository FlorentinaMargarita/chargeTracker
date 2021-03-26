import React from "react";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import "react-native-svg";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Chart({ data }) {
  const { colors } = useTheme();
  const verticalContentInset = { top: 10, bottom: 10 };

  const axesSvg = { fontSize: 10, fill: "grey" };
  const xAxisHeight = 30;

  const chartData = [
    {
      data: data.actual_energy_delivered,
      svg: { stroke: "purple" },
    },
    {
      data: data.predictive_energy_delivered,
      svg: { stroke: "green" },
    },
  ];


  return (
    <View style={{ height: 200, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data.actual_energy_delivered.concat(
          data.predictive_energy_delivered
        )}
        style={{ marginBottom: xAxisHeight }}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1, height: 200 }}
          data={chartData}
          svg={{ stroke: colors.secondary }}
          contentInset={verticalContentInset}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight }}
          data={data.time}
          formatLabel={(value) => {
          console.log(value, "value"); 
          console.log(data.time, "data.time")
          return new Date(value * 1000).toLocaleDateString()}}
          contentInset={{ left: 10, right: 10 }}
          svg={{...axesSvg, rotation: 30, y:10}}
        />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   linechart: {
//     marginTop: "20%",
//     marginBottom: "20%",
//     width: "70%",
//   },
// });
