import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MetricCard from "./MetricCard";
import Event from "./EventCalender";
import { FaUsers, FaCertificate, FaLayerGroup, FaBook, FaBuilding, FaUsersCog } from "react-icons/fa";

const PublicDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* <Header /> */}

        {/* Company Profile Section */}
        <div className="flex items-center p-6 space-x-6 bg-white rounded-lg shadow-md">
          <img src="./src/assets/wayforwad.jpg" alt="Company Logo" className="w-16 h-auto rounded-full" />
          <div className="ml-8">
            <h2 className="text-xl font-bold text-pink-600">WayForward Digital Solutions</h2>
            <p className="text-gray-500">info@wayforwadds.com</p>
            <p className="text-gray-500">(042) 111 244 374</p>
            <p className="text-sm text-gray-500">Valid till: 22-01-2025</p>
          </div>
          <button className="px-6 py-2 ml-auto text-white bg-red-500 rounded-lg shadow-lg cursor-pointer hover:bg-red-600">
            Edit
          </button>
        </div>

        {/* Metrics Cards */}
        <div className="relative flex gap-2">
        <div className="w-[650px] grid grid-cols-3 gap-6 mt-6 mx-6">
        <MetricCard title="Total Users" value="03" icon={<FaUsers />} 
          gradientTo=" bg-linear-to-b from-red-700 hover:bg-linear-to-b hover:from-white "
          gradientFrom="bg-linear-to-b to-white-400 hover:bg-linear-to-b hover:to-red-700"
           />
          <MetricCard title="Certificates" value="10" icon={<FaCertificate />}
          gradientTo=" bg-linear-to-b from-sky-600 "
          gradientFrom="bg-linear-to-b to-white-400"
           />
          <MetricCard title="Category" value="10" icon={<FaLayerGroup />} 
           gradientTo=" bg-linear-to-b from-red-700 hover:bg-linear-to-b hover:from-white "
          gradientFrom="bg-linear-to-b to-white-400 hover:bg-linear-to-b hover:to-red-700"
          />
          <MetricCard title="Courses" value="04" icon={<FaBook />}
          gradientTo=" bg-linear-to-b from-sky-600 "
          gradientFrom="bg-linear-to-b to-white-400"
          />
          <MetricCard title="Brands" value="25" icon={<FaBuilding />}
          gradientTo=" bg-linear-to-b from-red-700 hover:bg-linear-to-b hover:from-white "
          gradientFrom="bg-linear-to-b to-white-400 hover:bg-linear-to-b hover:to-red-700"
          />
          <MetricCard title="Teams Pakistan" value="25" icon={<FaUsersCog />}
          gradientTo=" bg-linear-to-b from-sky-600 "
          gradientFrom="bg-linear-to-b to-white-400"
          />
        </div>

        <div>
        <Event/>
        </div>
        </div>
      

        {/* Performance & Schedule */}
        <div className="w-[550px] mt-10 mx-16">
          {/* Top Performance */}
          <div className="col-span-2 p-6 rounded-lg shadow-md bg-gradient-to-r from-white via-red-400 to-gray-300" >
            
            <h3 className="mb-4 text-lg font-bold">All PK Top Performance</h3>
            <PerformanceItem name="Ahmed 051" score={99} />
            <PerformanceItem name="Akram 052" score={89} />
            <PerformanceItem name="Ahmed 051" score={79} />
          </div>

          {/* Schedule */}
          {/* <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-bold">Schedule</h3>
            <p>Jan, 2025</p>
            <div className="flex gap-2 my-2">
              {[1, 2, 3, 4, 5].map((day) => (
                <span key={day} className="p-2 text-center bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
                  {day}
                </span>
              ))}
            </div>
            <button className="w-full px-4 py-2 mt-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
              Create Event
            </button>
            <div className="mt-4">
              <p className="text-gray-500">Q&A session with Mike</p>
              <p className="text-sm">02:00 PM - 04:00 PM</p>
              <button className="px-4 py-1 mt-2 text-white bg-blue-500 rounded-lg">Join the Event</button>
            </div>
          </div> */}

          {/* <Event/> */}
        </div>
      </div>
    </div>
  );
};

// const MetricCard = ({ title, value, icon, color }) => (
//   <div className={`p-6 text-white rounded-lg shadow-md ${color}`}>
//     <div className="flex items-center">
//       <span className="text-3xl">{icon}</span>
//       <div className="ml-4">
//         <h4 className="text-lg font-semibold">{title}</h4>
//         <p className="text-2xl font-bold">{value}</p>
//       </div>
//     </div>
//   </div>
// );

const PerformanceItem = ({ name, id, location, score }) => {
    const getMedal = (score) => {
      if (score >= 90) return "🥇"; 
      if (score >= 70) return "🥈"; 
      if (score >= 50) return "🥉"; 
      return "";
    };
  
    return (
      <div className="flex items-center justify-between p-0.5 mb-2 rounded-lg shadow-md bg-sky-200">
        <div className="flex items-center">
          {/* Avatar/Icon */}
          <div className="flex items-center justify-center text-lg font-bold text-white rounded-full h-7 w-7 bg-sky-500 mx-0.5">
            {name.charAt(0)}
          </div>
          <div className="ml-3">
            <span className="font-bold text-blue-900">{name}</span>
            <div className="text-sm text-gray-600">
              {id} <span className="ml-1">({location})</span>
            </div>
          </div>
        </div>
  
        {/* Right Side: Performance */}
        <div className="flex items-center">
          {/* Progress Bar */}
          <div className="relative w-40 h-4 overflow-hidden bg-gray-200 rounded-full">
            <div
              className="h-full bg-red-800 rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>
          {/* Score */}
          <span className="ml-3 text-lg font-semibold text-blue-900">{score}%</span>
          {/* Medal */}
          {score >= 50 && (
            <span className="ml-3 text-2xl">{getMedal(score)}</span>
          )}
        </div>
      </div>
    );
  };
  
  

export default PublicDashboard;




