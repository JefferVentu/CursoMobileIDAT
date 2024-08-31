import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text>GO TO LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})