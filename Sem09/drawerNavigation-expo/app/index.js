import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingsScreen';
import { AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export default function index() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
            name = 'Home'
            component={HomeScreen}
            options={{
                drawerLabelStyle : {fontSize: 18, fontWeight: 'bold'},
                drawerIcon: ()=> <AntDesign name = 'home' size = {25} style={{color: 'green'}}/>,
                drawerActiveTintColor : 'red',
                drawerInactiveTintColor: 'pink',
                drawerActiveBackgroundColor: 'blue',
                drawerInactiveBackgroundColor: 'white'
            }}
            />
            <Drawer.Screen
            name = 'Profile'
            component={ProfileScreen}
            options={{
                drawerLabelStyle : {fontSize: 18, fontWeight: 'bold'},
                drawerIcon: ()=> <AntDesign name = 'profile' size = {25} style={{color: 'green'}}/>,
                drawerActiveTintColor : 'red',
                drawerInactiveTintColor: 'pink',
                drawerActiveBackgroundColor: 'blue',
                drawerInactiveBackgroundColor: 'white'
            }}
            />
            <Drawer.Screen
            name = 'Settings'
            component={SettingsScreen}
            options={{
                drawerLabelStyle : {fontSize: 18, fontWeight: 'bold'},
                drawerIcon: ()=> <AntDesign name = 'setting' size = {25} style={{color: 'green'}}/>,
                drawerActiveTintColor : 'red',
                drawerInactiveTintColor: 'pink',
                drawerActiveBackgroundColor: 'blue',
                drawerInactiveBackgroundColor: 'white'
            }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})