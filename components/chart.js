import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
import 'react-native-svg';
import { StyleSheet, View } from 'react-native';
 
export default function Chart() {
    
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
        return (
            <View style={styles.linechart}>
            <LineChart
                style={{ height: 200 }}
                data={data}
                //  data={[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]}
                svg={{ stroke: 'rgb(134, 65, 244)'  }}

                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
            </View>
        )
    }


    const styles = StyleSheet.create({
    linechart:{
        // backgroundColor: 'red',
        width: '70%',
      },
    })