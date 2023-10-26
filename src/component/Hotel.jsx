import React from 'react'
import room2 from  '../assets/room2.jpeg'
import HotelCard from './HotelCard'
import pool from '../assets/pool.jpeg'
import room3 from '../assets/room3.jpeg'
import hotelService from '../assets/hotelService.jpeg'
import room from '../assets/room.jpeg'
import zinc from '../assets/zinc.jpeg'

const Hotel = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 md:px-10 grid gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 '>
   
   <HotelCard  hs={room2} text='Comfort'/>
   <HotelCard  hs={pool} text='Luxury Pool'/>
   <HotelCard  hs={room3} text='Elegance'/>
   <HotelCard  hs={zinc} text='Hygiene'/>
   <HotelCard  hs={hotelService} text='Quality Service'/>
   <HotelCard  hs={room} text='Relax'/>
    </div>
  )
}

export default Hotel


