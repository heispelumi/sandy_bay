import React from 'react'
import beach from '../assets/beach.jpeg'
import {BsSearch} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={beach} className="w-full h-full object-cover" alt="/" />
      
      <div className='h-full w-full top-0 left-0 absolute bg-gray-900/20'>

       <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center text-center text-white p-4' > 
      <h1>First Class Travel</h1>
      <h2 className="pb-4">Top 1% Location Africa</h2>
     
      <form className='flex justify-between items-center max-w-[700px] mx-auto border w-full p-1 rounded-md text-black bg-gray-100/90 '>
        <div>
        <input type="text " className='bg-transparent w-[200px] sm:w-[600px] focus:outline-none font-[poppins]' placeholder='Search Destinations..'/>
        </div>
       

        <div>
        <button><BsSearch size={25} className='icons'  style={{color : '#ffffff'}} /></button> 
         </div>
        
      </form>
       </div>
      </div>
    </div>
  )
}

export default Hero
