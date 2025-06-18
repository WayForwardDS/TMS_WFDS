import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ darkMode }) => {
  const data = [
    ["Company", "Users", { role: "style" }],
    ["WFDS", 53, "color: #ed1D26"],
    ["ABC", 23, "color: #34a853"],
    ["ZONG", 1.4, "color: #4285f4"],
    ["Euro", 13, "color: #ff6d00"],
    ["CHIESI", 46, "color: #e94235"],
    ["HIGHNOON", 30, "color: #34a853"],
  ];

  const options = {
    title: "Companies Users",
    legend: "none",
    pieSliceText: "label",
    backgroundColor: darkMode ? "#1F2937" : "#ffffff",
    titleTextStyle: {
      color: darkMode ? "#ffffff" : "#333333", 
    },
    chartArea: {
      width: "80%",
      height: "80%",
      backgroundColor: darkMode ? "#1F2937" : "#ffffff",
    },
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  return (
    <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
};

export default PieChart;
