import React from 'react'
import Navder from './components/Navder'
import Navizq from './components/Navizq'

const App = () => {
  return (
    <>
      <div className='flex justify-center'>
       <div className='text-center w-[30%]'><Navizq/></div>
       <div className='text-center w-[30%]'><Navder/></div>
      </div>
    </>
  )
}

export default App