import React, { useState, useEffect } from "react";

function Empower() {
  const items = [
    {
      title: "Mission & engagement",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam necessitatibus sint beatae dolorum, minima, aut, inventore quos ducimus laboriosam optio cumque eaque hic ea quasi. Dolor sed illo tempora.",
      bg: "bg-[#ffdede]",
      icon: "ri-hand-heart-fill",
    },
    {
      title: "Innovation & growth",
      paragraph:
        "Innovation drives progress. Our initiatives focus on embracing new ideas and growing together in every step.",
      bg: "bg-[#e0f7fa]",
      icon: "ri-speak-fill",
    },
    {
      title: "Transparency & impact",
      paragraph:
        "We value openness and clarity in every action, ensuring measurable impact for our stakeholders.",
      bg: "bg-[#e8f5e9]",
      icon: "ri-shake-hands-line",
    },
    {
      title: "Community & trust",
      paragraph:
        "Building strong communities is at our core. Trust and collaboration fuel our success.",
      bg: "bg-[#fff3e0]",
      icon: "ri-community-fill",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // State for mouse position
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4050);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleMouseMove = (e) => {
    const section = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - section.left) / section.width - 0.5) * 50;
    const y = ((e.clientY - section.top) / section.height - 0.5) * 50;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      className="p-4 md:p-8 font-inter text-secondary"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-[#f1e4e4] rounded-lg md:rounded-xl">
        <div className="px-4 md:px-8 py-16 md:py-20 lg:py-32">
          <div className="lg:relative">
            {/* empower list */}
            <div>
              <div className="mb-5 md:mb-8">
                <h4 className="text-base font-bold text-[#153a43]">Empower</h4>
              </div>

              {items.map((item, index) => (
                <div
                  key={index}
                  className={`py-5 md:py-6 flex items-center relative overflow-hidden transition-colors duration-1000 ease-in-out ${
                    activeIndex === index
                      ? "text-[#153a43]"
                      : "text-[#153a43]/40"
                  }`}
                >
                  <div className="mr-4 text-2xl font-bold transition-colors duration-1000 ease-in-out">
                    {`0${index + 1}`}
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-[40px] font-bold transition-colors duration-1000 ease-in-out">
                    {item.title}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#153a43]/30">
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
            <div
              className={`px-6 pb-8 pt-24 md:px-8 md:pb-8 rounded-xl relative lg:absolute -bottom-12 right-0 lg:right-12 lg:w-[350px] h-full lg:h-[500px] overflow-hidden ${items[activeIndex].bg}`}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            >
              {/* Grain overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grain.png')] opacity-5 pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-3 pointer-events-none z-20"></div>

              {/* card content */}
              <div className="flex flex-col justify-between h-full relative z-30">
                <i
                  className={`${items[activeIndex].icon} text-center text-8xl`}
                ></i>
                <div className="text-center">
                  <h5 className="font-bold text-2xl mb-4">
                    {items[activeIndex].title}
                  </h5>
                  <p className="font-semibold">
                    {items[activeIndex].paragraph}
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
