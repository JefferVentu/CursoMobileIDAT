import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Setting = () => {
    return (
        <View style={styles.container}>
            <Text>Setting</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})