import React from "react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-red-500 dark:text-white">
        Way Forward Digital Solutions
      </h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer dark:text-white" size={20} />
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none transition-transform transform hover:scale-110 cursor-pointer"
        >
          {darkMode ? (
            <FaSun size={22} className="text-yellow-400" />
          ) : (
            <FaMoon size={22} className="text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
