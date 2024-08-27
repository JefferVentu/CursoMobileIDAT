import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardWrapper from '../components/CardWrapper'

/*

Props(propiedades): Son las propiedades que transmiten valores, se utilizan para pasar datos desde los componentes principales a los componentes secundarios y los props son inmutables.

State (estado): Es un objeto que contiene información o propiedades sobre la aplicación. Es diferente a los props en el sentido que los datos dentro de un estados pueden cambiear y el componente se vuelve a renderizar con los nuevos datos. En general, un estado puede significar cualquier tipo de datos que necesiten ser rastreados.

*/

/*
CardWrapper: es un componente principal
Card: es un componente secundario
*/

export default function index() {
    return (
        <View style={styles.container}>
            <CardWrapper/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
})