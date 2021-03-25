import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function SessionScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dev.powerflex.io/test-server/sessions/')
      .then((response) => response.json())
      // console.log(response)
      .then((json) => setData(json.map((id) => {
        console.log(id)
        fetch(`https://dev.powerflex.io/test-server/sessions/${id}`)
      }
      )))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <View style={styles.container}>
        <Text>SESSION SCREEN</Text>
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
