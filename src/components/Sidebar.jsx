import React, { useEffect, useState, useRef } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant, MdLogout } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

export default function Sidebar() {
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const toTop = document.querySelector("#to-top");

      if (header) {
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
          header.classList.add("navbar-fixed");
          if (toTop) {
            toTop.classList.remove("hidden");
            toTop.classList.add("flex");
          }
        } else {
          header.classList.remove("navbar-fixed");
          if (toTop) {
            toTop.classList.remove("flex");
            toTop.classList.add("hidden");
          }
        }
      } else {
        console.error("Header or toTop element not found");
      }
    };
    const handleClickOutside = (e) => {
      const hamburger = document.querySelector("#hamburger");
      const navMenu = document.querySelector("#nav-menu");

      if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    };

    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    const handleHamburgerClick = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    hamburger.addEventListener("click", handleHamburgerClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      hamburger.removeEventListener("click", handleHamburgerClick);
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
        >
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out bg-[#10375C]"></span>
          <span className="hamburger-line transition duration-300 ease-in-out bg-[#10375C]"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out bg-[#10375C]"></span>
        </button>

        <div
          ref={navMenuRef}
          id="nav-menu"
          className={`bg-[#EB8317] h-[100vh] fixed top-0 left-0 transition-all duration-100 w-56`}
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
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px] font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative`}
                >
                  FOOD LIST
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/ListTable"
                className="flex items-center cursor-pointer group"
              >
                <MdOutlineTableRestaurant />
                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px]  font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative`}
                >
                  TABLE LIST
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <a
                href="/MoreInfo"
                className="flex items-center cursor-pointer group"
              >
                <CiCircleMore />

                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px]  font-sans ml-3 font-bold group-hover:text-[#84CECF] group-active:italic relative`}
                >
                  MORE
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#84CECF] transition-all duration-500 group-hover:w-full"></span>
                </h1>
              </a>
            </div>
            <div
              className="flex items-center mb-4 mt-40"
              onClick={handleLogout}
            >
              <a className="flex items-center cursor-pointer group">
                <MdLogout />

                <h1
                  className={`text-[#10375C] lg:text-[24px] md:text-[15px]  font-sans ml-3 font-bold group-hover:text-[#ce0e0e]`}
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
