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
import CustomDrawerContent from '../components/CustomDrawerContent';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeDrawer = () => {
    return (
        
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                // headerShown: false,
                drawerActiveTintColor: '#007BFF',  
                drawerInactiveTintColor: '#000', 
                drawerStyle: {
                    flex: 1,
                    backgroundColor: '#fff', 
                },
            }}
        >
            <Drawer.Screen
                name="Mapa"
                component={Home}
                options={{
                    drawerIcon: ({ color }) => (
                        <AntDesign
                            name='book'
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen name="Historial" component={Historial} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon 
                            name='history' 
                            size={25} 
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Rutas Guardadas" component={RutasGuardadas} 
                options={{
                    drawerIcon: ({color}) => (
                        <Icon 
                            name="save" 
                            size={25} 
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Configuración" component={Settings} 
                options={{
                    drawerIcon: ({color}) => (
                        <AntDesign 
                            name='setting' 
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Ayuda" component={Help} 
                options={{
                    drawerIcon: ({color}) => (
                        <AntDesign 
                            name='question' 
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            
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
                    
                    name='HomeDrawer'
                    component={HomeDrawer} 
                    options={{ headerShown: false }}
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
