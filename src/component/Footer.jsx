import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const footer = () => {
  return (
  <div className="w-full bg-gray-100 py-16">
   {/* CONTAINER */}
   <div className="max-w-[1240px] mx-auto flex flex-col px-4">

    <div className="sm:flex text-center items-center justify-between">
        <h1>SANDY BAY</h1>

        <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icons"/>
            <FaTwitter className="icons"/>
            <FaInstagram className="icons"/>
            <FaTiktok className="icons"/>
            <FaYoutube className="icons"/>
        </div>
   </div>
     
     <div className="flex md:flex  justify-between sm:justify-between">
        <div className="flex flex-col uppercase">
        <Link className="p-2 ">about</Link>
        <Link className="p-2">games</Link>
        <Link className="p-2">travel</Link>
        <Link className="p-2">service</Link>
        <Link className="p-2">view</Link>
        </div>

        <div>
        <div className="flex md:flex flex-col uppercase" >
        <Link className="p-2 ">home</Link>
        <Link className="p-2">partnership</Link>
        <Link className="p-2">sponsorships</Link>
        <Link className="p-2">newsletter</Link>
        <Link className="p-2">advertising</Link>
        </div>
        </div>
     </div>



   </div>



  </div>

       

  );
};

export default footer;
