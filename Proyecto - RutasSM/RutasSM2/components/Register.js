import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [numberphone, setPhone] = useState("");
    const navigation = useNavigation(); // Usa el hook de navegación

    const image = require("../assets/images/LogoRutaSM.png");

    const goToHome = () => {
        navigation.navigate('Home'); // Navega a la pantalla Home
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>RutaSM</Text>
                <Text style={styles.subtitle}>Ingresa tus datos para el registro</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.subtext}>Correo electrónico:</Text>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#8c8c8c'}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <Text style={styles.subtext}>Contraseña: </Text>
                <TextInput
                    placeholder='Contraseña'
                    placeholderTextColor={'#8c8c8c'}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Text style={styles.subtext}>Ingresa tus nombres:</Text>
                <TextInput
                    placeholder='Nombres'
                    placeholderTextColor={'#8c8c8c'}
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <Text style={styles.subtext}>Ingresa tus apellidos:</Text>
                <TextInput
                    placeholder='Apellidos'
                    placeholderTextColor={'#8c8c8c'}
                    value={lastname}
                    onChangeText={setLastname}
                    style={styles.input}
                />
                <Text style={styles.subtext}>Ingresa tu número de celular: </Text>
                <TextInput
                    placeholder='Celular'
                    placeholderTextColor={'#8c8c8c'}
                    value={numberphone}
                    onChangeText={setPhone}
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={goToHome}>
                    <Text style={styles.buttonText}>Registrarme</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: '100%',
    },
    buttonContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        margin: 10,
        backgroundColor: '#007BFF',
        width: 'auto',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: 150,
        height: 90,
        margin: 20,
    },
    subtitle: {
        fontSize: 16,
        margin: 7,
    },
    subtext: {
        marginTop: 6,
        marginBottom: 7,
    }
})