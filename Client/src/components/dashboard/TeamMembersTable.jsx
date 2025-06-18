import React, { useState } from "react";
import { FaDownload, FaMedal, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ChiesiSidebar from "./chiesiSidebar";

const TeamMembersTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const teamMembers = [
    { id: "051", name: "Ahmed Ali", email: "ahmedali@gmail.com", designation: "IT Admin", brand: "Brexin", progress: "99%" },
    { id: "052", name: "John Doe", email: "johndoe@gmail.com", designation: "BUH", brand: "Brexin", progress: "98%" },
    { id: "053", name: "Sara Khan", email: "sarakhan@gmail.com", designation: "DFM", brand: "Brexin", progress: "97%" },
    { id: "054", name: "Ali Raza", email: "aliraza@gmail.com", designation: "BUM", brand: "Brexin", progress: "96%" },
    { id: "055", name: "Michael Smith", email: "michaelsmith@gmail.com", designation: "MM", brand: "Brexin", progress: "95%" },
    { id: "056", name: "Emily Johnson", email: "emilyjohnson@gmail.com", designation: "NSM", brand: "Brexin", progress: "94%" },
    { id: "057", name: "Robert Brown", email: "robertbrown@gmail.com", designation: "RM", brand: "Brexin", progress: "93%" },
    { id: "058", name: "Sophia Wilson", email: "sophiawilson@gmail.com", designation: "AM", brand: "Brexin", progress: "92%" },
    { id: "059", name: "David Lee", email: "davidlee@gmail.com", designation: "BUH", brand: "Brexin", progress: "91%" },
    { id: "060", name: "Olivia Martinez", email: "oliviamartinez@gmail.com", designation: "DFM", brand: "Brexin", progress: "90%" },
    { id: "057", name: "Robert Brown", email: "robertbrown@gmail.com", designation: "RM", brand: "Brexin", progress: "93%" },
    { id: "058", name: "Sophia Wilson", email: "sophiawilson@gmail.com", designation: "AM", brand: "Brexin", progress: "92%" },
    { id: "059", name: "David Lee", email: "davidlee@gmail.com", designation: "BUH", brand: "Brexin", progress: "91%" },
    { id: "060", name: "Olivia Martinez", email: "oliviamartinez@gmail.com", designation: "DFM", brand: "Brexin", progress: "90%" },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(teamMembers.length / rowsPerPage);

  // Get current page rows
  const startIndex = (currentPage - 1) * rowsPerPage;
  const displayedMembers = teamMembers.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <ChiesiSidebar />

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 w-full">
          <h2 className="text-2xl font-bold">Team Lahore - A</h2>
          <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 cursor-pointer">
            <FaDownload /> Download Reports
          </button>
        </div>

        {/* Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-md">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-200">
              <tr className="text-gray-700">
                <th className="p-3">User ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Progress</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedMembers.map((member, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    hoveredRow === index ? "bg-gradient-to-r from-gray-400 to-pink-600 text-white" : "bg-white"
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="p-3 flex items-center gap-2">
                    <span className="bg-gray-300 p-2 rounded-full">👤</span> {member.id}
                  </td>
                  <td className="p-3">{member.name}</td>
                  <td className="p-3">{member.email}</td>
                  <td className="p-3">{member.designation}</td>
                  <td className="p-3">{member.brand}</td>
                  <td className=" flex items-center gap-2 bg-gray-300 rounded-lg">
                    <span className="bg-pink-500 text-white px-20 py-0.5 rounded-lg">{member.progress}</span>
                    <FaMedal className="text-yellow-500" />
                  </td>
                  <td className="p-3">
                    <button
                      className={`px-4 py-1 rounded-lg cursor-pointer ${
                        hoveredRow === index ? "bg-gray-800 text-white cursor-default" : "bg-white border border-pink-600 text-pink-600"
                      }`}
                      disabled={hoveredRow === index}
                    >
                      Reports
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-10 mt-4">
          <button
            className={`flex items-center gap-4 px-3 py-1 rounded-lg ${
              currentPage === 1 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1 ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`flex items-center gap-4 px-3 py-1 rounded-lg ${
              currentPage === totalPages ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersTable;
