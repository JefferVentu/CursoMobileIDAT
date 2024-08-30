import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import InicioScreen from '../components/InicioScreen';
import PerfilScreen from '../components/PerfilScreen';
import ConfiScreen from '../components/ConfiScreen';

const Tab = createMaterialBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator
            initialRouteName='Inicio'
            activeColor='blue'
            barStyle={{
                backgroundColor:'gray',
                fontSize: 23,
            }}
        >
            <Tab.Screen
                name='Inicio'
                component={InicioScreen}
                
            />
            <Tab.Screen
                name='Perfil'
                component={PerfilScreen}
            />
            <Tab.Screen
                name='Ajustes'
                component={ConfiScreen}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})