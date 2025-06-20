import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import ShieldLogo from "../assets/shield.png";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  // to prevent scroll while menu open
  //   useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden"; // Prevents page from scrolling
  //   } else {
  //     document.body.style.overflow = "auto";   // Allows normal scroll
  //   }
  // }, [menuOpen]);

  return (
    <nav className=" fixed top-0  w-full shadow-xl bg-transparent border-b border-b-gray-300 flex items-center justify-between px-4 py-2 md:py-4   z-40 backdrop-blur-lg ">
      <div className="flex  gap-1 lg:gap-4 items-center  font-medium">
        <img src={ShieldLogo} alt="logo" className="w-10 h-10 object-contain" />

        <a
          href="#Home"
          className="font-mono font-bold text-xl  text-gray-200 hover:text-white"
        >
          Fraud<span className="text-blue-400">Free</span>
        </a>
      </div>

      {/* Hamburger menu for small devices */}
      <div
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        className="flex md:hidden cursor-pointer items-center justify-center
      "
      >
        <span className="px-3 md:px-5 text-xl font-medium">Menu</span>{" "}
        {menuOpen ? "X" : "\u2630"}
      </div>
      {/* menu */}
      <div
        className={`md:hidden fixed top-12 right-0 w-1/2 z-40 backdrop-blur-2xl bg-gray-900 rounded-l-xl text-gray-200 text-xl
  flex flex-col items-center justify-center space-y-6 py-6 px-4
  transition-all duration-500 ease-in-out
  ${
    menuOpen
      ? "translate-x-0 opacity-100 pointer-events-auto"
      : "translate-x-full opacity-0 pointer-events-none"
  }`}
      >
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-3 rounded-md"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/report"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-3 rounded-md"
          onClick={() => setMenuOpen(false)}
        >
          Report
        </Link>
        <Link
          to="/browseReports"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-3 rounded-md whitespace-nowrap
overflow-hidden"
          onClick={() => setMenuOpen(false)}
        >
          Browse Reports
        </Link>
        <a
          href="#About"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-3 rounded-md"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#how-it-works"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-3 rounded-md whitespace-nowrap overflow-hidden text-ellipsis"
          onClick={() => setMenuOpen(false)}
        >
          How It Works?
        </a>
      </div>

      {/* menu div initially hidden but flex for md or higher */}
      <div className="hidden md:flex justify-center items-center gap-1.5 md:gap-3 font-bold text-xl md:text-xl font-mono">
        <NavLink
          to="/"
          href="#Home"
          className="text-gray-300 hover:text-white transition-all  hover:-translate-y-1 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-2 rounded-md duration-300"
        >
          Home
        </NavLink>
        |
        <Link
    to="/report"
    className="text-gray-300 hover:text-white transition-all hover:-translate-y-1 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-2 rounded-md duration-300"
  >
    ReportCompany
  </Link>
  |
  <Link
    to="/browseReports"
    className="text-gray-300 hover:text-white transition-all hover:-translate-y-1 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-2 rounded-md duration-300"
  >
    BrowseReports
  </Link>
        |
        <a
          href="#About"
          className="text-gray-300 hover:text-white transition-all hover:-translate-y-1 hover:bg-purple-900 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 px-2 rounded-md duration-300"
        >
          About
        </a>
      </div>
    </nav>
  );
};
