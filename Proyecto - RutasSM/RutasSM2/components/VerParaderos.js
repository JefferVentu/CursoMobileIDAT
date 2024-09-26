import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker, Polyline } from 'react-native-maps'


const VerParaderos = () => {

    const [origin, setOrigin] = useState(
        {
            latitude: -12.056469727385394, 
            longitude: -77.08442460632264,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
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
                >
                    <Callout>
                        <Text>Esto es un Callout</Text>
                    </Callout>
                </Marker>  
                <Marker
                    coordinate={destination}
                    pinColor='purple'
                >
                </Marker>

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

export default VerParaderos

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    map:{
        width:'100%',
        height:'100%',
    },
})