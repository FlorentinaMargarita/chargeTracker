import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Chart from '../components/chart';
import { LineChart, Grid } from 'react-native-svg-charts'
import 'react-native-svg';
// import {SvgCss} from 'react-native-svg';
 


export default function SessionScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dev.powerflex.io/test-server/sessions/')
      .then((response) => response.json())
      .then((json) => json.map((id) => {
        console.log(id)
        // If there were many sessions, I would consider the load on the Server, because this sends all the requests at once.
        fetch(`https://dev.powerflex.io/test-server/sessions/${id}`)
        .then((response) => response.json())
        .then((event) => console.log(event.session.chart_data.actual_energy_delivered))
      }
      ))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  const toydata = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <View style={styles.container}>
        <Text>SESSION SCREEN</Text>
        <Chart />

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
