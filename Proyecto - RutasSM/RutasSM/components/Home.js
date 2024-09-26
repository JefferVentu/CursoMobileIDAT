import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../Firebase';

const Home = () => {

    const navigation = useNavigation();

    const handleSingOut = () => {
        auth().signOut().then(()=>{
            navigation.replace('Login');
        })
        .catch((e)=>alert(e.message));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your email is {auth().currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSingOut} style={styles.button}>
                <Text style={styles.buttonText}>SING OUT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: 'orange',
        width: '60%',
        borderRadius: 10,
        alignItems: 'center',
        margin: 50,
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    title:{
        fontSize: 20,
    }
})