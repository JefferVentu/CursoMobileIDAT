import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../components/Inicio';
import ProfileScreen from '../components/Perfil';

const Drawer = createDrawerNavigator();
const ArrayScreen = [
    { nombre: 'Inicio', type: AntDesign, icono: 'home', component: HomeScreen, },
    { nombre: 'Perfil', type: AntDesign, icono: 'user', component: ProfileScreen, },
];
function UsuarioDrawerContent(props) {
    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem label="Soporte" onPress={() => alert('Enlace del Soporte')} />
        </DrawerContentScrollView>
    );
}
export default function index() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: 'blue',
            drawerStyle: {

                width: 240,
            }
        }}
            drawerContent={(props) => <UsuarioDrawerContent{...props} />}
        >
            {ArrayScreen.map((item, index) => {
                return (
                    <Drawer.Screen key={index} name={item.nombre} component={item.component}
                        options={{
                            item,
                            drawerIcon: ({ color, size, focused }) => (
                                <AntDesign name={item.icono} size={size} color={color} />
                            ),

                        }}
                    />
                )
            })}


        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})