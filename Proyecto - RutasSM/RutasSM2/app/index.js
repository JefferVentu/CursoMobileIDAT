import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../components/Login';
import Home from '../components/drawer/Home';
import Register from '../components/Register';
import Historial from '../components/drawer/Historial';
import RutasGuardadas from '../components/drawer/RutasGuardadas';
import Settings from '../components/drawer/Settings';
import Help from '../components/drawer/Help';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Mapa" component={Home} />
            <Drawer.Screen name="Historial" component={Historial} />
            <Drawer.Screen name="Rutas Guardadas" component={RutasGuardadas} />
            <Drawer.Screen name="Configuración" component={Settings} />
            <Drawer.Screen name="Ayuda" component={Help} />
        </Drawer.Navigator>
    );
};

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen 
                    options={{ headerShown: false }}
                    name='Login' 
                    component={Login}
                />
                <Stack.Screen 
                    options={{ headerShown: false }}
                    name='Register' 
                    component={Register}
                /> 
                <Stack.Screen 
                    options={{ headerShown: false }}
                    name='HomeDrawer' // Cambia el nombre para usarlo más adelante
                    component={HomeDrawer} // Usa el Drawer como componente
                /> 
            </Stack.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
});
