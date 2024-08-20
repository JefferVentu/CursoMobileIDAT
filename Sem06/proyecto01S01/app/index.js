import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function index() {
    
  return (
    <View style = {styles.container}>
      <Text>index</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
