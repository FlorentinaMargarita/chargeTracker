import React from "react";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import "react-native-svg";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as scale from 'd3-scale';

export default function Chart({ data }) {
  const { colors } = useTheme();
  const verticalContentInset = { top: 10, bottom: 10 };

  const axesSvg = { fontSize: 10, fill: "grey", height: 200, };
  const xAxisHeight = 1;

  const spacingInner = 1
const spacingOuter = 1

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
    <View style={{ height: "70%", padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data.actual_energy_delivered.concat(
          data.predictive_energy_delivered
        )}
        style={{}}
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
          style={{ marginHorizontal: -10, lineHeight: 50, borderWidth: 1, height: 200, backgroundColor: 'red' }}
          data={data.time}
          // xAccessor is a function that takes an index and returns the x value at that index
          // index is an object.
          xAccessor={({ item }) => {
            return item;
          }}
          formatLabel={(value) => {
            console.log(value, "value");
            console.log(data.time, "data.time");
            return new Date(value * 1000).toLocaleString();
          }}
          // scale={scale.scaleBand}
          spacingInner={spacingInner}
          spacingOuter={spacingOuter}
          contentInset={{ left: 10, right: 10 }}
          svg={{ ...axesSvg, lineHeight: 500, rotation: 30, y: 50, viewbox:"0 0 46 46" }}
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
