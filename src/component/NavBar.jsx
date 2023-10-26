import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineAccountCircle, MdOutlineCancel} from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import {FaFacebook,FaTwitter,FaInstagram, FaTiktok,FaYoutube} from 'react-icons/fa'



const NavBar = () => {
const [nav,setNav]=useState(false);
const [logo,setLogo]= useState(false)
const handleNav = () => {
  setNav(!nav);
  setLogo(!logo)
};

  return (
    <nav className='w-full absolute z-10 flex justify-between items-center h-20'>

      {/* DESKSTOP VERSION */}

      <div className='p-4 font-bold ] text-white' >
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'} >SANDY BAY</h1>
      </div>

    <div className='hidden md:flex uppercase text-white'> 
        <Link className="p-4  hover:text-green-700">home</Link>
        <Link className="p-4  hover:text-green-700">games</Link>
        <Link className="p-4  hover:text-green-700">travel</Link>
        <Link className="p-4  hover:text-green-700">service</Link>
        <Link className="p-4  hover:text-green-700">view</Link>
    </div>

    {/* SEARCH AND PROFILE */}
    <div className='hidden md:flex p-4 mr-[4px] text-white' >
    <AiOutlineSearch className='mx-[5px]  hover:text-green-700' size={25}/>
    <MdOutlineAccountCircle  className="hover:text-green-700" size={25}/>
    </div>

     {/* HAMBUGGER */}
    <div onClick={handleNav}   className='md:hidden flex z-10 px-2'>
      {nav ? <MdOutlineCancel className='text-black'size={25}/> : <AiOutlineMenu className="text-white" size={25}/>  } 
    </div>

    {/* MOBILE DROPDOWN */}
     
    <div  onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col  durationf' :'absolute hidden left-[-100%] '}>
      
        <div className='pt-[-16px] font-bold'>
        <h1>SANDY BAY</h1>
        </div>
        
         
        <div className='flex flex-col uppercase text-[bold] '> 
        <Link className="border-b p-3  ">home</Link>
        <Link className="border-b p-3 ">games</Link>
        <Link className="border-b p-3 ">travel</Link>
        <Link className="border-b p-3 ">service</Link>
        <Link className="border-b p-3 ">view</Link>

         <div className='flex flex-col'>
        <button className="my-[3px] uppercase">search</button>
        <button className="uppercase">profile</button>
        </div>

         <div className='flex justify-between my-6 '>
            <FaFacebook className="icons"/>
            <FaTwitter className="icons"/>
            <FaInstagram className="icons"/>
            <FaTiktok className="icons"/>
            <FaYoutube className="icons"/>
         </div>
         </div>
    </div>
    
    </nav>

    

   


  )

}

export default NavBar
