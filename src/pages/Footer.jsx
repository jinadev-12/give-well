import React from "react";


function Footer() {
  return (
    <div
      className="px-4 md:px-8 pt-8 pb-12 md:pb-20 rounded-t-2xl font-inter text-secondary"
      style={{
        backgroundImage: "linear-gradient(#dbc5dc, #8fb0d6)",
      }}
    >
      {/* Upper Section */}
      <div className="relative bg-white rounded-2xl p-6 sm:p-10 md:p-14 lg:p-16 shadow-sm overflow-hidden">
        {/* Content */}
        <div className="relative text-center space-y-8">
          <h2 className="mx-auto text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-tight max-w-4xl">
            Help us turn small actions into lasting change. Your donation
            supports the people and projects building a better future — one step
            at a time.
          </h2>
          <button className="bg-primary text-[#153a43] rounded-3xl px-10 py-3 font-semibold hover:opacity-90 transition">
            Donate
          </button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="mt-16 mx-auto">
        {/* brand subscription */}
        <div className="hidden lg:flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-start pb-20">
          {/* Brand Info */}
          <div className="flex-1">
            <h3 className="text-[24px] font-extrabold mb-2">GiveWell</h3>
            <p className="text-sm md:text-base">
              Be the first to hear about our impacts and new volunteer
              opportunities!
            </p>
          </div>

          {/* Subscribe Form */}
          <div>
            <p className="text-[1rem] mb-2">Subscribe</p>
            <form className="flex flex-col sm:flex-row gap-3 items-center sm:items-stretch border border-[#153a43] rounded-3xl max-w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent px-4 py-2 text-[#153a43] placeholder-secondary focus:outline-none rounded-3xl sm:rounded-l-3xl sm:rounded-r-none"
              />
              <button
                type="submit"
                className="text-white bg-[#153a43] rounded-3xl px-10 py-2 hover:opacity-90 transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2 font-normal">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        {/* brand name + underline + privacy */}
        <div className="text-center">
          <img
            src="https://cdn.prod.website-files.com/68011fed23249a9699d7b42b/680653201cb76b74af47c399_footer_title.svg"
            loading="lazy"
            alt="GiveWell Logo"
            className="w-full"
          />

          {/* underline */}
          <div className="h-[1px] w-full bg-[#153a43] my-10"></div>

          {/* privacy policy text */}
          <div className="flex flex-col md:flex-row items-center justify-between font-light text-xs md:text-sm">
            <div className="flex gap-4">
              <a href="" className="underline">
                Privacy Policy
              </a>
              <a href="" className="underline">
                Terms of Service
              </a>
            </div>

            <p>© 2025 GiveWell. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
