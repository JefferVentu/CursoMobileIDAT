import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from '../screens/OnBoardScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function appNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnBoardScreen}/>
            <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})