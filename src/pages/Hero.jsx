import React, { useEffect,useRef } from "react";
import { gsap } from "gsap";
import bg from "../assets/herobg.jpg";

function Hero() {


const bgRef = useRef(null);


useEffect(() => {
  const ctx = gsap.context(() => {


    // bgimage
    gsap.fromTo(
      bgRef.current,
      { scale: 1.03, autoAlpha: 0 }, // start
      {
        scale: 1.0,
        autoAlpha: 1, // end
        duration: 1,
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top 80%",
        },
      }
    );


    // heading
    gsap.from(letterRefs.current, {
      opacity: 0,

      stagger: { each: 0.1, from: "random" },
      delay:0.7,
      duration: 1.5,
      ease: "power4.out",
    });

  }, bgRef);
   return () => ctx.revert();
}, []);



  const letters = ["G", "i", "v", "e", "W", "e", "l", "l"];
  const letterRefs = useRef([]);

  

  return (
    // section hero
    <div className="h-[calc(100vh-48px)] md:h-[calc(100vh-72px)] px-4 pb-4 md:px-8 md:pb-7 font-inter">
      {/* background container */}
      <div ref={bgRef}
        className="h-full w-full bg-cover bg-center text-white rounded-xl md:rounded-2xl flex items-end"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* content */}
        <div className="w-full px-4 py-6 md:p-8 flex flex-col justify-end lg:justify-between lg:flex-row gap-4 lg:items-end">
          {/* animated name */}
         

          <h1
            className="text-primary font-[900] w-full flex"
            aria-label="GiveWell"
          >
            {letters.map((letter, index) => (
              <div
                key={index}
                ref={(el) => (letterRefs.current[index] = el)}
                aria-hidden="true"
                style={{
                  fontSize: "clamp(3.75rem, 12vw + 1rem, 30rem)", // min 6xl, grows very big, max ~448px
                  lineHeight: 0.75,
                  margin: 0,
                  padding: 0,
                }}
              >
                {letter}
              </div>
            ))}
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
