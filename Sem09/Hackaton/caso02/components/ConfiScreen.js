import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ConfiScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ConfiScreen</Text>
        </View>
    )
}

export default ConfiScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'peru',
        alignItems: 'center',
        justifyContent: 'center',
    }
})