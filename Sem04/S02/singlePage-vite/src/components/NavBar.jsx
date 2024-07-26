import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center px-40 py-4 md-5'>
      <header className='text-orange-800 font-bold text-lg'>Jefferson Ventura</header>
      <ul className='flex gap-10'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>

    <button className='outline outline-1 outline-orange-800 px-2 py-2 rounded-lg '>RESUMEN</button>

    </nav>
  )
}

export default NavBar