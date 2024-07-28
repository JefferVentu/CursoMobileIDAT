import './App.jsx'
import React, { useState } from 'react'

// HOOK USESTATE
// Permite usar variables de estado dentro de un componente funcional. Nos restorna siempre un array con 2 elementos

// Ejemplo 01
/*
const App = () => {

  const [count, setCount]= useState(0);

  const handleClick = () =>{
    setCount(count+1);
  }

  return (
    <div className='text-center'>
      App
      <h1>Welcome to the counter of live</h1>
      <button onClick={handleClick}>Count is: {count}</button>
    </div>
  )
}

export default App
*/

// Ejemplo 02 - formulario
const App = () => {
  
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  
  return (
    <div className='text-center'>
      <form action="">
        <input type="text" placeholder='Ingrese sus nombres'/>
        <input type="text" placeholder='Ingrese su email'/>
      </form>
    </div>
  )
}

export default App