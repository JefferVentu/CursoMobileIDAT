import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Speech from 'expo-speech';

export default function index() {

    const[text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text>TEXT TO SPEECH</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setText(text)}
                value={text}
            />
            <TouchableOpacity style={styles.button} onPress={()=>{
                Speech.speak(text)
            }}>
                <Text style={styles.textSpeak}>SPEAK</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff01',
        alignItems:'center',
        justifyContent: 'center',
    },
    input:{
        height: 40,
        width: '80%',
        borderColor: 'purple',
        borderWidth: 3,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    button:{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    textSpeak:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
})