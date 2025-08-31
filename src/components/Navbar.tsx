import React, { useState } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import CircularText from "./CircularText"; // adjust path if needed

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close after click
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-20 transition duration-300">
      <div className="max-w-6xl mx-auto px-2 md:px-12 flex justify-between items-center h-[84px]">
        {/* Logo */}
        <div className="text-1xl font-bold">
          <button
            onClick={() => handleScroll("hero")}
            className="focus:outline-none"
          >
            <CircularText
              text="YOHANEX"
              spinDuration={20}
              onHover="speedUp"
              className="w-[100px] h-[95px] !text-black dark:!text-cyan-400"
            />
          </button>
        </div>

        <div className="space-x-6 flex items-center">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-6">
            {["Home", "About", "Achievments", "Portfolio", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="cursor-pointer hover:underline"
                  onClick={() => handleScroll(link.toLowerCase())}
                >
                  {link}
                </li>
              )
            )}
          </ul>

          {/* Dark mode toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-14 h-8 bg-gray-200 rounded-full dark:bg-gray-600 peer-checked:bg-gradient-to-tr peer-checked:from-black peer-checked:to-gray-800 dark:peer-checked:from-white dark:peer-checked:to-gray-300 transition-colors duration-300" />
            <span className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6 flex items-center justify-center">
              {darkMode ? (
                <FaMoon className="text-yellow-400 text-sm" />
              ) : (
                <FaSun className="text-blue-400 text-sm" />
              )}
            </span>
          </label>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden ml-4 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Achievments", "Portfolio", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="cursor-pointer hover:underline"
                  onClick={() => handleScroll(link.toLowerCase())}
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
