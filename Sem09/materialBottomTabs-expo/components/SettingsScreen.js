import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#BF00FF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})