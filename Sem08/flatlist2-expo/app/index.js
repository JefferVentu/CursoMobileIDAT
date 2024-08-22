import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const index = () => {

    const [products, setProductos] = useState([]);

    const getProductos = () =>{
        const URL = 'https://fakestoreapi.com/products';

        fetch(URL)
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
return (
    <View style = {styles.container}>
        <Text style = {styles.textList} >Product List</Text>
        <FlatList
        data={products}
        renderItem={()=> (
        <View>
            <Image style = {styles.imgProducts} source = {{}}/>
            <Text>price</Text>
        </View>
        )}
        />
    </View>
    )
}

export default index

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textList: {
        color: 'white',
        fontSize: 25,
        marginTop: 30,

    }
})