import React from "react";
import whiteBg from '../assets/greenBg.png'
import BlueBg from "../assets/blueBg.png";
import orangeBg from "../assets/stats-orange.jpg";
import speech from "../assets/stats-img2.jpg";
import convo from "../assets/stats-img4.jpg";


function Stats() {
  return (
    // stats
    <div className="font-inter text-secondary text px-4 md:px-8 py-16 md:py-24">
      {/* container */}
      <div className="max-w-[1400px] mx-auto">
        {/* upper / title and description */}
        <div className="md:flex gap-10 md:gap-20 mb-16">
          <h2 className="md:w-1/2 text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            From Quiet efforts to real results: The ripple effect of every
            donation
          </h2>
          <p className="md:w-1/2 text-gray-600 leading-relaxed text-lg">
            With every donation, we've been able to reach farther and do more.
            In just the past 12 months, we’ve provided resources to over 50
            grassroots initiatives, supported 100+ volunteers working on the
            ground, and directly impacted communities facing real
            challenges—with real solutions. From mental health support to
            educational access, you turned ideas into measurable change.
          </p>
        </div>

        {/* lower / stats grid */}
        <div
          className="
            grid grid-cols-1 gap-6
            md:grid-cols-2 md:grid-rows-3
            lg:grid-cols-3 lg:grid-rows-2
          "
        >
          {/* Big card */}
          <div
            className="
    relative overflow-hidden
    p-8 rounded-2xl shadow-sm flex flex-col justify-center items-start
    md:col-span-2 md:row-span-1
    lg:col-span-1 lg:row-span-2
    bg-cover bg-center
  "
            style={{ backgroundImage: `url(${orangeBg})` }}
          >
            {/* overlay (optional subtle fade to make text readable) */}
            <div className="absolute inset-0 bg-white/70" />

            {/* card content */}
            <div className="relative w-full">
              <h3 className="text-2xl font-bold mb-16">
                Products supported through local programs
              </h3>
              <div className="text-7xl font-extrabold w-full text-right border-b border-black/20 pb-2">
                256
              </div>
              <p className="text-gray-700 text-base text-right pt-2">
                Over 25,000 people directly supported through community
                programs, crisis response, and ongoing care initiatives.
              </p>
            </div>
          </div>

          {/* Remaining 4 cards */}
          <div className="bg-[#f9f9f9] overflow-hidden rounded-2xl shadow-sm flex flex-col justify-center items-start">
            <img src={convo} className="object-cover h-full" alt="" />
          </div>

          <div
            className="bg-[#f9f9f9] p-6 rounded-2xl shadow-sm flex flex-col justify-center items-start bg-cover bg-center"
            style={{ backgroundImage: `url(${BlueBg})` }}
          >
            <div className="relative w-full">
              <h3 className="text-2xl font-bold mb-16">
                Products supported through local programs
              </h3>
              <div className="text-7xl font-extrabold w-full text-right border-b border-black/20 pb-2">
                256
              </div>
              <p className="text-gray-700 text-base text-right pt-2">
                Over 25,000 people directly supported through community
                programs, crisis response, and ongoing care initiatives.
              </p>
            </div>
          </div>

          <div
            className="bg-[#f9f9f9] p-6 rounded-2xl shadow-sm flex flex-col justify-center items-start bg-cover bg-center"
            style={{ backgroundImage: `url(${whiteBg})` }}
          >
            <div className="relative w-full">
              <h3 className="text-2xl font-bold mb-16">
                Products supported through local programs
              </h3>
              <div className="text-7xl font-extrabold w-full text-right border-b border-black/20 pb-2">
                256
              </div>
              <p className="text-gray-700 text-base text-right pt-2">
                Over 25,000 people directly supported through community
                programs, crisis response, and ongoing care initiatives.
              </p>
            </div>
          </div>

          <div className="bg-[#f9f9f9] rounded-2xl shadow-sm flex flex-col justify-center items-start overflow-hidden">
            <img src={speech} className="object-cover h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
