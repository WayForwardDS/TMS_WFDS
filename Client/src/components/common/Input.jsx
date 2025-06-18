import React from "react";

const Input = ({ 
  type = "text", 
  name, 
  label, 
  placeholder, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="p-1 mt-2 border rounded-sm  w-42 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
