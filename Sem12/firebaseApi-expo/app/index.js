import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/Login';
import Home from '../components/Home';

const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                options={{headerShown: false}}
                name='Login' 
                component={Login}
            />
            <Stack.Screen 
                options={{headerShown: false}}
                name='Home' 
                component={Home}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})