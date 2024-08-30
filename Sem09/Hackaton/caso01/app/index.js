import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingsScreen';
import { AntDesign } from '@expo/vector-icons';
import MessageScreen from '../components/MessageScreen';

const Drawer = createDrawerNavigator();

export default function Index() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Inicio'
                component={HomeScreen}
                options={{
                    drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' },
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='home' size={25} color={focused ? 'white' : 'black'} />
                    ),
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    drawerActiveBackgroundColor: 'purple',
                    drawerInactiveBackgroundColor: 'white'
                }}
            />
            <Drawer.Screen
                name='Perfil'
                component={ProfileScreen}
                options={{
                    drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' },
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='contacts' size={25} color={focused ? 'white' : 'black'} />
                    ),
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    drawerActiveBackgroundColor: 'purple',
                    drawerInactiveBackgroundColor: 'white'
                }}
            />
            <Drawer.Screen
                name='Mensaje'
                component={MessageScreen}
                options={{
                    drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' },
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='mail' size={25} color={focused ? 'white' : 'black'} />
                    ),
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    drawerActiveBackgroundColor: 'purple',
                    drawerInactiveBackgroundColor: 'white'
                }}
            />
            <Drawer.Screen
                name='Ajustes'
                component={SettingsScreen}
                options={{
                    drawerLabelStyle: { fontSize: 18, fontWeight: 'bold' },
                    drawerIcon: ({ focused }) => (
                        <AntDesign name='setting' size={25} color={focused ? 'white' : 'black'} />
                    ),
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'black',
                    drawerActiveBackgroundColor: 'purple',
                    drawerInactiveBackgroundColor: 'white',
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
