import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const carImage = require('../assets/images/car-icon-png.png');

export default function index() {

    const [origin, setOrigin] = useState(
        {
            latitude: -12.03656547691188,
            longitude: -77.06839931480891,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    );

    const [destination, setDestination] = useState(
        {
            latitude: -12.05571313559246,
            longitude: -77.04620576494976,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    );

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={origin}
            >
                <Marker
                    coordinate={origin}
                    pinColor='skyblue'
                    image={carImage}
                >
                    <Callout>
                        <Text>Esto es un Callout</Text>
                    </Callout>
                </Marker>  
                <Marker
                    coordinate={destination}
                    pinColor='purple'
                    image={carImage}
                >
                </Marker>

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey='AIzaSyDP7IJ7AYcokgC-HeGvd6cvJ6sbYU4xK1o'
                    strokeColor='red'
                    strokeWidth={3.5}
                />
                {/* <Circle center={origin} radius={2000}/>
                <Polyline 
                    coordinates={[origin, destination]}
                    strokeColor='red'
                    strokeWidth={5}
                /> */}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    map:{
        width:'100%',
        height:'100%',
    }
})