import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VerParaderos from './VerParaderos';
import PointToPoint from './PointToPoint';
import SearchRoutes from './SearchRoutes';

const Tab = createBottomTabNavigator();

const Home = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Ver Paraderos" component={VerParaderos} />
            <Tab.Screen name="Punto a Punto" component={PointToPoint} />
            <Tab.Screen name="Buscar Rutas" component={SearchRoutes} />
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    map: {
        width: '100%',
        height: '100%',
    },
})