import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Modal from "../common/Modal";
import Textarea from "../common/Textarea";
import Sidebar from "./Sidebar";

const CompanyProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyData, setCompanyData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    limitedAccess: "",
    subscription: "",
    location: "",
    owner: "",
    logo: "",
    color1: "#000000",
    color2: "#000000",
    access: [],
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, logo: URL.createObjectURL(e.target.files[0]) }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      access: checked ? [...prev.access, name] : prev.access.filter((item) => item !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanyData(form);
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Company Profiles</h2>
          <Button text="+ Create Company" onClick={() => setIsModalOpen(true)} className="px-4 py-2 text-white bg-red-500 cursor-pointer hover:bg-red-700" />
        </div>

        {companyData && (
          <div className="w-full p-4 bg-white rounded-lg shadow-lg md:w-3/4 lg:w-1/2">
            <div className="flex items-center space-x-4">
              <img src={companyData.logo} alt="Company Logo" className="w-16 h-16 rounded" />
              <div>
                <h3 className="text-lg font-bold">{companyData.name}</h3>
                <p className="text-sm text-gray-500">{companyData.email}</p>
                <p className="text-sm text-gray-500">{companyData.phone}</p>
                <p className="text-sm text-gray-500">{companyData.location}</p>
              </div>
            </div>
          </div>
        )}

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Company">
        <form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid grid-cols-4 gap-4">
    
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium text-gray-700">Company Name</label>
      <Input name="name" placeholder="Enter Company Name" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
      <Input name="phone" placeholder="Enter Phone Number" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
      <Input name="email" placeholder="Enter Email Address" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
      <Input name="password" type="password" placeholder="Enter Password" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="role" className="text-sm font-medium text-gray-700">Role</label>
      <select name="role" onChange={handleInputChange} required className="w-full p-1 mt-2 text-sm border rounded">
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Employee">Editor</option>
        <option value="Manager">Manager</option>
        <option value="Employee">Employee</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="limitedAccess" className="text-sm font-medium text-gray-700">Limited Access</label>
      <Input name="limitedAccess" placeholder="Enter Limited Access" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="subscription" className="text-sm font-medium text-gray-700">Subscription</label>
      <select name="subscription" onChange={handleInputChange} required className="w-full p-1 mt-2 text-sm border rounded">
        <option value="">Subscription Time</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label htmlFor="location" className="text-sm font-medium text-gray-700">Company Location</label>
      <Input name="location" placeholder="Enter Company Location" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="owner" className="text-sm font-medium text-gray-700">Owner Name</label>
      <Input name="owner" placeholder="Enter Owner Name" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="logo" className="text-sm font-medium text-gray-700">Company Logo</label>
      <Input type="file" onChange={handleFileChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="color1" className="text-sm font-medium text-gray-700">Primary Color</label>
      <Input type="color" name="color1" onChange={handleInputChange} required />
    </div>

    <div className="flex flex-col">
      <label htmlFor="color2" className="text-sm font-medium text-gray-700">Secondary Color</label>
      <Input type="color" name="color2" onChange={handleInputChange} required />
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <label><input type="checkbox" name="User" onChange={handleCheckboxChange} /> User</label>
    <label><input type="checkbox" name="Certificate" onChange={handleCheckboxChange} /> Certificate</label>
    <label><input type="checkbox" name="Category" onChange={handleCheckboxChange} /> Category</label>
    <label><input type="checkbox" name="Brand" onChange={handleCheckboxChange} /> Brand</label>
    <label><input type="checkbox" name="Course" onChange={handleCheckboxChange} /> Course</label>
    <label><input type="checkbox" name="Team" onChange={handleCheckboxChange} /> Team</label>
  </div>

  <div className="flex flex-col">
    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
    <Textarea name="description" placeholder="Description" onChange={handleInputChange} />
  </div>

  <Button text="Create" type="submit" className="w-full px-4 py-2 text-white bg-red-500 hover:bg-red-700" />
</form>
        </Modal>
      </div>
    </div>
  );
};

export default CompanyProfile;
