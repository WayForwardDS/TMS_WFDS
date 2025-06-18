import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MetricCard from "./MetricCard";
import GraphCard from "./GraphCard";
import CompanyGrowthChart from "./CompanyGrowthChart";
import { FaUsers } from "react-icons/fa"; 
import Event from "./EventCalender";
import PieChart from "./PieChart";

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); 
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`flex content-center transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Sidebar />
      <div className="flex-1 p-6">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />

        <div className="relative flex">
          <div className="w-[1000px] grid grid-cols-3 gap-4 mt-6">
          <GraphCard title="Company Growth" darkMode={darkMode} />
            <PieChart darkMode={darkMode}  />
            <Event />
          </div>
        </div>

        {/* User card */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard 
            title="Total Users" 
            value="03"
            icon={<FaUsers />}
            gradientTo="bg-linear-to-b from-red-500"
            gradientFrom="bg-linear-to-b to-white-400"
            linkText="More Info..."
          />
          <MetricCard
            title="Total Users"
            value="03"
            icon={<FaUsers />}
            gradientFrom="from-blue-500"
            gradientTo="to-blue-400"
            linkText="More Info..."
          />
          <MetricCard
            title="Total Users"
            value="03"
            icon={<FaUsers />}
            gradientTo="bg-linear-to-b from-red-500"
            gradientFrom="bg-linear-to-b to-white-400"
            linkText="More Info..."
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
