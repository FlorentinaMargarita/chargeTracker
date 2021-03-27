import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import "react-native-svg";
import themeStyle from "../styles/theme.style";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function SessionScreenOverview({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dev.powerflex.io/test-server/sessions/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(()=> setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: themeStyle.FONT_WEIGHT_HEAVY,
            fontSize: themeStyle.FONT_SIZE_TITLE,
            color: themeStyle.PRIMARY_COLOR,
          }}
        >
          Choose a Session
        </Text>

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
              return (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() =>
                      navigation.navigate("SessionScreen", {
                        paramKey: item,
                      })
                    }
                  >
                    <Text style={styles.text}>{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: "10%",
  },
  touchable: {
    marginTop: "5%",
    borderRadius: 50,
    alignSelf: "center",
    width: "40%",
    backgroundColor: themeStyle.SECONDARY_COLOR,
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
  },
});
