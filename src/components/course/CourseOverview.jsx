import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseDefinition = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-2/3">
        <img
          src="/src/assets/coursecard/card1.png"
          alt="Chiesi"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold">Definition of Pain</h2>
          <p className="text-gray-600 mt-2">
            Rheumatic or musculoskeletal conditions comprise over 150 diseases and
            syndromes, which are usually progressive and associated with pain. They
            can broadly be categorized as joint diseases, physical disability,
            spinal disorders, and conditions resulting from trauma. Musculoskeletal
            conditions are leading causes of morbidity and disability, giving rise
            to enormous healthcare expenditures and loss of work.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-6 py-2 mt-4 rounded-lg w-full cursor-pointer">
            <Link to="/QuizQuestion">
            Take Quiz
            </Link>
          </button>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 border border-pink-600">
        <h3 className="text-lg font-bold">Pain</h3>
        <ul className="mt-2 text-gray-700">
          <li className="text-pink-600 font-semibold">Definition of Pain</li>
          {[
            "Acute Pain",
            "Chronic Pain",
            "Visceral Pain",
            "Somatic Pain",
            "Cancer Pain",
            "Mechanism of Pain",
          ].map((topic, index) => (
            <li key={index} className="flex justify-between items-center mt-1 cursor-pointer">
              {topic} <FaLock className="text-pink-600" />
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <div className="relative w-full bg-gray-300 rounded-full h-4">
            <div
              className="absolute top-0 left-0 h-4 bg-pink-600 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-right mt-1 font-semibold">75%</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDefinition;
