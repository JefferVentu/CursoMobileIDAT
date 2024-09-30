import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

const SearchRoutes = () => {

    const [origin, setOrigin] = useState({
        latitude: -12.056887099527414, 
        longitude: -77.08245481271341 ,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    });

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={origin}
            >
                <Marker
                    coordinate={{
                        latitude: -12.053676542486649, 
                        longitude: -77.08571968247284,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Sistemas</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.054863118999455, 
                        longitude: -77.08620100359333,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Odontología</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.055928079704337, 
                        longitude: -77.08493500096182,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Biblioteca</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.05999710004744, 
                        longitude: -77.08446324880997,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Gimnasio</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.060744657124024, 
                        longitude: -77.08294645953667,
                    }}
                    pinColor='skyblue' 
                >
                    <Callout>
                        <Text>P. Comedor </Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.060273827569626, 
                        longitude: -77.08061159662596,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Industrial</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.05952495766934, 
                        longitude: -77.07962454373136,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Puerta 2</Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.057276063511942, 
                        longitude: -77.08020980377633,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Puerta 3 </Text>
                    </Callout>
                </Marker> 
                <Marker
                    coordinate={{
                        latitude: -12.055477211132514,  
                        longitude: -77.08209137341198,
                    }}
                    pinColor='skyblue'
                >
                    <Callout>
                        <Text>P. Clínica</Text>
                    </Callout>
                </Marker> 

            </MapView>
        </View>
    )
}

export default SearchRoutes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    map: {
        width: '100%',
        height: '100%',
    },
})