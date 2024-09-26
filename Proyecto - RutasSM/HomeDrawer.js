import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './drawer/Home';
import Historial from './drawer/Historial'
import RutasGuardadas from './drawer/RutasGuardadas'
import Settings from './drawer/Settings'
import Help from './drawer/Help'

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Historial" component={Historial} />
            <Drawer.Screen name="Rutas Guardadas" component={RutasGuardadas} />
            <Drawer.Screen name="Configuración" component={Settings} />
            <Drawer.Screen name="Ayuda" component={Help} />
        </Drawer.Navigator>
    )
}

export default HomeDrawer

const styles = StyleSheet.create({})