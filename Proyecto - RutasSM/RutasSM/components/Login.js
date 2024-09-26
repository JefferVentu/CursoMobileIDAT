import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase'; // Asegúrate de que el auth provenga correctamente de Firebase.js
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const image = require("../assets/images/LogoRutaSM.png");

    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Home'); // Redirige a la pantalla Home si el usuario está autenticado
            }
        });
        return userState; // Limpia la suscripción al desmontar
    }, []);

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                Alert.alert("Bienvenido", "Ha iniciado sesión exitosamente.");
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert("Error de inicio de sesión", "Usted no se encuentra registrado.");
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert("Error de inicio de sesión", "Contraseña incorrecta.");
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert("Error de inicio de sesión", "Correo electrónico inválido.");
                } else {
                    Alert.alert("Error", error.message);
                }
            });
    };

    // Función para navegar a la pantalla de registro
    const goToRegister = () => {
        navigation.navigate('Register'); // Cambia 'Register' por el nombre exacto de tu pantalla de registro
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Ingresa</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>O si eres nuevo aquí...</Text>
                {/* Cambia el onPress para navegar a la pantalla de registro */}
                <TouchableOpacity style={styles.button} onPress={goToRegister}>
                    <Text style={styles.buttonText}>Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        margin: 7,
    },
    forgotPassButton: {
        alignItems: 'flex-end',
        marginTop: 12,
    },
    forgotPass: {
        color: '#8c8c8c',
    },
});
