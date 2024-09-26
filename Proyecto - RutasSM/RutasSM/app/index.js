import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/Login';

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
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})