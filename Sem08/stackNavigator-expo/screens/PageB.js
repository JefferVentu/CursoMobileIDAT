import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const PageB = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('PageA')}>
                <Text style={styles.text}>Go to page A</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageB

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})