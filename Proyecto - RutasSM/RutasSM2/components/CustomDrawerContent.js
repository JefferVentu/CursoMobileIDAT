import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.replace('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
                <DrawerItemList {...props} />

                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                        <Text style={styles.textbtn}>
                            Cerrar Sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutContainer: {
        marginBottom: 20,
        justifyContent: 'flex-end',
        flexGrow: 1,
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#ea2929',
        paddingHorizontal: 60,
        paddingVertical: 10,
    },
    textbtn: {
        color: 'white',
        fontSize: 20,
    },
});

export default CustomDrawerContent;
