import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Mission() {
   useEffect(() => {
     gsap.fromTo(
       ".line",
       { opacity: 0.3, y: 30 },
       {
         opacity: 1,
         y: 0,
         duration:1.0,
        //  duration: 0.8,
         stagger: 0.3,
         ease: "power2.in",
         scrollTrigger: {
           trigger: ".mission-section", // the container to watch
           start: "top 70%", // when top of container hits 80% of viewport
           toggleActions: "play none none reverse",
         },
       }
     );
   }, []);

  return (
    <div className="mission-section overflow-x-hidden">
      <div className="max-w-[1300px] w-[90%] m-auto text-secondary font-inter">
        <div className="lg:w-[1024px] m-auto my-20">
          <h2 className="lg:text-[52px] md:tracking-[-0.4px] tracking-[-0.32px] lg:tracking-[-0.52px] md:text-[40px] text-[32px] font-[900] leading-[40px] lg:leading-tight md:leading-[50px] px-2">
            <span className="line  text-lg md:mr-16 mr-6 font-medium opacity-0 translate-y-4">
              Our Mission
            </span>
            <span className="line  opacity-0 translate-y-4">
              Our mission is to empower creators and changemakers by providing a
            </span>
            <span className="line  opacity-0 translate-y-4">
              {"\u00A0"}platform that connects their visions with generous
              supporters.
            </span>
            <span className="line  opacity-0 translate-y-4">
              We believe that every story deserves to be told and
            </span>
            <span className="line  opacity-0 translate-y-4">
              {"\u00A0"}every dream deserves a chance to flourish.
            </span>
          </h2>

          <div className="flex gap-8 text-base font-medium mt-10">
            <button className="bg-secondary text-white py-2 px-8 rounded-3xl hover:bg-[#225763]">
              Our Impact
            </button>
            <button className="font-[600] px-2 items-center flex">
              Donate{" "}
              <i className="ri-arrow-right-s-line text-xl font-light"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
