import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.medium}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
            <View>
                <Text style={styles.medium}>
                    <Text style={{fontSize: 40}}>{props.temp}</Text>
                    <Text> °C</Text>    
                </Text>
                <Image style={styles.smalling} source={{uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png'}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    medium: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 20,
    },
    small: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 20,

        
    },
    smalling :{width:100,
              height:100,
            },
})