import React from "react";
import { Link } from "react-router-dom";

const CourseCards = () => {
  const courses = [
    { title: "Pain", image: "/src/assets/coursecard/card1.png" },
    { title: "Inflammation", image: "/src/assets/coursecard/card1.png" },
    { title: "Musculoskeletal System", image: "/src/assets/coursecard/card1.png" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4 text-pink-700" > My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-auto object-cover" />
            <div className="p-2 text-center">
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm text-center ">Rheumatic or musculoskeletal conditions comprise over 150 diseases and syndromes, which are usually
                 progressive and associated with pain. They can broadly be categorized as joint diseases, physical disability,
                  spinal disorders, and conditions resulting from trauma. Musculoskeletal conditions are leading causes of 
                  morbidity and disability, giving rise to enormous healthcare expenditures and loss of work.</p>
              <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                <Link to="/CourseOverview">
                Overview
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
