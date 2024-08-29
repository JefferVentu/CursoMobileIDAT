import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})