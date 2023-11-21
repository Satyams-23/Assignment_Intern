import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between lg:mr-9 max-w-[95%] items-center mx-auto lg:w-[80%] shadow-2xl  p-4 my-2 sticky z-50 h-full">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 rounded-full shadow-2xl hover:border p-1 hover:bg-gray-200 lg:hidden"
          onClick={handleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-300 overflow-hidden"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <div
          className={`top-0 left-0 w-full h-screen border-r min-h-full absolute lg:flex flex-col px-4 mx-2 gap-2 z-50`}
        >
          <Link onClick={handleNav} to="/" className="flex pt-3 w-[80%]">
            <img src="" alt="logo" className="w-10 " />
          </Link>
          <div className="flex flex-col gap-2 mt-2">
            <div className="p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer flex items-center text-gray-600">
              <Link
                onClick={handleNav}
                to="/"
                className="p-2 font-semibold text-xl"
              >
                Dashboard
              </Link>
            </div>

            <div className="border-b p-2 flex flex-col gap-1">
                 <Link
                onClick={handleNav}
                to="/"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Main Content
              </Link>
              <Link
                onClick={handleNav}
                to="/table/country"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Countries
              </Link>
              <Link
                onClick={handleNav}
                to="/table/region"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Regions
              </Link>
              <Link
                onClick={handleNav}
                to="/table/source"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Source
              </Link>
              <Link
                onClick={handleNav}
                to="/table/pestle"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Pestle
              </Link>
              <Link
                onClick={handleNav}
                to="/table/topic"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Topics
              </Link>
              <Link
                onClick={handleNav}
                to="/table/sector"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Sector
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
