import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('TabNavigator')}}>
                <Text>CLICK HERE GO TO HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})