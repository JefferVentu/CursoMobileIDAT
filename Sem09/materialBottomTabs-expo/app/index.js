import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingsScreen';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='red'
            barStyle={{backgroundColor: '#FF80ED'}}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    tabBarIcon:()=><AntDesign name='home' size={25} style={{color: 'blue'}}/>
                }}
            />
            <Tab.Screen 
                name='Profile' 
                component={ProfileScreen}
                options={{
                    tabBarIcon:()=><MaterialCommunityIcons name='account' size={25} style={{color: 'blue'}}/>
                }}
            />
            <Tab.Screen 
                name='Settings' 
                component={SettingsScreen}
                options={{
                    tabBarIcon:()=><Ionicons name='settings' size={25} style={{color: 'blue'}}/>
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})