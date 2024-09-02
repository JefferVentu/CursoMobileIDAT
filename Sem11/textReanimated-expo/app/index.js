import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function index() {

    const [maxlines, setMaxlines] = useState(2);
    
    const showText = () => {
        setTimeout(()=>{
            maxlines == 2 ? setMaxlines(0):setMaxlines(4)
        }, 1000);
    }

    return (
        <View style= {styles.container}>
            <Text style= {styles.textheader}>REACT NATIVE REANIMATED</Text>
            <View style= {styles.viewbox}>
                <Button title={maxlines == 2 ? 'Ver más': 'Close'} onPress={showText}/>
                <Animated.View entering={FadeInDown.delay(500).duration(1000)}>
                    <Text style= {styles.textbody} numberOfLines={maxlines}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit hac per, turpis tempor aliquam elementum integer donec diam condimentum, mauris curabitur gravida senectus id massa sodales erat. Nibh himenaeos suspendisse mus nulla nascetur rhoncus tempus senectus risus at fames imperdiet, turpis cras dignissim gravida viverra euismod tortor erat penatibus libero vestibulum. Lacinia accumsan neque fusce semper venenatis hendrerit est sollicitudin interdum purus mattis, natoque praesent sapien commodo elementum nisl tempor scelerisque himenaeos nam ultrices quisque, mi montes varius augue cubilia ac et arcu sed enim.
                    </Text>
                </Animated.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'green',
        alignItems:'center',
        justifyContent: 'center',
    },
    textheader:{
        fontSize: 25,
        marginBottom: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    viewbox:{
        backgroundColor: 'azure',
        borderRadius: 10,
        padding: 20,
    },
    textbody:{
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },
})