import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

const VerParaderos = () => {

    const [origin, setOrigin] = useState({
        latitude: -12.056469727385394, 
        longitude: -77.08442460632264,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
    });

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
            </MapView>

            <View style={styles.tituloParadero}>
                <Text style={styles.tituloText}>Paraderos</Text>
            </View>
            
            <ScrollView style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Sistemas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Clínica</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Puerta 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Puerta 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Industrial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Comedor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Gimnasio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Biblioteca</Text>
                </TouchableOpacity>
                <View style={styles.space}>
                </View>
            </ScrollView>
            
        </View>
    );
};

export default VerParaderos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    map: {
        width: '100%',
        height: '55%',
    },
    tituloParadero: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#007BFF',
    },
    tituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    buttonsContainer: {
        padding: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        marginRight: 10,
        color: 'black',  
    },
    space:{
        margin: 20,
    }
});
