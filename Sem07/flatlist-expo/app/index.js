import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

/*

Propiedades del componente flatlist:
- data: es la fuente de elementos que debe representar el archivo, esta propiedad acepta un array de elementos para ser representados.
- renderItem: esta propiedad toma un elemento y devuelve un componente que se renderiza en la pantalla.
- keyExtractor: cada elemento debe tener una clave única. Esta clave se proporciona a la propiedad junto con la lista de componentes que se van a renderizar.

*/

export default function index() {

    const data = [
        {id:1, text: 'text1'},
        {id:2, text: 'text2'},
        {id:3, text: 'text3'},
        {id:4, text: 'text4'},
        {id:5, text: 'text5'},
        {id:6, text: 'text6'},
        {id:7, text: 'text7'},
        {id:8, text: 'text8'},
        {id:9, text: 'text9'},
    ]

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item})=>(
        <View style={styles.box}>
            <Text>{item.text}</Text>
        </View>
      )}
      showsVerticalScrollIndicator ={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        borderWidth: 3,
        width: 200,
        height: 200,
        alignItems:'center',
        justifyContent: 'center',
        margin: 20,
    }
})