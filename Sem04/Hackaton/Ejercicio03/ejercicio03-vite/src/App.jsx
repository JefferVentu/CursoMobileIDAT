import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [pais, setPais] = useState("Perú");

  return (
    <>
      <nav className='text-center'>
        <div className='text-4xl font-bold text-blue-900'>
          ¿Quién ganará la copa América? : {pais}!
        </div>
        <div>
          <button className='border rounded p-2 m-2 px-[10%] bg-gray-50 focus:border-black focus:border-4 active:border-black' type='buttom' onClick={()=>setPais("Perú") }>Perú</button>
          <button className='border rounded p-2 m-2 px-[10%] bg-gray-50 focus:border-black focus:border-4 active:border-black' type='buttom' onClick={()=>setPais("Argentina") }>Argentina</button>
          <button className='border rounded p-2 m-2 px-[10%] bg-gray-50 focus:border-black focus:border-4 active:border-black' type='buttom' onClick={()=>setPais("Brasil") }>Brasil</button>
          <button className='border rounded p-2 m-2 px-[10%] bg-gray-50 focus:border-black focus:border-4 active:border-black' type='buttom' onClick={()=>setPais("EEUU") }>EEUU</button>
        </div>
      </nav>
    </>
  )
}

export default App