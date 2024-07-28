import React from 'react'
import Peru from './components/Peru'
import Argentina from './components/Argentina'
import Brasil from './components/Brasil'

const App = () => {
  return (
    <>
      <div className='flex'>
        <Peru/>
        <Argentina/>
        <Brasil/>
      </div>
    </>
  )
}

export default App