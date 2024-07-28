import React from 'react'
import Navder from './components/Navder'
import Navizq from './components/Navizq'

const App = () => {
  return (
    <>
      <div className='flex justify-center'>
       <div className='text-center'><Navizq/></div>
       <div className='text-center'><Navder/></div>
      </div>
    </>
  )
}

export default App