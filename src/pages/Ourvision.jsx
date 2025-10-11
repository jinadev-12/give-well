import React from "react";
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
    <div
      style={{
        backgroundImage: "linear-gradient(#dbc5dc, #8fb0d6)",
      }}
      className="overflow-hidden mx-auto  py-20"
    >
      {/* container */}
      <div className="font-inter text-secondary mx-auto">
        {/* text */}

        <div className="flex flex-col gap-10 text-center max-w-[1300px] w-[90%] mx-auto mb-10">
          {/* heading-title */}
          <h4 className="text-base font-[600]">Our vision</h4>
          {/* text */}
          <div className="mx-auto text-center  md:w-[80%]">
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-[900] leading-tight  ">
              We imagine a future where kindness leads and progress follows.
            </h1>
          </div>
          {/* paragraph */}
          <div>
            <p className=" leading-normal text-xl px-16 mb-5">
              Our work is grounded in the belief that small actions can spark
              lasting change. As the world evolves, we stay committed to
              uplifting efforts that empower and connect. We act not out of
              duty, but from a deep hope for a better tomorrow—whatever shape it
              takes.
            </p>
          </div>
        </div>
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

export default Ourvision;
