import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/Logo.png";
import { Link } from "react-router"; // ✅ التصحيح هنا
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="h-14 mr-3 rounded-lg"
            alt="E-commerce Logo"
          />
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled
                ? "text-black dark:text-white"
                : "text-black dark:text-black"
            }`}
          >
            E-Commerce
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg transition-colors duration-300
            ${
              scrolled
                ? "bg-transparent dark:bg-transparent text-black dark:text-white"
                : "bg-transparent text-black dark:text-black"
            }
            md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black`}
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded hover:text-main/80 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 rounded hover:text-main/80 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                All Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
