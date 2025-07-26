import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/Logo.png";
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className="bg-black border-gray-200 dark:bg-white rounded-sm shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              className="h-20 mr-3 rounded-lg"
              alt="E-commerce Logo"
            />
            <span className="text-2xl text-white font-secondary font-semibold whitespace-nowrap dark:text-black">
              E-Commerce
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-black md:dark:text-black"
                  aria-current="page"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-black md:dark:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  All Products
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}