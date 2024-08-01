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
  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) =>{
    // event : evento
    // preventDefault: método del objeto del evento en el que se puede llamar para evitar que se desencadene la acción predeterminada del evento.
    e.preventDefault();
    console.log(user,email);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" placeholder='Ingrese sus nombres' onChange={(e)=>setUser(e.target.value)} value={user} required/>

        <input type="text" placeholder='Ingrese su email' onChange={(e)=>setEmail(e.target.value)}  value={email} required/>

        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default App