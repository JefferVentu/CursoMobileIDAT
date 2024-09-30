import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import VerParaderos from '../VerParaderos';
import PointToPoint from '../PointToPoint';
import SearchRoutes from '../SearchRoutes';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 70, 
                    paddingBottom: 0,
                },
                tabBarIconStyle: {
                    width: 60, // Ajusta el tamaño del área de los íconos
                    height: 60,
                },
                
            }}
        >
            <Tab.Screen 
                name="Ver Paraderos" 
                component={VerParaderos}
                options={{
                    tabBarLabel: 'Información',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15, marginBottom:10},
                    tabBarActiveTintColor: '#007BFF',
                    tabBarInactiveTintColor: '#007BFF',
                    tabBarActiveBackgroundColor: '#D9D9D9',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarIcon:() => (
                        <AntDesign name='car' size={40} style={{color: '#007BFF'}} />
                    ),
                    headerShown: false, 
                }}
            />
            <Tab.Screen 
                name="Punto a Punto" 
                component={PointToPoint}
                options={{
                    tabBarLabel: 'Punto a Punto',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15, marginBottom:10},
                    tabBarActiveTintColor: '#007BFF',
                    tabBarInactiveTintColor: '#007BFF',
                    tabBarActiveBackgroundColor: '#D9D9D9',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarIcon:() => (
                        <AntDesign name='flag' size={40} style={{color: '#007BFF'}} />
                    ),
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="Buscar Rutas" 
                component={SearchRoutes}
                options={{
                    tabBarLabel: 'Ver Paraderos',
                    tabBarLabelStyle: {fontWeight: 'bold', fontSize: 15, marginBottom:10},
                    tabBarActiveTintColor: '#007BFF',
                    tabBarInactiveTintColor: '#007BFF',
                    tabBarActiveBackgroundColor: '#D9D9D9',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarIcon:() => (
                        <AntDesign name='enviroment' size={40} style={{color: '#007BFF'}} />
                    ),
                    headerShown: false,
                }} 
            />
        </Tab.Navigator>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

