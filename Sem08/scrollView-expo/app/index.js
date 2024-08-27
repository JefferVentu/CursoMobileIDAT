import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Image 1</Text>
                <Image/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})