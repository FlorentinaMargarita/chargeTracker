import React from "react";
import "react-native-svg";
import themeStyle from "../styles/theme.style";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Chart({ data }) {
  const { colors } = useTheme();
  const verticalContentInset = { top: 10, bottom: 10 };

  const axesSvg = { fontSize: 12, fill: "grey" };

  const spacingInner = 1;
  const spacingOuter = 1;

  const chartData = [
    {
      data: data.actual_energy_delivered,
      svg: { stroke: themeStyle.PRIMARY_COLOR },
    },
    {
      data: data.predictive_energy_delivered,
      svg: { stroke: themeStyle.SECONDARY_COLOR },
    },
  ];

  // here I find out, which weekday it i is

  const day = data.time;
  const weekDayWithTime = day.map((x) => new Date(x * 1000).toLocaleString());

  const weekDay = weekDayWithTime.map((x) => x.split(" ", 3));

  // if all the elements in the array are the same, I will display the specific date in the headline of the chart
  const equalDay = () => {
    return 'Wednesday Jan 20th'
    // for (i = 0; i < weekDay.length; ++i) {
    //   if (weekDay[i].join(" ") === weekDay[i + 1].join(" ")) {
    //     i++;
    //   } 
    // } return weekDay[0].join(" ");
  };

  return (
    <View style={styles.container}>
       <Text style={styles.headline}>This is data for {equalDay()}</Text>
      <View style={{ height: "70%", paddingRight: 20, paddingLeft: 5, flexDirection: "row", marginBottom: 10 }}>
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
            style={{ flex: 1, height: 50 }}
            data={chartData}
            svg={{ stroke: colors.secondary }}
            contentInset={verticalContentInset}
          >
            <Grid />
          </LineChart>

          <XAxis
            style={{ marginHorizontal: -10, lineHeight: 50, height: 40, paddingLeft: 20 }}
            data={data.time}
            // xAccessor is a function that takes an index and returns the x value at that index
            // index is an object.
            xAccessor={({ item }) => {
              return item;
            }}
            formatLabel={(value, index) => {
              // Here I just want to get the time, because all of the data happens on the same day, so displaying the date as well would be redundant.
              const newDate = new Date(value * 1000).toLocaleString();
              const makeArray = newDate.split(" ");
              const getJustTime = makeArray[3];
               //returns the data for the odd indexes. So only 10 instead of 20. 
              if (index % 2) return getJustTime; 
              else return "";
            }}
            spacingInner={spacingInner}
            spacingOuter={spacingOuter}
            contentInset={{ left: 10, right: 10 }}
            svg={{ ...axesSvg, rotation: 40, y: 25}}
          />
        </View>
      </View>
      <Text style={styles.captionExplainationX}>X-Axis: Points in Time {equalDay()}</Text>
      <Text style={styles.captionExplainationY}>Y-Axis: Energy delivered {equalDay()}</Text>
      <Text style={styles.captionExplainationGreen}>Orange-Line: Actual Energy Delivered {equalDay()}</Text>
      <Text style={styles.captionExplainationGreen}>Dark-Line: Predicted Energy {equalDay()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
 container:{
   justifyContent: 'space-around',
   flexGrow: 1, 
 },

  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
  },
});
