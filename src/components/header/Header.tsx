"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logos/logo2.png";
import name from "/public/logos/gymName.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white transition-colors duration-300 h-[6rem]">
      <nav className="container mx-auto p-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <Image width={70} height={70} src={logo} alt="Logo" />
            <div className="relative translate-y-5">
              <Image width={100} height={100} src={name} alt="gymName" />
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/program"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Program
          </Link>
          <Link
            href="/pricing"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/community"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Community
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="relative text-white border border-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Login
            </span>
            <div className="absolute -inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>

          <button className="relative bg-blue-400 text-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Register
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <Link
            href="/"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/program"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Program
          </Link>
          <Link
            href="/pricing"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/community"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            Community
          </Link>
        </div>

        {/* Authentication buttons for mobile */}
        <div className="flex justify-around p-6 mt-auto">
          <button className="relative text-white border border-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Login
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>

          <button className="relative bg-blue-400 text-white px-4 py-2 rounded-md group overflow-hidden">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Register
            </span>
            <div className="absolute inset-0 w-full h-full bg-[#FAEE21] transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg] origin-top-left transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0"></div>
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
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
