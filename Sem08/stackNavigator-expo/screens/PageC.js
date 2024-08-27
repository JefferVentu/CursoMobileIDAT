import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const PageC = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('PageA')}>
                <Text style={styles.text}>Go to page A</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('PageB')}>
                <Text style={styles.text}>Go to page B</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageC

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})