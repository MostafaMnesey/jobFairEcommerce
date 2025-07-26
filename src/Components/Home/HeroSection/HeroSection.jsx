import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import mok from "../../../assets/Images/mockUp.avif";

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <>
      <div className="">
        {" "}
        <button
          className="absolute top-[95%] right-[1%] z-40 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <FaRegMoon className="text-yellow-500" />
          ) : (
            <CiSun className="text-gray-500" />
          )}
        </button>
      </div>
      <div className="bg-hero-pattern  min-h-[90vh] relative bg-cover  flex items-center justify-start ">
        <div className="absolute  inset-0 z-0 bg-black bg-opacity-[60%] dark:bg-white dark:bg-opacity-[9%]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className=" flex flex-col min-h-[90vh] justify-center items-start p-8">
                <div className="max-w-2xl   mx-auto">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white dark:text-black">
                    Everything You Need. All in One Place.
                  </h1>
                  <p className="text-lg md:text-xl text-white dark:text-white mb-6">
                    Shop the latest products with unbeatable prices & fast
                    delivery across the country!
                  </p>
                  <button className="px-6 py-3 rounded-md bg-[#FE5013] dark:hover:bg-white dark:hover:text-black hover:bg-black text-white transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="min-h-[90vh] flex items-center justify-center p-8">
                <div>
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                      <img
                        src={mok}
                        className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
                        alt
                      />
                      <img
                        src={mok}
                        className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                        alt
                      />
                    </div>
                  </div>
                  <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
