import React, { useState } from "react";
import { FaPen, FaFilter, FaDownload, FaEye, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sidebar from "./Sidebar";
import ChiesiSidebar from "./chiesiSidebar";
import { Link } from "react-router-dom";

const teams = [
 <Link to="/TeamMembersTable"> "Team Lahore - A"</Link>, "Team Lahore - B", "Team Lahore - C",
  "Team Karachi - A", "Team Karachi - B", "Team Karachi - C",
  "Team Hyderabad - A"
];

const TeamsPakistan = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 6;

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      <ChiesiSidebar/>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-6 bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Teams Pakistan</h1>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-4">
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-md cursor-pointer hover:bg-red-700">
            <FaPen /> Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
            <FaDownload /> Download Reports
          </button>
        </div>

        {/* Teams Table */}
        <div className="overflow-hidden border border-gray-300 rounded-lg">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 border-b cursor-pointer transition-all ${
                selectedRow === index ? "bg-gradient-to-r from-gray-400 to-pink-600 text-white" : "bg-white hover:bg-gray-200"
              }`}
              onClick={() => handleRowClick(index)}
            >
              <span>{team}</span>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
                  <FaEye /> View
                </button>
                <button className="flex items-center gap-1 px-3 py-1 text-red-600 border border-red-500 rounded-md hover:bg-red-500 hover:text-white">
                  <FaDownload /> Download Reports
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-2 mt-4 border-t border-gray-300">
          <button
            className="flex items-center px-3 py-1 text-red-600 rounded-md hover:bg-pink-200"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaArrowLeft className="mr-1" /> Previous
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-red-600 text-white" : "text-gray-700"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page < 10 ? `0${page}` : page}
              </button>
            ))}
          </div>

          <button
            className="flex items-center px-3 py-1 text-red-600 rounded-md hover:bg-pink-200"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamsPakistan;
