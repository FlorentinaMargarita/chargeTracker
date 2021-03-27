import React from "react";
import { G } from "react-native-svg";
import themeStyle from "../styles/theme.style";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Chart({ data }) {
  const { colors } = useTheme();
  const verticalContentInset = { top: 10, bottom: 10 };

  const axesSvg = { fontSize: 12, fill: "black" };

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
  //equalDay returns a boolean to control header and X-Axis.
  const equalDay = () => {
    for (i = 0; i < weekDay.length - 1; ++i) {
      if (weekDay[i].join(" ") !== weekDay[i + 1].join(" ")) {
        return false;
      }
    }
    return true;
  };

  const displayDay = () => {
    if (equalDay() === true) {
      return weekDay[0].join(" ");
    } else return "Data for many Days";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Data for {displayDay()}</Text>
      <View style={styles.chartView}>
        {/* Concatenate the data arrays actual energy and predictive energy so that the Y-Axis sees all the data points. */}
        <YAxis
          data={data.actual_energy_delivered.concat(
            data.predictive_energy_delivered
          )}
          style={{}}
          contentInset={verticalContentInset}
          svg={axesSvg}
          min={0}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1, height: 50 }}
            data={chartData}
            svg={{ stroke: colors.secondary }}
            contentInset={verticalContentInset}
            renderGrid={Grid.Both}
            gridMin={0}
            // numberOfTicks={5}
          >
            <Grid direction={Grid.Direction.BOTH} />
          </LineChart>
          <XAxis
            style={{
              marginHorizontal: -50,
              lineHeight: 50,
              height: 10,
              paddingLeft: 20,
              backgroundColor: "red",
            }}
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
              console.log(getJustTime, "value");
              //returns the data for the odd indexes. So only 10 instead of 20.
              if (index % 2) return getJustTime;
              else return "abc";
            }}
            spacingInner={spacingInner}
            spacingOuter={spacingOuter}
            contentInset={{ left: 60, right: 30 }}
            svg={{ ...axesSvg, rotation: 50, y: 50 }}
          />
        </View>
      </View>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.captionExplainationX}>
          X-Axis: Points in Time {displayDay()}
        </Text>
        <Text style={styles.captionExplainationY}>
          Y-Axis: Energy delivered {displayDay()}
        </Text>
        <Text style={styles.captionExplainationGreen}>
          Orange-Line: Predicted Energy {displayDay()}
        </Text>
        <Text style={styles.captionExplainationGreen}>
          Dark-Line: Actual Energy {displayDay()}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    paddingBottom: 5,
  },

  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
    textAlign: "center",
  },
  chartView: {
    height: "60%",
    width: "95%",
    flexDirection: "row",
    marginBottom: "10%",
  },
});
