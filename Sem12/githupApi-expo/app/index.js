import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import User from '../components/user';
import axios from 'axios';

export default function Index() {
    const [username, setUsername] = useState('');
    const [details, setDetails] = useState(null); // Inicializa como null

    const getData = async () => {
        try {
            let url = `https://api.github.com/users/${username.toLowerCase()}`;
            const { data } = await axios.get(url);
            setDetails(data); // Si se obtienen datos, los guardamos
        } catch (error) {
            setDetails('not found'); // Si no se encuentra, guardamos este string
            setUsername('');
            alert('Error \nNo se encontró al usuario.');
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.textHeader}>GITHUB API</Text>

                    <View style={styles.detailsContainer}>
                        {details && details !== 'not found' ? (
                            <User details={details} />
                        ) : details === 'not found' ? (
                            <Text>No se encontró el usuario</Text>
                        ) : null}

                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your GitHub Username"
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                        />

                        <TouchableOpacity style={styles.button} onPress={() => getData(username)}>
                            <Text style={styles.textButton}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'peru',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: 'purple',
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
        marginTop: 30,
        borderBottomWidth: 5,
        borderBottomColor: 'purple',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        width: '100%',
        backgroundColor: 'gray',
        color: 'black',
        marginBottom: 30,
        fontSize:20,
    },
    button: {
        backgroundColor: 'green',
        padding: 25,
        alignSelf: 'center',
        borderRadius: 10,
        margin: 40,
        width: '100%',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        alignItems: 'center',
    },
});
