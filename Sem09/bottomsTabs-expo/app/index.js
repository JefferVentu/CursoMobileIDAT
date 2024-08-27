import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import DashboardScreen from '../components/DashboardScreen';

const Tab = createBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIconStyle:{display: 'none'}, 
                tabBarLabelPosition: 'beside-icon',
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveBackgroundColor: 'blue',
                    tabBarInactiveBackgroundColor: 'white',
                }}
            />
            <Tab.Screen 
                name='Settings' 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveBackgroundColor: 'blue',
                    tabBarInactiveBackgroundColor: 'white',
                }}
            />
            <Tab.Screen 
                name='Dashboard' 
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15},
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'green',
                    tabBarActiveBackgroundColor: 'blue',
                    tabBarInactiveBackgroundColor: 'white',
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
})