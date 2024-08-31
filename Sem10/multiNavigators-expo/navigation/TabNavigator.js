import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/HomeScreen';
import Profile from '../components/Profile';
import Setting from '../components/Setting';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarIconStyle:{display: 'none'},
            tabBarLabelPosition:'beside-icon'
        }}>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Settings' component={Setting}/>
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})