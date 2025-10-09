import React from 'react'

function Mission() {
  return (
    // main
    <div className="h-[100vh] overflow-x-hidden">
      {/* container */}
      <div className="max-w-[1300px] w-[90%]  m-auto  text-secondary font-inter">
        {/* text and button */}
        <div className=" lg:w-[1024px] m-auto mt-20 ">
          {/* text */}
          <div className="">
            <h2 className="lg:text-[52px]  md:tracking-[-0.4px] tracking-[-0.32px] lg:tracking-[-0.52px] md:text-[40px] text-[32px] font-[900] leading-[40px] lg:leading-tight md:leading-[50px] px-2">
              <span className="text-lg md:mr-16 mr-6 font-medium">
                Our Mission
              </span>
              Our mission is to empower creators and changemakers by providing a
              platform that connects their visions with generous supporters. We
              believe that every story deserves to be told and every dream
              deserves a chance to flourish.
            </h2>
          </div>
          {/* buttons */}
          <div className=" flex gap-8 text-base font-medium mt-10">
            <button className="Our impact bg-secondary text-white py-2 px-8 rounded-3xl ">
              Our Impact
            </button>
            <button className="font-[600] px-2 items-center flex">
              Donate <i class="ri-arrow-right-s-line text-xl font-light"></i>
            </button>
          </div>
        </div>
        {/* text */}
      </div>
    </div>
  );
}

export default Mission