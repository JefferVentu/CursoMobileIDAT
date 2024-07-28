import React from 'react'

const Navizq = () => {
  return (
    <div>
      <h1 className='p-8 font-bold'>BUSINESS</h1>
      <h2 className='px-10 py-2'>Please login to your account</h2>
      <input type="text" id='Username' name='Username' placeholder='Username' className='border rounded p-2 m-2'/>
      
      <br />
      <input type="password" id='Password' name='Password' placeholder='Password' className='border rounded p-2 m-2'/>
      
      <br />
      <button className='m-4 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white py-2 px-14 rounded'>INGRESAR</button>
      
      <br />
      
    </div>
  )
}

export default Navizq