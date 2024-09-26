import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const image = require("../assets/images/LogoRutaSM.png")

    useEffect(()=>{
        const userState = auth().onAuthStateChanged(
            (user)=>{
                if (user){
                    navigation.replace('Home')
                }
            }
        );
        return userState;
    }, []);

    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email,password).then((userCredencials)=>userCredencials.user).catch((e)=>alert(e.message));
    }

    const handleSingup = () => {
        auth().createUserWithEmailAndPassword(email, password).then((userCredencials)=>userCredencials.user).catch((e)=>alert(e.message));
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.title}>RutaSM</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email' 
                    value={email}
                    onChangeText={(text)=>setEmail(text)} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password' 
                    value={password} 
                    onChangeText={(text)=>setPassword(text)} 
                    style={styles.input} 
                    secureTextEntry= {true}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleSingup}>
                    <Text style={styles.buttonText}>Register</Text>
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
        color: 'purple',
    },
    inputContainer:{
        width:'80%',
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '100%',
    },
    buttonContainer:{
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        margin: 20,
        backgroundColor: 'orange',
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
        padding: 5,
    }
})