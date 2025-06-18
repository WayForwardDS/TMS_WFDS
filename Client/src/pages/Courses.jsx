import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

const Courses = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [courses, setCourses] = useState([
    { title: "Quill's - B01", category: "Musculoskeletal", brand: "Brexin" },
    { title: "xyz - abc", category: "Musculoskeletal", brand: "Liometacen" },
  ]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "",
    brand: "",
  });

  const handleCreateCourse = () => {
    setIsPanelOpen(true);
    setIsSidebarCollapsed(true); // Collapse sidebar
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setIsSidebarCollapsed(false); // Expand sidebar back
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCourse.title && newCourse.category && newCourse.brand) {
      setCourses((prev) => [...prev, newCourse]);
      setNewCourse({ title: "", category: "", brand: "" });
      handleClosePanel(); // Close sidebar after submitting
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? "w-16" : "w-64"}`}>
        <Sidebar isCollapsed={isSidebarCollapsed} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Courses</h1>

          {/* Create Course Button */}
          <button
            onClick={handleCreateCourse}
            className="px-6 py-3 text-white transition-all bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
          >
            Create Course
          </button>
        </div>

        {/* Courses List */}
        <div className="space-y-4 w-[500px]">
          {courses.map((course, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{course.title}</h2>
              <p className="text-sm text-gray-500">{course.category}</p>
              <p className="text-sm text-gray-500">{course.brand}</p>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600">Preview</button>
                <button className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-lg transition-transform duration-300 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="mb-6 text-xl font-bold">Create Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2 text-sm font-semibold">Course Code</label>
                <input
                  type="text"
                  name="code"
                  value={newCourse.code}
                  onChange={handleInputChange}
                  placeholder="Enter Course Code"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Course Title</label>
                <input
                  type="text"
                  name="title"
                  value={newCourse.title}
                  onChange={handleInputChange}
                  placeholder="Enter Course Title"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Company</label>
                <select
                  name="company"
                  value={newCourse.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Company</option>
                  <option value="Company A">Company A</option>
                  <option value="Company B">Company B</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Category</label>
                <select
                  name="category"
                  value={newCourse.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Musculoskeletal">Musculoskeletal</option>
                  <option value="Cardiology">Cardiology</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Brand</label>
                <select
                  name="brand"
                  value={newCourse.brand}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Brand</option>
                  <option value="Brexin">Brexin</option>
                  <option value="Liometacen">Liometacen</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Description</label>
              <textarea
                name="description"
                value={newCourse.description}
                onChange={handleInputChange}
                className="w-full h-32 p-2 border rounded-md"
                placeholder="Enter course description"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleClosePanel}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Courses;
