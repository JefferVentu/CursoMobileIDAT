import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Settings = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.optionText}>Opción 1: Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Notifications')}
      >
        <Text style={styles.optionText}>Opción 2: Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Security')}
      >
        <Text style={styles.optionText}>Opción 3: Seguridad</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Help')}
      >
        <Text style={styles.optionText}>Opción 4: Ayuda</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})