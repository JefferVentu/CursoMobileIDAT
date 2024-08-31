import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import TabNavigator from '../navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='TabNavigator' component={TabNavigator}
                options={
                    {headerShown: false}
                }
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})