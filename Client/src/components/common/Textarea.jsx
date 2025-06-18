import React from "react";

const Textarea = ({ name, placeholder, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
    />
  );
};

export default Textarea;