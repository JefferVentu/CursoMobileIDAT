import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
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

                <View style={styles.userInfoSection}>
                    <Image
                        source={{ uri: 'https://example.com/user-avatar.png' }} // Puedes usar una imagen de avatar aquí
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>User#001</Text>
                    <Text style={styles.userPhone}>+51 987 654 321</Text>
                </View>

                {/* Opciones Drawer */}

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
    userInfoSection: {
        padding: 20,
        backgroundColor: '#ffff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: -60,
        marginBottom: 10,
        backgroundColor: '#d9d9d9',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userPhone: {
        fontSize: 14,
        color: '#666',
    },
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
