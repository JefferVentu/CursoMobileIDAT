import { StyleSheet , View, Text , Image, TextInput, Button, TouchableOpacity} from 'react-native'
import React from 'react'


/*

Componentes básicos

View
- Es el componennte más básico para el diseño de la interfaz de usuario. Es como un <div> y actúa como un componente contenedor que puede agrupar los componentes secundarios

Text
- Es otro componente fundamental de ract Native. Se puede utilizar en cualquier lugar dentro de la aplicación para mostrar datos textuales.

Image
- Este componente procesa y muestra imágenes. Se puede utiulizar para mostrar imágenes estáticas y no estáticas. Además se puede utilizar para mostrar recursos que no son de imagen y archivos.

Text input:
- Este componente maneja la entrada delusuario, es una parte crucial de la creación de una aplicación interactiva

ScrollView:
- Este componente nos ayuda a visualizar y desplazarnos de manera horizontal y vertical para ver todos los datos renderizados por la aplicación.

StyleSheet:
- Este componente se utiliza para aplicar estilo a las aplicaciones en react native. Se puede utliziar para mejorar la estética y el aspecto de la aplicación.
*/

export default function index() {
  return (
    <View style = {styles.container}>
      {/* children components */}
      <View>
        <Text style={styles.text}>Bienvenidos</Text>
      </View>
      <Text numberOfLines={2}> lorem ipsum is simply dummasdqwyeuio aousydoiuqipowe oiauysoduopquwe ouasoiduoaisd oiquweiouaoisd oiuaosiduaoisd  </Text>

      <Image source={require('../assets/images/favicon.png') } style ={styles.image} />

      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Liga_de_F%C3%BAtbol_Profesional_-_Liga_1_%28Per%C3%BA%29.jpg/800px-Liga_de_F%C3%BAtbol_Profesional_-_Liga_1_%28Per%C3%BA%29.jpg'}} style ={styles.image} />

      <TextInput placeholder='Enter your name' style = {styles.input} />

      <Button title='PRESS ME' onPress={()=> alert('button simple')}/>

      <TouchableOpacity onPress={()=>alert('Touchable button')}>
        <Text>
          TouchableOpacity
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  text :{
    color: 'yellow',
    fontSize: 25,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  image:{
    height: 120,
    width: 120,
    borderRadius: 20,
    marginTop: 50,
  },

  input:{
    height:40,
    width: 200,
    margin:15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'green',
  }
})

