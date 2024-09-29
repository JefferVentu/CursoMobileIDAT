import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { AntDesign } from '@expo/vector-icons';

const PointToPoint = () => {
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
            </MapView>

            <View style={styles.tituloPuntoPunto}>
                <Text style={styles.tituloText}>¿A dónde vamos?</Text>
            </View>

            <View>
                <AntDesign name="enviromento" size={20} style={styles.icon} />
                <TextInput/>
                <TextInput/>
            </View>
        </View>
    )
}

export default PointToPoint

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    map:{
        width:'100%',
        height:'65%',
    },
    tituloPuntoPunto: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#007BFF',
    },
    tituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    icon:{
        
    },
})