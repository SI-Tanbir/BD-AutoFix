import React from "react";
import { TbCalendarClock } from "react-icons/tb";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Calling = () => {
  // this is calling card component

  return (
    <div className="place-items-center my-10">
      <div className="flex w-[1000px] p-10 bg-black text-white text-center gap-14 justify-center rounded text-xl">
  

        <div className="flex">
          <div > <TbCalendarClock className="text-5xl"/> </div>
          <div>
            <p>We are open monday-friday</p>
            <h5>7:00 am - 9:00 pm</h5>
          </div>
        </div>

        <div className="flex">
          <div><MdOutlinePermPhoneMsg className="text-5xl"/> </div>
          <div>
            <p>Have a question?</p>
            <h5>+2546 251 2658</h5>
          </div>
        </div>

        <div className="flex">
          <div> <FaMapLocationDot className="text-5xl"/>
          </div>
          <div>
            <p>Need a repair? our address</p>
            <h5>Liza Street, New York</h5>
          </div>
        </div>

        {/* 
<div>
  
</div>
<div>
   
</div> */}
      </div>
    </div>
  );
};

export default Calling;
