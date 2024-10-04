// import React from "react";

// const navBarComponets = [
//   { name: "Home", link: "#" },
//   { name: "Program", link: "" },
//   { name: "Pricing", link: "" },
//   { name: "Community", link: "" },
// ];

// const Header = () => {
//   return (
//     <nav>
//       <ul>
//         {navBarComponets.map((e, i) => (
//           <li key={i}>{e.name}</li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "/public/logos/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-blue-600"
            }  rounded-full flex items-center justify-center`}
          >
            <Image width={70} height={70} src={logo} alt="Logo" />
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/program"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Program
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/community"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Community
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          {/* Login Button */}
          <button className="relative text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:dark:text-black">
              Login
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>

          <button className="relative bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:dark:text-black">
              Register
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`ml-4 hidden md:inline-block px-4 py-2 rounded-md ${
            theme === "dark"
              ? "bg-gray-200 text-black"
              : "bg-gray-800 text-white"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="md:hidden">
          <button
            className="text-black dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <Link
            href="/"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/program"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Program
          </Link>
          <Link
            href="/pricing"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/community"
            className={`hover:text-gray-500 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Community
          </Link>
        </div>

        {/* Authentication buttons */}
        <div className="flex justify-around p-6 mt-auto">
          <button className="relative text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:dark:text-black">
              Login
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>

          <button className="relative bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black group-hover:dark:text-black">
              Register
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
