import React, { useEffect, useState, useRef } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant, MdLogout } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);


    const handleLogout = () => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/";
    };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      navMenuRef.current &&
      !navMenuRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <button
          ref={hamburgerRef}
          id="hamburger"
          name="hamburger"
          type="button"
          className="absolute top-1 left-4 block p-3 z-50"
          aria-label="Toggle navigation menu"
          onClick={handleHamburgerClick}
        >
          <span
            className={`hamburger-line origin-top-left transition duration-300 ease-in-out bg-[#10375C] ${
              isOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line transition duration-300 ease-in-out bg-[#10375C] ${
              isOpen ? "scale-0" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out bg-[#10375C] ${
              isOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </button>

        <div
          ref={navMenuRef}
          id="nav-menu"
          className={`bg-[#EB8317] h-[100vh] fixed top-0 left-0 transition-all duration-300 w-56 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mt-32 ml-9">
            <div className="flex items-center mb-4">
              <a
                href="/ListFood"
                className="flex items-center cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <IoFastFoodOutline />
                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px] font-sans ml-3 font-bold group-hover:text-[#387478] group-active:italic relative`}
                >
                  FOOD LIST
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/ListTable"
                className="flex items-center cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <MdOutlineTableRestaurant />
                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px] font-sans ml-3 font-bold group-hover:text-[#387478] group-active:italic relative`}
                >
                  TABLE LIST
                </h1>
              </a>
            </div>
            {/* <div className="flex items-center mb-4">
              <a
                href="/MoreInfo"
                className="flex items-center cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <CiCircleMore />
                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px] font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative`}
                >
                  MORE
                </h1>
              </a>
            </div> */}
            <div
              className="flex items-center mb-4 mt-[650px]"
              onClick={handleLogout}
            >
              <a className="flex items-center cursor-pointer group">
                <MdLogout />
                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px] font-sans ml-3 font-bold group-hover:text-[#ce0e0e]`}
                >
                  LOGOUT
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}