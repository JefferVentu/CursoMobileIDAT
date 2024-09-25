import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, Polyline } from 'react-native-maps'

export default function index() {

    const [origin,setOrigin] = useState({
        latitude: -12.036961753720705, 
        longitude: -77.07250160055612,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    });
    const [destination,setDestination] = useState({
        latitude: -12.053454335116555, 
        longitude: -77.06570941192972,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    })

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={origin}
            >
                <Marker
                    coordinate={origin}
                    pinColor='red'
                >
                    <Callout>
                        <Text>Punto A</Text>
                    </Callout>
                </Marker>
                <Marker
                    coordinate={destination}
                    pinColor='blue'
                >
                    <Callout>
                        <Text>Punto A</Text>
                    </Callout>
                </Marker>
                <Circle center={origin} radius={100} strokeColor='red'/>
                <Circle center={destination} radius={100} strokeColor='red'/>
                <Polyline coordinates={[origin, destination]} strokeColor='red'/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        width:'100%',
        height:'100%',
    }
})