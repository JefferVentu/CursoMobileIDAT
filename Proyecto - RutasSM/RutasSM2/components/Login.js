import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation(); // Usa el hook de navegación

    const image = require("../assets/images/LogoRutaSM.png");

    const loginUser = async () => {
        if (!email || !password) {
            Alert.alert("Error: Llene todos los campos");
            return;
        }
    
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Inicio de sesión exitoso");
            navigation.navigate('HomeDrawer');
        } catch (error) {
            console.error("Error en el inicio de sesión:", error); 
            if (error.code === 'auth/user-not-found') {
                Alert.alert("Error: Usuario no encontrado");
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert("Error: Contraseña incorrecta");
            } else {
                Alert.alert("Error: " + error.message);
            }
        }
    };

    const goToRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>RutaSM</Text>
                <Text style={styles.subtitle}>Ingresa con tu correo:</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={'#8c8c8c'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Contraseña'
                    placeholderTextColor={'#8c8c8c'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.forgotPassButton}>
                    <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.buttonText}>Ingresa</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>¿Aún no tienes una cuenta?</Text>

                <TouchableOpacity style={styles.button} onPress={goToRegister}>
                    <Text style={styles.buttonText}>Regístrate</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}

export default Login;

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
        marginTop: 10,
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
        marginTop: 15,
        margin: 10,
    },
    forgotPassButton: {
        alignItems: 'flex-end',
        marginTop: 12,
    },
    forgotPass: {
        color: '#8c8c8c',
    },
})