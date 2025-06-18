import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import FaBars

const TopBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="sticky flex items-center justify-between w-full p-3 bg-red-600">
      {!isCollapsed && <h1 className="text-lg font-bold text-white">TopBar</h1>}
      <button onClick={toggleSidebar} className="text-white focus:outline-none">
        <FaBars size={20} />
      </button>
      
    </div>
  );
};

export default TopBar;
