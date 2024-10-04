import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';

const VerParaderos = () => {

    const [origin, setOrigin] = useState({
        latitude: -12.056469727385394, 
        longitude: -77.08442460632264,
        latitudeDelta: 0.010,
        longitudeDelta: 0.010,
    });
    const [marker, setMarker] = useState(null);
    const mapRef = useRef(null);

    const moveToLocation = (latitude, longitude) => {
        const newRegion = {
            latitude,
            longitude,
            latitudeDelta: 0.002, 
            longitudeDelta: 0.002,
        };

        setMarker({ latitude, longitude }); 
        mapRef.current.animateToRegion(newRegion, 1000);
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={origin}
            >
                {marker && <Marker coordinate={marker} />}
            </MapView>

            <View style={styles.tituloParadero}>
                <Text style={styles.tituloText}>Paraderos</Text>
            </View>
            
            <ScrollView style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.053676542486649, -77.08571968247284)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Sistemas</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.055477211132514, -77.08209137341198)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Clínica</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.057276063511942, -77.08020980377633)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Puerta 3</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.05952495766934, -77.07962454373136)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Puerta 2</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.060273827569626, -77.08061159662596)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Industrial</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.060744657124024, -77.08294645953667)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Comedor</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.05999710004744, -77.08446324880997)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Gimnasio</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.055928079704337, -77.08493500096182)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Biblioteca</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => moveToLocation(-12.054863118999455, -77.08620100359333)}
                >
                    <AntDesign name="enviromento" size={20} style={styles.icon} />
                    <Text>P. Odontología</Text>
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
