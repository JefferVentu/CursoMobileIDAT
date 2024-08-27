import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const index = () => {

    const [products, setProductos] = useState([]);

    useEffect(()=>{
        getProductos();
    },[]);

    const getProductos = () =>{
        const URL = 'https://fakestoreapi.com/products';

        fetch(URL)
            .then(res=>res.json())
            .then(json=>
                // console.log(json)
                setProductos(json)
            );
    }
return (
    <View style = {styles.container}>
        <Text style = {styles.textList} >Product List</Text>
        <FlatList
        data={products}
        renderItem={({item})=> (
        <View>
            <Image style = {styles.imgProducts} source = {{uri : item.image}}/>
            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.price}</Text>
        </View>
        )}
        showsVerticalScrollIndicator = {false}
        />
    </View>
    )
}

export default index

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    textList: {
        color: 'purple',
        fontSize: 25,
        marginTop: 30,
    },
    imgProducts:{
        height: 250,
        width: 250,
        margin: 30,
    }
})