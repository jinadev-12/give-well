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
    <div className="h-[100vh] p-4 md:px-8 md:py-7 font-inter">
      {/* background container */}
      <div
        className="h-full w-full bg-cover bg-center text-white rounded-xl md:rounded-2xl flex items-end"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* content */}
        <div className="p-4 md:p-8 flex flex-col justify-end lg:flex-row gap-4 lg:items-end">
          {/* animated name */}
          <div className="text-5xl text-[#ff9659] md:text-[100px] font-extrabold flex">
            <div className="letter">G</div>
            <div className="letter">i</div>
            <div className="letter">v</div>
            <div className="letter">e</div>
            <div className="letter">W</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">l</div>
          </div>

          <p className="text-lg md:text-xl tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus maiores, ipsa natus ab cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
