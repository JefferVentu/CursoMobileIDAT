import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

// CardWrapper: es un componente principal

const CardWrapper = () => {
    return (
        <View>
            <Card name = 'Jhon Bourner' age= '35'/>
            <Card name = 'James Bond' age= '50'/>
            <Card name = 'Roberto Carlos' age= '60'/>
            <Card name = 'Lionel Messi' age= '37'/>
            <Card name = 'Cristiano Ronaldo' age= '37'/>
            <Card name = 'Equis De' age= '12'/>
        </View>
    )
}

export default CardWrapper

const styles = StyleSheet.create({})