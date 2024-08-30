import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import InicioScreen from '../components/InicioScreen';
import PerfilScreen from '../components/PerfilScreen';
import ConfiScreen from '../components/ConfiScreen';
import { AntDesign, Octicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator
            initialRouteName='Inicio'
            activeColor='blue'
            barStyle={{
                backgroundColor:'#dedede',
            }}
        >
            <Tab.Screen
                name='Inicio'
                component={InicioScreen}
                options={{
                    tabBarIcon:()=><AntDesign name='home' size={25} color={'black'}/>
                }}
            />
            <Tab.Screen
                name='Buscar'
                component={PerfilScreen}
                options={{
                    tabBarIcon:()=><Octicons name='search' size={25} color={'black'}/>
                }}
            />
            <Tab.Screen
                name='Perfil'
                component={ConfiScreen}
                options={{
                    tabBarIcon:()=><AntDesign name='user' size={25} color={'black'}/>
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})