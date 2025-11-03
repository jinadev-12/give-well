import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebaropen = () => setIsOpen(!isOpen);

  return (
    // main
    <div className="px-8 font-inter h-[48px] md:h-[72px]">
      {/* container */}
      <div className="flex justify-between h-full m-auto items-center">
        {/* logo */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#153a43]">GiveWell</h3>
        </div>

        {/* links and hamburger */}
        <div>
          {/* desktop links */}
          <ul className="lg:flex items-center hidden gap-[29px] text-[17px] font-[600] text-[#222]">
            <li>
              <a href="#mission">Our mission</a>
            </li>
            <li>
              <a href="#empower">Empower</a>
            </li>
            <li>
              <a href="#team">The team</a>
            </li>
            <li>
              <a href="#impact">Our impact</a>
            </li>
            <li className="bg-primary text-[#153a43] rounded-3xl px-8 py-2 font-[500]">
              <a href="#">Donate</a>
            </li>
          </ul>

          {/* hamburger menu (mobile only) */}
          <div className="lg:hidden text-2xl text-gray-800">
            <i className="ri-menu-line" onClick={sidebaropen}></i>
          </div>

          {/* sidebar */}
          <div
            className={`fixed top-0 left-0 w-full h-full bg-gray-200 transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 lg:hidden z-50`}
          >
            {/* top section: logo + close button */}
            <div className="flex justify-between items-center px-8 h-[60px] border-b border-gray-300">
              <h3 className="text-2xl font-extrabold text-[#153a43]">
                GiveWell
              </h3>
              <i
                className="ri-close-large-line text-2xl text-gray-800"
                onClick={sidebaropen}
              ></i>
            </div>

            {/* links */}
            <ul className="flex flex-col items-center gap-6 mt-10 text-[18px] font-[600] text-[#222]">
              <li>
                <a href="#mission" onClick={sidebaropen}>
                  Our mission
                </a>
              </li>
              <li>
                <a href="#empower" onClick={sidebaropen}>
                  Empower
                </a>
              </li>
              <li>
                <a href="#team" onClick={sidebaropen}>
                  The team
                </a>
              </li>
              <li>
                <a href="#impact" onClick={sidebaropen}>
                  Our impact
                </a>
              </li>
              <li className="bg-primary text-[#153a43] rounded-3xl px-8 py-2 w-[80%] font-[500] text-center">
                <a href="#" onClick={sidebaropen}>
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
