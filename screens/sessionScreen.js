import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Chart from "../components/chart";
import "react-native-svg";
import themeStyle from "../styles/theme.style";

export default function SessionScreen({route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://dev.powerflex.io/test-server/sessions/${route.params.paramKey}`)
      .then((response) => response.json())
      .then((event) => {
        setData(event.session.chart_data);
      })
      .finally(() => setLoading(false));
  }, []);



  return (
    <View style={styles.container}>
      {isLoading ? <View /> : <Chart data={data} />}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
