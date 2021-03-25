import React from "react";
import { StackedBarChart } from "react-native-svg-charts";
import "react-native-svg";
import { StyleSheet, View, Text } from "react-native";

export default function EnergyChart() {
  const data = [
    {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
},
{
  month: new Date(2015, 3, 1),
  apples: 3320,
  bananas: 480,
  cherries: 640,
  dates: 400,
},
{
  month: new Date(2015, 3, 1),
  apples: 3320,
  bananas: 480,
  cherries: 640,
  dates: 400,
},
{
  month: new Date(2015, 3, 1),
  apples: 3320,
  bananas: 480,
  cherries: 640,
  dates: 400,
},
]

const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
const keys = ['apples', 'bananas', 'cherries', 'dates']

  return (
    <>
    <View  style={styles.energyChart} >
    <StackedBarChart
     style={{ height: 200 }}
        keys={keys}
        colors={colors}
        data={data}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
    />
    </View>
    <View>
      <Text>Meaning</Text>
      </View>
    </>
  )}

const styles = StyleSheet.create({
  energyChart: {
    marginTop: '20%',
    marginBottom: '20%',
    width: "90%",
    color: 'red',
  },
});
