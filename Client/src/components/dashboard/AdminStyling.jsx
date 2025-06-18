import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaFont, FaBold, FaSave, FaUndo } from "react-icons/fa";

const SuperAdminStyling = () => {
  const [sidebarColor, setSidebarColor] = useState(localStorage.getItem("sidebarColor") || "#1F2937");
  const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "#3B82F6");
  const [font, setFont] = useState(localStorage.getItem("font") || "sans-serif");
  const [fontWeight, setFontWeight] = useState(localStorage.getItem("fontWeight") || "normal");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    applyStyles();
  }, [sidebarColor, buttonColor, font, fontWeight]);

  const applyStyles = () => {
    document.documentElement.style.setProperty("--sidebar-color", sidebarColor);
    document.documentElement.style.setProperty("--button-color", buttonColor);
    document.documentElement.style.setProperty("--font-family", font);
    document.documentElement.style.setProperty("--font-weight", fontWeight);
  };

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const saveSettings = () => {
    localStorage.setItem("sidebarColor", sidebarColor);
    localStorage.setItem("buttonColor", buttonColor);
    localStorage.setItem("font", font);
    localStorage.setItem("fontWeight", fontWeight);
    triggerAlert("✅ Settings saved successfully!");
  };

  const resetSettings = () => {
    setSidebarColor("#1F2937");
    setButtonColor("#3B82F6");
    setFont("sans-serif");
    setFontWeight("normal");
    localStorage.clear();
    applyStyles();
    triggerAlert("🔄 Settings reset to default!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Sidebar customColor={sidebarColor} />
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="mr-3">🎨</span> Super Admin Styling
          </h2>

          {/* Sidebar Color */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <label className="font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <FaPalette className="mr-2 text-blue-500" /> Sidebar Color
            </label>
            <input
              type="color"
              value={sidebarColor}
              onChange={(e) => setSidebarColor(e.target.value)}
              className="w-full mt-2 h-12 cursor-pointer rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>

          {/* Button Color */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <label className="block font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <FaPalette className="mr-2 text-green-500" /> Button Color
            </label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="w-full mt-2 h-12 cursor-pointer rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow"
            />
          </motion.div>

          {/* Font Selection */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <label className="block font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <FaFont className="mr-2 text-purple-500" /> Font Family
            </label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full mt-2 p-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
          </motion.div>

          {/* Font Weight */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-6"
          >
            <label className="block font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <FaBold className="mr-2 text-red-500" /> Font Weight
            </label>
            <select
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              className="w-full mt-2 p-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Light</option>
            </select>
          </motion.div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={saveSettings}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center"
            >
              <FaSave className="mr-2" /> Save Settings
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetSettings}
              className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center"
            >
              <FaUndo className="mr-2" /> Reset to Default
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated Alert Box */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-6 right-6 bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-4 w-80 border-l-4 border-blue-500"
          >
            <p className="text-gray-900 dark:text-white text-sm font-medium">{alertMessage}</p>
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-1 bg-blue-500 mt-2 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SuperAdminStyling;