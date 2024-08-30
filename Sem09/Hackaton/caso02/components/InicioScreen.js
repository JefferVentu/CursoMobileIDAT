import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InicioScreen = () => {
    return (
        <View style={styles.container}>
            <Text>InicioScreen</Text>
        </View>
    )
}

export default InicioScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center',
    }
})