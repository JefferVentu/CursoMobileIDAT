import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Card: es un componente secundario

// const Card = (props) => {
//     return (
//         <View>
//             <Text>{props.name}</Text>
//             <Text>{props.age}</Text>
//         </View>
//     )
// }

// Podemos utilizar la destructuración para obtener solo las propiedades
const Card = ({name, age}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})