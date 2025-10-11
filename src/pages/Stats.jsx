import React, { useEffect, useRef, useState } from "react";
import whiteBg from "../assets/greenBg.png";
import BlueBg from "../assets/blueBg.png";
import orangeBg from "../assets/stats-orange.jpg";
import speech from "../assets/stats-img2.jpg";
import convo from "../assets/stats-img4.jpg";

function Stats() {
  // Helper hook to count up
  const useCountUpOnVisible = (target, duration = 1500) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              const start = performance.now();
              const animate = (time) => {
                const progress = Math.min((time - start) / duration, 2.5);
                setCount(Math.floor(progress * target));
                if (progress < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [target, duration]);

    return [ref, count];
  };

  // Each stat
  const [ref1, count1] = useCountUpOnVisible(256);
  const [ref2, count2] = useCountUpOnVisible(120);
  const [ref3, count3] = useCountUpOnVisible(50);

  return (
    // stats
    <div id="impact" className="font-inter text-secondary px-4 md:px-8 py-16 md:py-24">
      {/* container */}
      <div className="">
        {/* upper / title and description */}
        <div className="md:flex gap-10 md:gap-16 mb-12 md:mb-16">
          <h2 className="md:w-1/2 text-[32px] md:text-[40px] lg:text-[52px] font-[900] leading-tight mb-4">
            From quiet efforts to real results: The ripple effect of every
            donation
          </h2>
          <p className="md:w-1/2 leading-normal text-xl">
            Each donation builds momentum. In the last year alone, we've backed
            more than 50 grassroots initiatives, empowered hundreds of
            volunteers, and helped communities find real, lasting solutions to
            challenges — from mental health to clean water access and
            education.25,000 individuals through ongoing community programs and
            immediate response efforts across regions.
          </p>
        </div>

        {/* lower / stats grid */}
        <div
          className="
            grid grid-cols-1 gap-8
            md:grid-cols-2 lg:grid-cols-3
          "
        >
          {/* Card 1 */}
          <div
            className="
              relative overflow-hidden
              p-8 rounded-lg shadow-sm flex flex-col justify-center items-start
              md:col-span-2 lg:col-span-1 lg:row-span-2
              bg-cover bg-center mb-4
            "
            style={{ backgroundImage: `url(${orangeBg})` }}
          >
            <div className="absolute inset-0 bg-white/70" />
            <div className="relative w-full lg:flex lg:flex-col lg:justify-end h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-16 lg:mb-auto">
                Products Distributed Locally
              </h3>
              <div
                ref={ref1}
                className="text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,10rem)] font-bold w-full text-right border-b border-secondary pb-2"
              >
                {count1}
              </div>

              <p className="text-gray-700 text-base text-right pt-2">
                Essential supplies, tools, and resources reaching more than
                25,000 individuals through ongoing community programs and
                immediate response efforts across regions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f9f9f9] overflow-hidden rounded-lg shadow-sm flex flex-col items-start mb-4">
            <img
              src={convo}
              className="object-cover w-full h-full"
              alt="Community gathering and discussions"
            />
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#f9f9f9] rounded-lg shadow-sm flex flex-col justify-center items-start bg-cover bg-center p-8 mb-4"
            style={{ backgroundImage: `url(${BlueBg})` }}
          >
            <div className="relative w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-16">
                Volunteers on the Ground
              </h3>
              <div
                ref={ref2}
                className="text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,10rem)] font-bold w-full text-right border-b border-secondary pb-2"
              >
                {count2}+
              </div>
              <p className="text-gray-700 text-base text-right pt-2">
                Over 120 dedicated volunteers providing consistent field
                support, educational guidance, and emergency relief — ensuring
                every donated effort reaches those who need it most.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f9f9f9] rounded-lg shadow-sm flex flex-col items-start overflow-hidden mb-4 order-4 md:order-5">
            <img
              src={speech}
              className="object-cover w-full h-full"
              alt="Awareness session and public speaking"
            />
          </div>

          {/* Card 5 */}
          <div
            className="bg-[#f9f9f9] p-8 rounded-lg shadow-sm flex flex-col justify-center items-start bg-cover bg-center mb-4 order-5 md:order-4"
            style={{ backgroundImage: `url(${whiteBg})` }}
          >
            <div className="relative w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-16">
                Communities Empowered
              </h3>
              <div
                ref={ref3}
                className="text-6xl md:text-7xl lg:text-[clamp(4rem,8vw,10rem)] font-bold w-full text-right border-b border-secondary pb-2"
              >
                {count3}+
              </div>
              <p className="text-gray-700 text-base text-right pt-2">
                Over 50 local communities now run their own initiatives — from
                youth leadership programs to sustainable food networks — all
                sparked by your collective support and contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
