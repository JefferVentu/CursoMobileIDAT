import "./App.css"
import React, { useEffect } from 'react'
/*
// Hook useEffect
// Proporciona una forma de gestionar los efectos secundarios en un componente funcional
// Cuando se usa?
// * agregando un detector de eventos para un button
// * para obtener datos desde una API cuando se monta el componente.
// * para realizar una acción cuando cambian el estado de las propiedades.
// * para la limpieza de detectores de eventos cuando se desmonta el componente

// Sintaxis:
// * 1. Acepta un primer argumento como un callBack. Esta fución se ejecuta después de cada renderizado, pero depende del valor del segundo argumento.


// useEffect(()=>{
//   // bloque de instrucciones
// }, [someProp, someState]);
*/


const App = ({someProp}) => {

  useEffect(()=>{
    console.log("Se ejecuta cada render");
    console.log("incluso al iniciar");
  },);

  useEffect(()=>{
    console.log("nuevo valor de someProp", someProp);
  },[someProp]);

  useEffect(()=>{
    // bloque de instrucciones
    return ()=> console.log("componente desmontado");
  });

  return ":)";
}

export default App