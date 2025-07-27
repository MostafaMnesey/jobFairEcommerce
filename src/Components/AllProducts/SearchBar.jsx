import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function SearchBar({ searchQuery, setSearchQuery, setSort }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-5  mx-auto gap-5 ">
        <div className="relative w-full">
          <input
            type="search"
            id="default-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-[100px] bg-[#F5F5F5] focus:outline-none"
            placeholder="Search for products"
            required
          />
        </div>

        <div className="px-4 py-3.5 bg-[#F5F5F5] rounded-[100px] outline outline-[0.60px] outline-offset-[-0.60px] outline-neutral-100">
          <div className="flex justify-center items-center gap-3">
            {/* Dropdown menu */}
            <div className="relative inline-block  text-left">
              {/* الزر اللي بيفتح الـ dropdown */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-white bg-transparent   focus:outline-none font-medium rounded-full text-sm p-1 text-center inline-flex items-center"
                type="button"
                id="dropdownDefaultButton"
              >
                <span className="text-main  text-xs font-normal">
                  <div className="flex justify-center items-center gap-3">
                    {" "}
                    Filter <FaFilter className="text-main w-6 h-6" />
                  </div>{" "}
                </span>
              </button>

              {/* القائمة نفسها */}
              <div
                id="dropdown"
                className={`z-10 absolute mt-2 ${
                  isOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-h-60 overflow-y-auto right-0 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={() => setSort("price-low")}>
                      Price: Low to High
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={() => setSort("price-high")}>
                      Price: High to Low
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={() => setSort("name-az")}>
                      Name: A to Z
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <button onClick={() => setSort("name-za")}>
                      Name: Z to A
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
