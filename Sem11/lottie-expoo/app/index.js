import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function index() {
    return (
        <View style = {styles.container}>
            <Animated.View entering={FadeInDown.delay(1000).duration(2000)}>
                <LottieView
                    style = {{width: 300, height: 300, alignSelf: 'center', marginTop: 10}}
                    source={require("../assets/animation/Animation - 1725894053415.json")}
                    autoPlay
                    loop
                />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({})