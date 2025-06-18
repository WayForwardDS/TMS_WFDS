import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaBook, FaUsers, FaQuestionCircle, FaGraduationCap, FaCertificate, FaCog, FaUser, FaBrush } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isOnlineDropdownOpen, setIsOnlineDropdownOpen] = useState(false);
  const onlineDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (onlineDropdownRef.current && !onlineDropdownRef.current.contains(event.target)) {
        setIsOnlineDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-64 h-screen bg-black text-white p-4 sticky top-0 overflow-y-scroll"
    >
      <div className="flex flex-col items-center pb-4 border-b border-gray-600">
      <img src="/src/assets/wayforwad.jpg" alt="Logo" className="w-10" />
        <h2 className="mt-2 text-lg font-semibold">Super Admin</h2>

        <div ref={onlineDropdownRef} className="relative">
          <div className="flex items-center gap-2 cursor-pointer mt-2" onClick={() => setIsOnlineDropdownOpen(!isOnlineDropdownOpen)}>
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-3 h-3 bg-green-400 rounded-full"></motion.span>
            <span>Online</span>
            {isOnlineDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <AnimatePresence>
            {isOnlineDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-8 left-0 bg-gray-800 text-white rounded-md shadow-md w-40 py-2"
              >
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Change Password</li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Logout</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2 p-1 text-white bg-red-600 rounded-md cursor-pointer">
          <Link to="/dashboard" className="flex items-center gap-2 w-full p-2">
            <LuLayoutDashboard /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-gray-800 rounded-md cursor-pointer">
          <Link to="/profile" className="flex items-center gap-2 w-full p-2">
            <FaUsers /> Company Profile
          </Link>
        </li>
        <li className="hover:bg-gray-800 rounded-md cursor-pointer">
          <Link to="/courses" className="flex items-center gap-2 w-full p-2">
            <FaBook /> Courses
          </Link>
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
          <Link to="/users" className="flex items-center gap-2 w-full">
            <FaUsers /> Users
            </Link>
        </li>
        <li className="flex items-center justify-between p-2 hover:bg-gray-800 rounded-md cursor-pointer" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <div className="flex items-center gap-2">
            <FaCog /> Settings
          </div>
          <span>{isSettingsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </li>
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="ml-6 space-y-1"
            >
              <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                <Link to="/SuperAdminProfile" className="flex items-center gap-2 w-full"><FaUser/>Profile
                </Link> 
                </li>
              <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                <Link to="/Styling" className="flex items-center gap-2 w-full">
                <FaBrush/>Stylings
                </Link>
                </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
