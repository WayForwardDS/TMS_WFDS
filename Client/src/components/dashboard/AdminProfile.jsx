import React, { useState, useEffect } from "react";
import { FaUserEdit, FaLock, FaSignOutAlt, FaKey, FaSun, FaMoon, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const SuperAdminProfile = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Wayforward Digital Solution",
    role: "Super Admin",
    email: "admin@wayforward.com",
    contact: "+1 234 567 890",
    address: "123 Tech Street, NY",
    image: null,
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl relative"
        >
          <div className="absolute top-4 right-4">
            <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
              {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-gray-600 text-2xl" />}
            </button>
          </div>
          
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {profile.image ? (
                <img src={profile.image} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                "WFDS"
              )}
              <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-1 rounded-full cursor-pointer">
                <FaCamera />
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{profile.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{profile.role}</p>
          </div>

          {/* Profile Options */}
          <div className="mt-8 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              onClick={handleEditClick}
            >
              <FaUserEdit className="text-blue-500 text-xl" />
              <span className="text-gray-900 dark:text-white flex-1 ml-4">Edit Profile</span>
              <FaKey className="text-gray-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md cursor-pointer"
            >
              <FaLock className="text-red-500 text-xl" />
              <span className="text-gray-900 dark:text-white flex-1 ml-4">Change Password</span>
              <FaKey className="text-gray-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md cursor-pointer"
            >
              <FaSignOutAlt className="text-gray-800 dark:text-red-400 text-xl" />
              <span className="text-gray-900 dark:text-white flex-1 ml-4">Logout</span>
              <FaKey className="text-gray-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Profile</h2>
            
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
            />

            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
            />

            <label className="block text-gray-700 dark:text-gray-300">Contact Number</label>
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white"
            />

            <label className="block text-gray-700 dark:text-gray-300">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
            />

            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminProfile;
