import React from 'react'

function Navbar() {
  return (
    // main
    <div className="px-3 lg:px-0">
      {/* container */}
      <div className="w-[96%] max-w-[1500px] font-inter flex justify-between m-auto items-center py-5 ">
        {/* logo */}
        <div className="">
          <h3 className="text-2xl font-extrabold text-[#153a43]">GiveWell</h3>
        </div>
        {/* links and hamburger */}
        <div>
          {/* links */}
          <ul className="lg:flex items-center hidden gap-6 text-[17px] font-[600] text-[#222] ">
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
            <li className="bg-primary text-[#153a43] rounded-3xl px-8 py-2">
              <a href="#">Donate</a>
            </li>
          </ul>
          {/* menu */}
          <div className="lg:hidden text-2xl text-gray-800">
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar