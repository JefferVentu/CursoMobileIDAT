import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Historial = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.historyContainer}>
        <View style={styles.fechaContainer}>
          <Text style={styles.fecha}>22/09/2024</Text>
          <Text style={styles.fecha}>12:00 p.m.</Text>
        </View>
        <Text style={styles.ida}>P. Clínica</Text>
        <Text style={styles.destino}>P. Sistemas</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.fechaContainer}>
          <Text style={styles.fecha}>21/09/2024</Text>
          <Text style={styles.fecha}>3:52 p.m.</Text>
        </View>
        <Text style={styles.ida}>P. Industrial</Text>
        <Text style={styles.destino}>P. Gimnasio</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.fechaContainer}>
          <Text style={styles.fecha}>20/09/2024</Text>
          <Text style={styles.fecha}>5:56 p.m.</Text>
        </View>
        <Text style={styles.ida}>P. Biblioteca</Text>
        <Text style={styles.destino}>P. Industrial</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.fechaContainer}>
          <Text style={styles.fecha}>02/09/2024</Text>
          <Text style={styles.fecha}>8:40 a.m.</Text>
        </View>
        <Text style={styles.ida}>P. Industrial</Text>
        <Text style={styles.destino}>P. Sistemas</Text>
      </View>
      
    </ScrollView>

  )
}

export default Historial

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  historyContainer: {
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 25,
    borderColor: '#d9d9d9',
    borderBottomWidth: 2,
  },
  fecha: {
    fontSize: 16,
    color: 'gray',
  },
  fechaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ida: {
    fontSize: 22,
  },
  destino: {
    fontSize: 22,
    marginBottom: 10,
  },
})