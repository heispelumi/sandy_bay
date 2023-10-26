import React from 'react'
import beachbar from '../assets/beach bar.jpeg'
import horse from '../assets/horse.jpeg'
import vollyball  from '../assets/vollyball.jpeg'
import dude  from '../assets/dude.jpeg'
import surfers  from '../assets/surfers.jpeg'



const Games = () => {
  return (
    <div className="max-w-[1240] mx-auto py-8 px-4 text-center">
    <h1>Games & Entertainment </h1>
    <p className="pb-[20px]">including food and snacks</p>

     <div className="grid grid-rows-none  md:px-10 md:grid-cols-5 py-4 gap-2 md:gap-3">
     <img className='image w-full h-full object-cover col-span-2 md:col-span-3 md:row-span-2' src={beachbar} alt="/" />
     <img className='image w-full h-full object-cover ' src={horse} alt="/" />
     <img className='image w-full h-full object-cover'  src={vollyball} alt="/" />
     <img className='image w-full h-full object-cover' src={dude} alt="/" />
     <img className='image w-full h-full object-cover' src={surfers} alt="/" />
     </div>
    </div>
  )
}
 
export default Games
