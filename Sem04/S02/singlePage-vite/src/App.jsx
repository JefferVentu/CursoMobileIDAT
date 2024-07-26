import React from 'react'
import Figure from './components/Figure'
import NavBar from './components/NavBar'
import Section from './components/Section'

const App = () => {
  return (
    <>
      {/* /* <h1 className='text-3x1 text-red-700 font-extrabold underline'>Hola mundo</h1> */}
      <NavBar/>
      <main>
        <Section/>
        <Figure></Figure>
      </main>
      
    </>
  )
}

export default App