import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const QuizQuestion = () => {
  return (
    <div className="p-6">
      {/* Return Button */}
      <button className="bg-pink-700 text-white px-4 py-1 rounded-lg text-sm mb-4">
        <Link to="/CourseOverview">Return to Lesson</Link>
      </button>

      {/* Question Section */}
      <div className="flex flex-col md:flex-row gap-6 mx-6">
        {/* Question and Options */}
        <div className="flex-1 mx-4 my-24">
          <h2 className="text-xl font-bold mb-4">
            What are musculoskeletal conditions primarily associated with?
          </h2>
          <ul className="space-y-2 text-lg font-medium">
            <li>A) Vision impairment</li>
            <li>B) Pain and physical disability</li>
            <li>C) Respiratory issues</li>
            <li>D) Cardiovascular diseases</li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-pink-700 text-white px-6 py-2 rounded-lg text-lg">
              Start Quiz
            </button>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg text-lg flex items-center gap-2 opacity-50 cursor-not-allowed">
              Next Lesson <FaLock />
            </button>
          </div>
        </div>

        {/* Sidebar Progress */}
        <div className="w-72 h-[350px] border-2 border-pink-500 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-pink-700">Pain</h3>
          <ul className="mt-2 text-md space-y-2">
            <li className="text-pink-700 font-bold">• Definition of Pain</li>
            <li className="flex items-center justify-between">
              • Acute Pain <FaLock className="text-pink-600" />
            </li>
            <li className="flex items-center justify-between">
              • Chronic Pain <FaLock className="text-pink-600" />
            </li>
            <li className="flex items-center justify-between">
              • Visceral Pain <FaLock className="text-pink-600" />
            </li>
            <li className="flex items-center justify-between">
              • Somatic Pain <FaLock className="text-pink-600" />
            </li>
            <li className="flex items-center justify-between">
              • Cancer Pain <FaLock className="text-pink-600" />
            </li>
            <li className="flex items-center justify-between">
              • Mechanism of Pain <FaLock className="text-pink-600" />
            </li>
          </ul>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div className="bg-pink-600 h-4 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-right mt-1 text-md font-bold">75%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
