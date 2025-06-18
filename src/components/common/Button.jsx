import React from "react";

const Button = ({ text, onClick, color = "blue-600", className = "", type = "button" }) => {
  const colorClasses = {
    "red-600": "bg-red-600 hover:bg-red-700",
    "purple-700": "bg-purple-700 hover:bg-purple-800",
    "blue-600": "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colorClasses[color] || colorClasses["blue-600"]} ${className} text-white font-bold py-2 px-4 rounded-lg transition-colors`}
    >
      {text}
    </button>
  );
};

export default Button;
