import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import CircularText from "./CircularText"; // adjust path if needed

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-20 transition duration-300">
      <div className="max-w-6xl mx-auto px-2 md:px-12 flex justify-between items-center h-[84px]">
        {/* Logo replaced with CircularText */}
        <div className="text-1xl font-bold">
          <button
            onClick={() => {
              const el = document.getElementById("hero");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
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

          {/* Switch toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-14 h-8 bg-gray-200 rounded-full peer-focus:ring- peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:bg-gradient-to-tr peer-checked:from-black peer-checked:to-gray-800 dark:peer-checked:from-white dark:peer-checked:to-gray-300 transition-colors duration-300" />
            <span className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6 flex items-center justify-center">
              {darkMode ? (
                <FaMoon className="text-yellow-400 text-sm" />
              ) : (
                <FaSun className="text-blue-400 text-sm" />
              )}
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
