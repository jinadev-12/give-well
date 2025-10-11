import React, { useState, useEffect } from "react";

function Empower() {
  const items = [
    "Mission & engagement",
    "Innovation & growth",
    "Transparency & impact",
    "Community & trust",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3050); // each item active for 3s
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="px-4 md:px-8 font-inter text-secondary">
      {/* container */}
      <div className="bg-[#f1e4e4] rounded-lg md:rounded-xl">
        {/* compnent padding */}
        <div className="px-4 md:px-8 py-16 md:py-20 lg:py-32">
          {/* component */}
          <div className="lg:relative">
            {/* empower list */}
            <div>
              {/* list heading */}
              <div className="mb-5 md:mb-8">
                <h4 className="text-base font-bold text-[#153a43]">Empower</h4>
              </div>

              {/* list items */}
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-5 md:py-6  flex items-center relative overflow-hidden transition-colors duration-1000 ease-in-out ${
                    activeIndex === index
                      ? "text-[#153a43]"
                      : "text-[#153a43]/40"
                  }`}
                >
                  <div className="mr-4 text-2xl font-bold transition-colors duration-1000 ease-in-out">
                    {`0${index + 1}`}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-[40px] font-bold transition-colors duration-1000 ease-in-out">
                    {item}
                  </div>

                  {/* border bottom container */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#153a43]/30">
                    {/* animated progress bar */}
                    <div
                      className={`h-[1px] bg-[#153a43] ${
                        activeIndex === index ? "animate-progress" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* empower card */}
            <div className="px-6 pb-8 pt-24 md:px-8 md:pb-8 bg-slate-400 rounded-xl relative lg:absolute -bottom-12 right-0 lg:right-12 lg:w-[400px] h-full lg:h-[500px] overflow-hidden">
              {/* Grain overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grain.png')] opacity-5 pointer-events-none z-10"></div>

              {/* Noise overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-3 pointer-events-none z-20"></div>

              {/* card content */}
              <div className="flex flex-col justify-between h-full relative z-30 ">
                <i className="ri-hand-heart-fill text-center text-8xl"></i>
                <div className="text-center">
                  <h5 className="font-bold text-2xl mb-4">
                    Mission & engagement
                  </h5>
                  <p className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam necessitatibus sint beatae dolorum, minima, aut,
                    inventore quos ducimus laboriosam optio cumque eaque hic ea
                    quasi. Dolor sed illo tempora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empower;
