import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Chart from '../components/chart';
import { useTheme } from '@react-navigation/native';
import 'react-native-svg';
import themeStyle from '../styles/theme.style';
import EnergyChart from '../components/energyChart';
 


export default function SessionScreen() {

  const { fontFamily, fontSize } = useTheme();
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


  return (
    <View style={styles.container}>
        <Text style={styles.headline}>SESSION SCREEN</Text>
        {/* <Chart /> */}
        <EnergyChart />

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
  headline: {
    fontSize: themeStyle.FONT_SIZE_TITLE,
    color: themeStyle.PRIMARY_COLOR,
  },

});
