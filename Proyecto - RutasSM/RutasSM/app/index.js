import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
                name='Register' 
                component={Register}
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