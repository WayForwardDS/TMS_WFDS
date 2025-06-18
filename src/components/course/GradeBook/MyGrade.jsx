import React from "react";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";
import ChiesiSidebar from "../../dashboard/chiesiSidebar";

const MyGrades = () => {
  const grades = [
    { id: "C101", category: "Science", name: "Biology Basics", percentage: 95, grade: "A+", award: "gold" },
    { id: "C102", category: "Mathematics", name: "Algebra Essentials", percentage: 85, grade: "A", award: "silver" },
    { id: "C103", category: "History", name: "World War II", percentage: 75, grade: "B", award: "bronze" },
  ];

  const getMedal = (type) => {
    const colors = {
      gold: "text-yellow-500 drop-shadow-lg animate-pulse",
      silver: "text-gray-400 drop-shadow-md animate-pulse",
      bronze: "text-orange-600 drop-shadow-sm animate-pulse",
    };
    return <FaMedal className={`text-3xl ${colors[type]}`} />;
  };

  return (
    <div className="flex bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <ChiesiSidebar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-6 my-16 w-full"
      >
        <h2 className="text-4xl font-extrabold text-red-700 mb-6 drop-shadow-md">My Grades</h2>
        <div className="overflow-x-auto rounded-lg shadow-2xl backdrop-blur-md bg-white/60 p-4">
          <motion.table
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full text-left border-collapse rounded-lg shadow-md"
          >
            <thead className="bg-red-600 text-white text-lg">
              <tr>
                <th className="p-4">Course ID</th>
                <th className="p-4">Category</th>
                <th className="p-4">Course Name</th>
                <th className="p-4">Percentage</th>
                <th className="p-4">Grade</th>
                <th className="p-4">Award</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((course, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 0.99, backgroundColor: "#f48d91" }}
                  className="border-t hover:shadow-lg transition-all "
                >
                  <td className="p-4 text-gray-800 font-medium">{course.id}</td>
                  <td className="p-4 text-gray-700">{course.category}</td>
                  <td className="p-4 text-gray-900 font-semibold">{course.name}</td>
                  <td className="p-4 text-gray-700">{course.percentage}%</td>
                  <td className="p-4 font-bold text-sky-600 text-lg">{course.grade}</td>
                  <td className="p-4 flex items-center gap-2">{getMedal(course.award)}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>
    </div>
  );
};

export default MyGrades;