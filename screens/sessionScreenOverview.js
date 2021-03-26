import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import Chart from "../components/chart";
import "react-native-svg";
import themeStyle from "../styles/theme.style";
import { FlatList } from "react-native-gesture-handler";

export default function SessionScreenOverview() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [array, setArray] = useState([]);

  // useEffect(() => {
  //   fetch('https://dev.powerflex.io/test-server/sessions/')
  //     .then((response) => response.json())

  //     // .then((json) => json.map((id) => {
  //     //  <Button color={themeStyle.SECONDARY_COLOR} onPress={goToSessionPage} title="Session Screen">{id}</Button>
  //     // }
  //     // ))
  //  }, []);
// const ids = []

useEffect(() => {
fetch('https://dev.powerflex.io/test-server/sessions/')
  // .then(console.log(response, "response"))
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error)=> alert(error))
  .finally(setLoading(false))
})


const getIds= () => {
  return fetch('https://dev.powerflex.io/test-server/sessions/')
  .then(res => res.json())
  .then(x => console.log(x))
}
            
//  console.log("ids", getIds())
//  console.log("sessionsArray", sessionsArray)

  const goToSessionPage =()=>{navigation.navigate('SessionScreen')} ;



  return (
    <View style={styles.container}>
      <View>
      <Text > Choose a Session </Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data} keyExtractor={({ id }, index)=> id}
        renderItem={({item})=> {
          return(
            <Text> {item}</Text>
          )
        }} />)}
        </View>
        </View>

      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
