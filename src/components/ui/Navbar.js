import React from "react";
import logo from "../assets/image/companylogo.png"; // Replace with your logo file path
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="left  w-[50%] flex justify-start items-center h-full gap-5">


        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img
            src={logo} // Using the imported logo file
            alt="Logo"
            className="h-[60px]" // Adjust height as needed
            />
        </Link>
        


        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500 font-medium"
            >
            Home
          </Link>
          <a
            href="/about"
            className="text-gray-600 hover:text-blue-500 font-medium"
          >
            About
          </a>
          <a
            href="/courses"
            className="text-gray-600 hover:text-blue-500 font-medium"
            >
            Courses
          </a>
          <a
            href="/jobs"
            className="text-gray-600 hover:text-blue-500 font-medium"
            >
            Jobs
          </a>
            </div>
        </div>
        <div className="right w-[50%] flex justify-end items-center h-full gap-3">


        {/* Search Bar */}
        <div className="hidden lg:flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-64 text-gray-700 focus:outline-none"
            />
           <button className="p-3 bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center">
            <FaSearch /> {/* Using the FontAwesome Search Icon */}
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-2">
          <button className="p-2 px-5 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100">
            <Link to="/login">
               Log In
            </Link>
          </button>
          <button className="p-2 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <Link to='signup'>
            Sign Up
            </Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex items-center text-gray-600 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
              </div>
      </div>
    </nav>
  );
}

export default Navbar;
