// import React from "react";

// const MetricCard = ({ title, value, bgColor, textColor }) => {
//   return (
//     <div className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} text-center`}>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="mt-2 text-3xl font-bold">{value}</p>
//     </div>
//   );
// };

// export default MetricCard;


import React from "react";

const MetricCard = ({ title, value, icon, gradientFrom, gradientTo, linkText }) => {
  return (
    <div
      className={`p-3 rounded-lg shadow-md text-white bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-lg font-bold">{value}</p>
        </div>
        <div className="text-5xl animate-slow-float">{icon}</div>
      </div>
      <a href="http://localhost:5173/users" className="block mt-4 text-sm underline">
        {linkText}
      </a>
    </div>
  );
};

export default MetricCard;