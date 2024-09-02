import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import Home from '../components/Home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Messi from '../assets/images/messi.jpg'
import Backups from '../components/Backups';

const Drawer = createDrawerNavigator();

export default function index() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView>
                        <View style={styles.containerHeader}>
                            <Image
                                source={Messi}
                                style={{ width: 200, height: 200, borderRadius: 150 }}
                            />
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Lionel Messi</Text>
                        </View>
                        <DrawerItemList {...props} />
                    </SafeAreaView>
                )
            }}
        >
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: () => (
                        <MaterialCommunityIcons name='home' size={22} color='purple' />
                    )
                }}
            />

            <Drawer.Screen
                name='Backups'
                component={Backups}
                options={{
                    drawerLabel: 'Backups',
                    title: 'Backups',
                    drawerIcon: () => (
                        <Ionicons name='archive' size={22} color='purple' />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        height: 250,
        width: '100%',
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',

    }
})