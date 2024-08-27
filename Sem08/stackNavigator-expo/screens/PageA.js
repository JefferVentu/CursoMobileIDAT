import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PageA = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('PageB')}>
                <Text style={styles.text}>Go to page B</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageA

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})