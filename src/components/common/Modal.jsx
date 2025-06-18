import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-5 bg-white rounded-lg shadow-lg w-[800px] h-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-red-500">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;