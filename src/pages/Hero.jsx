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
    <div className="h-[calc(100vh-48px)] md:h-[calc(100vh-72px)] px-4 pb-4 md:px-8 md:pb-7 font-inter">
      {/* background container */}
      <div
        className="h-full w-full bg-cover bg-center text-white rounded-xl md:rounded-2xl flex items-end"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* content */}
        <div className="w-full px-4 py-6 md:p-8 flex flex-col justify-end lg:justify-between lg:flex-row gap-4 lg:items-end">
          {/* animated name */}
          <h1
            className="text-primary font-[900] w-full flex"
            style={{
              fontSize: "clamp(3.75rem, 12vw + 1rem, 30rem)", // min 6xl, grows very big, max ~448px
              lineHeight: 0.75,
              margin: 0,
              padding: 0,
            }}
          >
            <div className="letter inline-block m-0 p-0">G</div>
            <div className="letter inline-block m-0 p-0">i</div>
            <div className="letter inline-block m-0 p-0">v</div>
            <div className="letter inline-block m-0 p-0">e</div>
            <div className="letter inline-block m-0 p-0">W</div>
            <div className="letter inline-block m-0 p-0">e</div>
            <div className="letter inline-block m-0 p-0">l</div>
            <div className="letter inline-block m-0 p-0">l</div>
          </h1>

          <p className="text-lg md:text-xl font-semibold tracking-wide w-full lg:w-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus maiores, ipsa natus ab cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
