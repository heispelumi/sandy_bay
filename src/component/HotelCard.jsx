import React from "react";

const HotelCard = (props) => {
  return (
    <div className=" relative ">
      <img  className="images object-cover w-full h-full" src={props.hs} alt="/" />

      <div className="bg-gray-900/30 absolute top-0 right-0 w-full h-full">
        <p className="right-4 bottom-4 text-xl text-white absolute text-bold">
          {props.text}
        </p>

      </div>
    </div>
  );
};

export default HotelCard;
