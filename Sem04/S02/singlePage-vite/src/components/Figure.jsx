import MyPicture from "../assets/img/mypicture.jpg"
import React from 'react'

const Figure = () => {
  return (
    <div className='pr-44 flex items-end relative'>
      <img src={MyPicture} className='z-10' alt="here is my picture"/>
      <div className="bg-orange-400 w-96 h-96 lg:w-[1000px] lg:h-[1000px] rounded-full absolute -right-45 -bottom-100 -z-10"></div>


    </div>
  )
}

export default Figure