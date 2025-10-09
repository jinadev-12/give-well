import React, { useEffect } from "react";
import { gsap } from "gsap";
import bg from "../assets/herobg.jpg";

function Hero() {
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".letter",
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //     }
  //   );
  // }, []);

  return (
    // section hero
    <div className="h-[100vh] p-4 md:px-8 md:pb-7 font-inter">
      {/* background container */}
      <div
        className="h-full w-full bg-cover bg-center text-white rounded-xl md:rounded-2xl flex items-end"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* content */}
        <div className="w-full px-4 py-6 md:p-8 flex flex-col justify-end lg:justify-between lg:flex-row gap-4 lg:items-end">
          {/* animated name */}
          <div
            className="flex text-[#ff8037] font-extrabold w-full lg:w-2/4"
            style={{
              fontSize: "clamp(4rem, 6vw, 9rem)", // min 2.5rem, max 9rem, grows with viewport
            }}
          >
            <div className="letter">G</div>
            <div className="letter">i</div>
            <div className="letter">v</div>
            <div className="letter">e</div>
            <div className="letter">W</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">l</div>
          </div>

          <p className="text-lg md:text-xl font-semibold tracking-wide w-full lg:w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus maiores, ipsa natus ab cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
