import React from "react";
import "react-native-svg";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Chart({ data }) {
  const { colors } = useTheme();
  const verticalContentInset = { top: 10, bottom: 10 };

  const axesSvg = { fontSize: 15, fill: "grey", height: 200, };

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

  // here I find out, which weekday it i is

  const day = data.time
  const weekDayWithTime = day.map(x =>  new Date(x * 1000).toLocaleString())

  const weekDay = weekDayWithTime.map(x => x.split(" ", 3))

  const equalDay = () => {
    for (i=0; i< weekDay.length; ++i){
      // console.log(weekDay[i], weekDay[1], "Weekday")
      if (weekDay[i].join(" ")===weekDay[i+1].join(" ")){
        console.log(weekDay[i].join(" "), weekDay[i+1].join(" "), "TRY")
        i++
      }
      return weekDay[0].join(" ");
    } 
    
  }

  console.log(equalDay(), "sessionDay")



  return (
    <>
   <Text>This is data for {equalDay()}</Text> 
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
          style={{ marginHorizontal: -10, lineHeight: 50, height: 200}}
          data={data.time}
          // xAccessor is a function that takes an index and returns the x value at that index
          // index is an object.
          xAccessor={({ item }) => {
            return item;
          }}
          formatLabel={(value) => {
            // console.log(value, "value");
            // console.log(data.time, "data.time");
            // return new Date(value * 1000).toLocaleString();
            let newDate = new Date(value * 1000).toLocaleString();
            // console.log("newDate", newDate)
            return newDate


          }}
          spacingInner={spacingInner}
          spacingOuter={spacingOuter}
          contentInset={{ left: 10, right: 10 }}
          svg={{ ...axesSvg, lineHeight: 500, rotation: 30, y: 30}}
        />
      </View>
    </View>
    </>
  );
}
// const styles = StyleSheet.create({
//   linechart: {
//     marginTop: "20%",
//     marginBottom: "20%",
//     width: "70%",
//   },
// });
