import React, { useState, useEffect } from "react";
import { FaEye, FaEdit, FaChartLine, FaDownload } from "react-icons/fa"; // Icons for actions
import Sidebar from "./Sidebar";

const Users = () => {
  const [userType, setUserType] = useState(""); // State for User Type dropdown
  const [showCustomFields, setShowCustomFields] = useState(false); // State for conditional fields
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isEditMode, setIsEditMode] = useState(false); // State to track edit mode
  const [editUserId, setEditUserId] = useState(null); // State to track the user being edited

  // Load users from localStorage on component mount
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: "002",
            fullName: "Waseem Abbass",
            email: "waseemabbass09@wayforward.com",
            designation: "Instructor",
            userType: "Instructor",
          },
        ];
  });

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    mobileNumber: "",
    city: "",
    cnic: "",
    userType: "",
    userCategory: "",
    assignTeams: "",
    teamMember: "",
    jobExperience: "",
    lastCompany: "",
  });

  // Handle User Type change
  const handleUserTypeChange = (e) => {
    const selectedType = e.target.value;
    setUserType(selectedType);
    setShowCustomFields(selectedType === "Custom");
    setFormData({ ...formData, userType: selectedType });
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Download Report
  const handleDownloadReport = () => {
    alert("Downloading report..."); // Replace with actual download logic
  };

  // Handle Create User
  const handleCreateUser = () => {
    setIsModalOpen(true);
    setIsEditMode(false);
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      mobileNumber: "",
      city: "",
      cnic: "",
      userType: "",
      userCategory: "",
      assignTeams: "",
      teamMember: "",
      jobExperience: "",
      lastCompany: "",
    });
    setUserType("");
    setShowCustomFields(false);
  };

  // Handle Edit User
  const handleEditUser = (user) => {
    setIsModalOpen(true);
    setIsEditMode(true);
    setEditUserId(user.id);

    // Pre-fill the form with the user's data
    const [firstName, lastName] = user.fullName.split(" ");
    setFormData({
      firstName,
      lastName,
      password: "", // Password is not stored in the sample data
      mobileNumber: "", // Mobile number is not stored in the sample data
      city: "", // City is not stored in the sample data
      cnic: "", // CNIC is not stored in the sample data
      userType: user.userType,
      userCategory: "", // User category is not stored in the sample data
      assignTeams: "", // Assign teams is not stored in the sample data
      teamMember: "", // Team member is not stored in the sample data
      jobExperience: "", // Job experience is not stored in the sample data
      lastCompany: "", // Last company is not stored in the sample data
    });
    setUserType(user.userType);
    setShowCustomFields(user.userType === "Custom");
  };

  // Handle Close Modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditUserId(null);
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      mobileNumber: "",
      city: "",
      cnic: "",
      userType: "",
      userCategory: "",
      assignTeams: "",
      teamMember: "",
      jobExperience: "",
      lastCompany: "",
    });
    setUserType("");
    setShowCustomFields(false);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user.id === editUserId
          ? {
              ...user,
              fullName: `${formData.firstName} ${formData.lastName}`,
              userType: formData.userType,
            }
          : user
      );
      setUsers(updatedUsers);
    } else {
      // Create new user
      const newUserId = String(users.length + 1).padStart(3, "0");
      const newUser = {
        id: newUserId,
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`,
        designation: formData.userType,
        userType: formData.userType,
      };
      setUsers([...users, newUser]);
    }

    // Close the modal and reset the form
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (You can reuse your existing Sidebar component) */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-1 p-6 bg-gray-100 ${isModalOpen ? "opacity-50" : ""}`}>
        <h1 className="mb-6 text-2xl font-bold">Users</h1>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={handleCreateUser}
            className="px-6 py-2 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
          >
            Create User
          </button>
          <button
            onClick={handleDownloadReport}
            className="px-6 py-2 text-white rounded-md cursor-pointer bg-sky-500 hover:bg-sky-600"
          >
            <FaDownload className="inline-block mr-2" />
            Download Report
          </button>
        </div>

        {/* User List Table */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">User ID</th>
                <th className="p-2">Full Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Designation</th>
                <th className="p-2">User Type</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gradient-to-r from-sky-500 via-red-500 to-sky-500 hover:text-white">
                  <td className="p-2 text-center">{user.id}</td>
                  <td className="p-2 text-center">{user.fullName}</td>
                  <td className="p-2 text-center">{user.email}</td>
                  <td className="p-2 text-center">{user.designation}</td>
                  <td className="p-2 text-center">{user.userType}</td>
                  <td className="p-2 text-center">
                    <div className="flex justify-center space-x-4 ">
                      <button className="text-black cursor-pointer hover:text-white">
                        <FaEye />
                      </button>
                      <button
                        className="text-black cursor-pointer hover:hover:text-white"
                        onClick={() => handleEditUser(user)}
                      >
                        <FaEdit />
                      </button>
                      <button className="text-black cursor-pointer hover:text-white">
                        <FaChartLine />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pop-up Modal for Add/Edit User Form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 max-w-3xl p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-6 text-xl font-bold">
                {isEditMode ? "Edit User" : "Add User"}
              </h2>
              <form onSubmit={handleSubmit}>
                {/* First Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter First Name"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter Last Name"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter Password"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold">Mobile Number</label>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Mobile Number"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter City Name"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold">CNIC No.</label>
                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleInputChange}
                      placeholder="Enter CNIC No."
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold">User Type</label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleUserTypeChange}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Select User Type</option>
                      <option value="Admin">Admin</option>
                      <option value="Instructor">Instructor</option>
                      <option value="Student">Student</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold">User Category</label>
                    <select
                      name="userCategory"
                      value={formData.userCategory}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Category A">Category A</option>
                      <option value="Category B">Category B</option>
                    </select>
                  </div>
                </div>

                {/* Conditional Fields for Custom User Type */}
                {showCustomFields && (
                  <>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-semibold">Assign Teams</label>
                        <input
                          type="text"
                          name="assignTeams"
                          value={formData.assignTeams}
                          onChange={handleInputChange}
                          placeholder="Assign Teams"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-semibold">Team Member</label>
                        <input
                          type="text"
                          name="teamMember"
                          value={formData.teamMember}
                          onChange={handleInputChange}
                          placeholder="Team Member"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-semibold">Job Experience</label>
                        <input
                          type="text"
                          name="jobExperience"
                          value={formData.jobExperience}
                          onChange={handleInputChange}
                          placeholder="Enter your Job Experience"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-semibold">Last Company</label>
                        <input
                          type="text"
                          name="lastCompany"
                          value={formData.lastCompany}
                          onChange={handleInputChange}
                          placeholder="Where you worked before?"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Submit and Cancel Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
                  >
                    {isEditMode ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;