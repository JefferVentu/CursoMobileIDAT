import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from '../screens/PageA';
import PageB from '../screens/PageB';
import PageC from '../screens/PageC';

/*
Términos a conocer:
- createNativeStackNavigator: usamos esta función para crear 2 propiedades: "Screen" y "Navigator". Estos nos ayudan a crear el StackNavigator.

- NavigationContainer: es un componente que envuelve los navigation utilizados, se usa en el componente raíz de nuestra app
*/

const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator initialRouteName='PageC'>
            <Stack.Screen name = 'PageA' component={PageA}/>
            <Stack.Screen name = 'PageB' component={PageB}/>
            <Stack.Screen name = 'PageC' component={PageC}/>
        </Stack.Navigator>
            
        
    )
}

const styles = StyleSheet.create({})