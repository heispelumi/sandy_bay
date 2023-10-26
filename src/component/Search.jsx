import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1260px] mx-auto py-8 px-4 grid lg:grid-cols-3 md:px-10 gap-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly ">
        <div>
          <h1 className="uppercase p-1">
            Luxury included vacation for two people
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum
            explicabo quaerat. Accusantium quasi odio laborum ipsa iusto, a
            praesentium ipsam. Praesentium cupiditate nobis similique nesciunt
            animi tempore, distinctio amet. Quo sed, culpa repudiandae vitae
            omnis doloribus ipsa eos aliquid magni praesentium, quisquam ab ex?
            Alias quisquam autem ad aliquid ipsa? Dolores esse autem sunt eos
            eum, exercitationem quis dolorem. Voluptatem doloribus, commodi
            magni praesentium, nesciunt minima earum eius et eum aliquam debitis
            quasi iste aperiam culpa alias cumque exercitationem, excepturi quo
            suscipit libero vero! Ipsa at consectetur labore iste?
          </p>
        </div>

        <div className="grid grid-rows-none sm:grid-cols-2 md:grid-cols-3 gap-8  md:flex justify-evenly">
          <div className="flex flex-col lg:flex-row items-center text-center  ">
            <button>
              <RiCustomerService2Line size={25} />
            </button>
            <div>
              <h3 className="font-bold py-2">LEADING SERVICE</h3>
              <p className="py-1">All-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center  text-center  ">
            <button>
              < MdTravelExplore size={25} />
            </button>
            <div>
              <h3 className="font-bold py-2">LEADING SERVICE</h3>
              <p className="py-1">All-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border   shadow-xl items-center text-center p-5">
         <p>Get AN ADDITIONAL 10% OFF </p>
         <p className="py-2">12 HOURS LEFT</p>
         <p className="bg-black text-white py-3"> BOOK NOW AND SAVE</p>
         <div>
          <form className="w-full"> 
          <div className="flex flex-col">
            <label className="text-start my-3">Hotel lodge </label>
             <select >
              <option> Diamond Room</option>
              <option> Gold Room</option>
              <option> Silver Room</option>

             </select>
          </div>

          <div className="flex text-start flex-col">
            <label className="text-start mt-3 rounded-md p-2" >Check-in </label>
            <input type="date" /> 
            </div>
             
            <div className="flex flex-col">
            <label className="text-start mt-3 rounded-md p-2">Check-out</label>
            <input type="date" /> 
            </div>

          </form>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
