import React from 'react'
import visionone from "../assets/visionone.jpg";
import visiontwo from "../assets/visiontwo.jpg";
import visionthree from "../assets/visionthree.jpg";
import visionfour from "../assets/visionfour.jpg";
import visionfive from "../assets/visionfive.jpg";
import visionsix from "../assets/visionsix.jpg";
import visionseven from "../assets/visionseven.jpg";



function Ourvision() {
  return (
    // main
    <div className="overflow-hidden h-[100vh] bg-[#b9bdc9] mx-auto">
      {/* container */}
      <div className="">
        {/* text */}
        <div className=""></div>

        {/* image-container */}
        <div className="flex  gap-3 w-full h-[600px] m-auto">
          {/* top-left div */}
          <div className="flex items-center  w-[0%] md:w-[10%]  ">
            <img
              src={visionone}
              alt=""
              className="object-cover w-full h-[80%] rounded-2xl"
            />
          </div>

          {/* left div */}
          <div className="flex   w-[20%] md:w-[20%]  flex-col justify-between gap-3 py-4 md:py-0">
            <img
              src={visiontwo}
              alt=""
              className="h-[45%] w-full object-cover rounded-2xl"
            />
            <img
              src={visionseven}
              alt=""
              className="h-[55%] w-full object-cover rounded-2xl"
            />
          </div>

          {/* center div */}
          <div className="flex flex-none  items-center w-[50%] md:w-[40%] ">
            <img
              src={visionthree}
              alt=""
              className="md:h-[93%] h-full w-full object-cover rounded-2xl object-center"
            />
          </div>

          {/* right div */}
          <div className="flex flex-none  w-[20%] md:w-[20%] flex-col justify-between gap-3 py-4 md:py-0">
            <img
              src={visionfour}
              alt=""
              className="h-[45%] w-full object-cover rounded-2xl"
            />
            <img
              src={visionfive}
              alt=""
              className="h-[55%] w-full object-cover rounded-2xl"
            />
          </div>

          {/* top-right div */}
          <div className="flex items-center w-[0%] md:w-[10%]">
            <img
              src={visionsix}
              alt=""
              className="h-[80%] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourvision