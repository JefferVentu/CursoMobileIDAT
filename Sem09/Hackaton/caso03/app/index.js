import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import InicioScreen from '../components/InicioScreen';
import PerfilScreen from '../components/PerfilScreen';
import SettingScreen from '../components/SettingScreen';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function index() {
    return (
        <Tab.Navigator screenOptions={{

            tabBarActiveTintColor: '#e91e63',

        }}>
            <Tab.Screen name='Inicio' component={InicioScreen} options={{
                tabBarLabel: 'Inicio',
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 18 },
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" color={color} size={size} />
                ),
                BarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'white',
                tabBarInactiveBackgroundColor: '#d6d4d9'

            }} />
            <Tab.Screen name='Perfil' component={PerfilScreen} options={{
                tabBarLabel: 'Perfil',
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 18 },
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="profile" color={color} size={size} />
                ),
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'white',
                tabBarInactiveBackgroundColor: '#d6d4d9'

            }} />
            <Tab.Screen name='Ajuste' component={SettingScreen} options={{
                tabBarLabel: 'Ajuste',
                tabBarLabelStyle: { fontWeight: 'bold', fontSize: 18 },
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="setting" color={color} size={size} />
                ),
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'white',
                tabBarInactiveBackgroundColor: '#d6d4d9'

            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})