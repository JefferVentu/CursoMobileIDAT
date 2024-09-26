import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'; // Para mostrar alertas
import { auth } from '../Firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [numberphone, setPhone] = useState("");

    const navigation = useNavigation();

    const image = require("../assets/images/LogoRutaSM.png");

    useEffect(() => {
        const userState = auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Home');
            }
        });
        return userState;
    }, []);

    const handleSignup = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredencials) => {
                const user = userCredencials.user;
                Alert.alert("Registro exitoso", "Su cuenta ha sido creada.");
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert("Error de registro", "Usted ya está registrado con ese correo.");
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert("Error de registro", "Correo inválido.");
                } else if (error.code === 'auth/weak-password') {
                    Alert.alert("Error de registro", "La contraseña es muy débil.");
                } else {
                    Alert.alert("Error", error.message);
                }
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.title}>RutaSM</Text>
                <Text style={styles.subtitle}>Ingresa tus datos para el registro</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.subtext}>Correo electrónico:</Text>
                <TextInput 
                    placeholder='Email' 
                    placeholderTextColor={'#8c8c8c'}
                    value={email}
                    onChangeText={(text)=>setEmail(text)} 
                    style={styles.input}
                />
                <Text style={styles.subtext}>Contraseña: </Text>
                <TextInput 
                    placeholder='Contraseña' 
                    placeholderTextColor={'#8c8c8c'}
                    value={password} 
                    onChangeText={(text)=>setPassword(text)} 
                    style={styles.input} 
                    secureTextEntry= {true}
                />
                <Text style={styles.subtext}>Ingresa tus nombres:</Text>
                <TextInput 
                    placeholder='Nombres' 
                    placeholderTextColor={'#8c8c8c'}
                    value={password} 
                    onChangeText={(text)=>setName(text)} 
                    style={styles.input} 
                />
                <Text style={styles.subtext}>Ingresa tus apellidos:</Text>
                <TextInput 
                    placeholder='Apellidos' 
                    placeholderTextColor={'#8c8c8c'}
                    value={password} 
                    onChangeText={(text)=>setLastname(text)} 
                    style={styles.input} 
                    secureTextEntry= {true}
                />
                <Text style={styles.subtext}>Ingresa tu número de celular: </Text>
                <TextInput 
                    placeholder='Celular' 
                    placeholderTextColor={'#8c8c8c'}
                    value={password} 
                    onChangeText={(text)=>setPhone(text)} 
                    style={styles.input} 
                    secureTextEntry= {true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    titleContainer:{
        alignItems: 'center',
        marginBottom: 20,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    inputContainer:{
        width:'80%',
    },
    input:{
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        // marginTop: 10,
        width: '100%',
    },
    buttonContainer:{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button:{
        margin: 10,
        backgroundColor: '#007BFF',
        width: 'auto',
        padding: 15,
        borderRadius: 10,
        alignItems:'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    image:{
        width: 150,
        height: 90,
        margin: 20,
    },
    subtitle:{
        fontSize: 16,
        margin: 7,
    },
    forgotPassButton:{
        alignItems: 'flex-end',
        marginTop: 12,
    },
    forgotPass:{
        color:'#8c8c8c'
    },
    subtext:{
        marginTop: 6,
        marginBottom: 7,
    }
})