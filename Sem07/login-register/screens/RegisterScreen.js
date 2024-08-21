import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

import GoogleSVG from '../assets/images/google.svg'
import FacebookSVG from '../assets/images/facebook.svg'
import TwitterSVG from '../assets/images/twitter.svg'

import LoginSVG from '../assets/images/login.svg'
import React from 'react'
import { transform } from 'typescript'

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.containerSafe}>
        <ScrollView>
            <View style={styles.viewContainer}>

                <View style={styles.viewHeader}>
                    <LoginSVG height ={300} width={300} style = {styles.loginsvg}/>
                    <Text style={styles.textLogin}> REGISTER </Text>
                </View>

                <View style={styles.containerSocial}>
                    <TouchableOpacity style={styles.buttonSocials}>
                        <GoogleSVG height={25} width={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocials}>
                        <FacebookSVG height={25} width={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocials}>
                        <TwitterSVG height={25} width={25} />
                    </TouchableOpacity>
                </View>

                <Text style={{textAlign:'center', color:'gray', marginBottom:15}}>Or, Register with Email ...</Text>

                <View style={styles.containerInput} >
                    <MaterialIcons name='alternate-email' size={20} color='purple' style={{marginRight: 8}} />
                    <TextInput placeholder='Email ID' keyboardAppearance='email-address' style={styles.textInput} />
                </View>

                <View style={styles.containerInput} >
                    <MaterialIcons name='person' size={20} color='purple' style={{marginRight: 8}} />
                    <TextInput placeholder='Full Name' keyboardAppearance='email-address' style={styles.textInput} />
                </View>

                <View style={styles.containerInput} >
                    <MaterialIcons name='lock' size={20} color='purple' style={{marginRight: 8}} />
                    <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} />
                </View>

                <View style={styles.containerInput} >
                    <MaterialIcons name='lock' size={20} color='purple' style={{marginRight: 8}} />
                    <TextInput placeholder='Confirm Password' secureTextEntry={true} style={styles.textInput} />
                </View>

                <View style={styles.containerInput} >
                    <AntDesign name='calendar' size={20} color='purple' style={{marginRight: 8}} />
                    <TextInput placeholder='Date of Birth' keyboardAppearance='email-address' style={styles.textInput} />
                </View>

                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.buttonText} >REGISTER</Text>
                </TouchableOpacity>

                <Text style={styles.textWithLogin}>Or, Login with...</Text>

                <View style={styles.containerLogin}>
                    <Text>Already registered</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={styles.textLogin2}>   Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    containerSafe:{
        justifyContent:'center',
    },
    viewContainer:{
        paddingHorizontal: 25,
    },
    viewHeader:{
        alignItems: 'center',
    },
    loginsvg:{
        transform: [{rotate: '-5deg'}],
    },
    textLogin:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'purple',
    },
    containerInput:{
        flexDirection: 'row',
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        marginBottom: 30,
        paddingBottom: 10,
    },
    buttonLogin:{
        backgroundColor: 'purple',
        padding:15,
        borderRadius: 10,
        marginBottom:30,
    },
    buttonText:{
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerSocial:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:30,
    },
    buttonSocials:{
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    containerLogin:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    textLogin2:{
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textWithLogin:{
        textAlign: 'center',
        color:'gray',
        marginBottom: 15,
    }
})