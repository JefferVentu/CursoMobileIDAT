import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
    {
        id:1, 
        pais: 'Argentina', 
        imagen:'', 
        grupo: 'GRUPO A'
    },
    {
        id:2, 
        pais: 'Colombia', 
        imagen:'', 
        grupo: 'GRUPO B'
    },
    {
        id:3, 
        pais: 'Uruguay', 
        imagen:'', 
        grupo: 'GRUPO C'
    },
    {
        id:4, 
        pais: 'Brasil', 
        imagen:'', 
        grupo: 'GRUPO D'
    },
    {
        id:5, 
        pais: 'Peru', 
        imagen:'', 
        grupo: 'GRUPO A'
    },
];

const renderItem = ({item, onPress, backgroundColor, textColor}) =>{
    <TouchableOpacity>
        
    </TouchableOpacity>
}

export default function index() {

    return (
        <ScrollView>
            <View>

            </View>
        </ScrollView>
    )
}