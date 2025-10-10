import React from 'react'
import ourteamone from "../assets/ourteam-1.jpg";
import ourteamtwo from "../assets/ourteam-2.jpg";
import ourteamthree from "../assets/ourteam-3.jpg";

function Ourteam() {
  return (
    // main
    <div className="py-20">
      {/* container */}
      <div className="w-[90%] max-w-[1300px] text-secondary mx-auto font-inter">
        {/* container-box */}
        <div className="flex flex-col gap-10 text-center">
          {/* heading-title */}
          <h4 className="text-base font-[600]">Our team</h4>
          {/* text */}
          <div className="mx-auto text-center  md:w-[80%]">
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-[900] leading-tight  ">
              Thanks to
              <span className="inline-block">
                <img
                  src={ourteamtwo}
                  alt=""
                  className="inline-block  w-[2em] rounded-lg mx-3 lg:w-[90px]"
                />
              </span>
              our clients, friends, partners. Thank you to our
              <span className="inline-block">
                <img
                  src={ourteamthree}
                  alt=""
                  className="inline-block w-[2em]  rounded-lg mx-3 lg:w-[90px]"
                />
              </span>
              team of volunteers
              <span className="inline-block">
                <img
                  src={ourteamone}
                  alt=""
                  className="inline-block w-[2em] rounded-lg mx-3 lg:w-[90px]"
                />
              </span>
              who made this journey possible.
            </h1>
          </div>
          {/* button */}
          <div>
            <button className="bg-secondary text-white py-2 px-8 rounded-3xl hover:bg-[#225763]">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam