import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" w-full z-50 fixed h-[14vh]">
      <header className="bg-black flex justify-between items-center px-5 lg:px-20 text-white w-full h-[7vh]">
        <div className="flex justify-center items-center">
          <div>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="16.965 16.968 532.999 532.993"
              viewBox="16.965 16.968 532.999 532.993"
              height="28"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="img"
              aria-label="Logo"
            >
              <g>
                <path
                  fill="#C3FF5B"
                  d="M535.958 90.188c0 34.24-27.757 61.996-61.996 61.996-34.24 0-61.996-27.757-61.996-61.996 0-34.24 27.757-61.996 61.996-61.996 34.24 0 61.996 27.757 61.996 61.996z"
                  data-color="1"
                ></path>
                <path
                  fill="#C3FF5B"
                  d="M150.826 475.319c0 34.24-27.757 61.996-61.996 61.996-34.24 0-61.996-27.757-61.996-61.996 0-34.24 27.757-61.996 61.996-61.996 34.24 0 61.996 27.757 61.996 61.996z"
                  data-color="1"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M462.481 258.351v142.267L166.309 104.451h142.266V16.968H16.965v291.61h87.483V166.304l296.173 296.174H258.354v87.483h291.61v-291.61h-87.483z"
                  data-color="2"
                ></path>
              </g>
            </svg>
          </div>
          <h1 className="uppercase font-extrabold text-xl">Rehan's Net</h1>
        </div>
        <div className="flex lg:hidden">
          <FaBarsStaggered className="text-2xl" onClick={toggleSidebar} />
        </div>
        <ul className="lg:flex hidden items-center justify-center gap-10">
          <li className="uppercase hover:text-[#C3FF5B] cursor-pointer duration-500">
            Home
          </li>
          <li className="uppercase hover:text-[#C3FF5B] cursor-pointer duration-500">
            Blog's
          </li>
          <li className="uppercase hover:text-[#C3FF5B] cursor-pointer duration-500">
            About Us
          </li>
          <li className="uppercase hover:text-[#C3FF5B] cursor-pointer duration-500">
            Contact
          </li>
        </ul>
      </header>

      <div
        className={`fixed top-0 right-0 h-screen bg-black w-full text-white transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center p-5">
          <MdClose
            className="text-3xl text-[#C3FF5B] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-14 mt-20">
          <li className="uppercase text-[#C3FF5B] text-3xl cursor-pointer duration-500">
            Home
          </li>
          <li className="uppercase hover:text-[#C3FF5B] text-3xl cursor-pointer duration-500">
            Blog's{" "}
          </li>
          <li className="uppercase hover:text-[#C3FF5B] text-3xl cursor-pointer duration-500">
            About Us
          </li>
          <li className="uppercase hover:text-[#C3FF5B] text-3xl cursor-pointer duration-500">
            Contact
          </li>
        </ul>
      </div>

      <header className="border-4 flex w-full h-[7vh] border-black">
        <div className="flex justify-center bg-white items-center gap-4 lg:gap-5 w-[45vw] lg:w-[20vw] h-full border-r-4 border-black ">
          <img src="/LogoImages\facebook.png" width={25} alt="" />
          <img src="/LogoImages\linkdin.png" width={25} alt="" />
          <img src="/LogoImages\Twitter.webp" width={25} alt="" />
          <img src="/LogoImages\instagram.ong.webp" width={25} alt="" />
        </div>
        <div className="lg:w-[40vw] w-[55vw] flex bg-white justify-center items-center h-full lg:border-r-4 border-black">
          <h1 className="font-bold text-xs lg:text-base">
            Design and Developed by @Rehan
          </h1>
        </div>
        <div className="w-[40vw] lg:flex hidden justify-center items-center h-full border-r-4 border-black">
          <button className="w-[20vw] border-r-4 font-bold bg-white hover:bg-[#C3FF5B] text-lg border-black h-full ">
            Profile
          </button>
          <button className="w-[20vw] bg-[#C3FF5B] font-bold text-lg h-full">
            Connect
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
