import React,{useState} from 'react'

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const sidebaropen = () => {
     setIsOpen(!isOpen);
   };
  return (
    // main
    <div className="px-8 font-inter h-[48px] md:h-[72px]">
      {/* container */}
      <div className="flex justify-between h-full m-auto items-center">
        {/* logo */}
        <div className="">
          <h3 className="text-2xl font-extrabold text-[#153a43]">GiveWell</h3>
        </div>
        {/* links and hamburger */}
        <div>
          {/* links */}
          <ul className="lg:flex items-center hidden gap-[29px] text-[17px] font-[600] text-[#222] ">
            <li>
              <a href="#">Our mission</a>
            </li>
            <li>
              <a href="#">Empower</a>
            </li>
            <li>
              <a href="#">The team</a>
            </li>
            <li>
              <a href="#">Our impact</a>
            </li>
            <li className="bg-primary text-[#153a43] rounded-3xl px-8 py-2 font-[500]">
              <a href="#">Donate</a>
            </li>
          </ul>
          {/* menu */}
          <div className="lg:hidden text-2xl text-gray-800">
            <i class="ri-menu-line" onClick={sidebaropen}></i>
          </div>
          {/* sidebar */}
          <div
            className={`fixed  bg-gray-200 top-0 left-0 w-full h-full pt-2  text-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }  lg:hidden duration-300 z-50`}
          >
            <i
              class="ri-close-large-line absolute top-3 right-10 text-2xl "
              onClick={sidebaropen}
            ></i>
            {/* logo and links */}
            <div className="flex flex-col  gap-8 items-start pl-10">
              {/* logo */}
              <div className="">
                <h3 className="text-2xl font-extrabold text-[#153a43]">
                  GiveWell
                </h3>
              </div>
              {/* links */}
              <ul className="flex flex-col gap-6 text-[18px] font-[600] w-[95%] text-[#222] top-0 relative text-left">
                <li>
                  <a href="#">Our mission</a>
                </li>
                <li>
                  <a href="#">Empower</a>
                </li>
                <li>
                  <a href="#">The team</a>
                </li>
                <li>
                  <a href="#">Our impact</a>
                </li>

                <li className="bg-primary text-[#153a43] rounded-3xl px-8 py-2 w-[100%] font-[500] text-center">
                  <a href="#">Donate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar