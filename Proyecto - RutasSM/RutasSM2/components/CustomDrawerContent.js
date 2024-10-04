import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth'; // Para obtener el usuario autenticado
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Para Firestore

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({ name: '', phone: '' });
    const [loading, setLoading] = useState(true);

    // Acceso a Firestore
    const auth = getAuth();
    const db = getFirestore();

    // Función para obtener los datos del usuario
    const fetchUserData = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, 'users', user.uid); // Cambia 'users' por el nombre de tu colección
                const userDoc = await getDoc(userDocRef);
                
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setUserInfo({ name: data.name, phone: data.numberphone }); // Cambia los campos según tu estructura en Firestore
                } else {
                    console.log('No such document!');
                }
            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
        } finally {
            setLoading(false); // Deja de cargar una vez obtenidos los datos
        }
    };

    // Se ejecuta al montar el componente
    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);  // Cierra la sesión en Firebase
            console.log('Sesión cerrada correctamente');
            navigation.replace('Login');  // Redirige al login después de cerrar sesión
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>

                <View style={styles.userInfoSection}>
                    {/* Muestra un indicador de carga mientras se obtienen los datos */}
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <>
                            <Image
                                source={{ uri: 'https://example.com/user-avatar.png' }} // Puedes usar una imagen de avatar aquí
                                style={styles.avatar}
                            />
                            <Text style={styles.userName}>{userInfo.name || 'Nombre no disponible'}</Text>
                            <Text style={styles.userPhone}>{userInfo.phone || 'Teléfono no disponible'}</Text>
                        </>
                    )}
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
