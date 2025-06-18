import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const GraphCard = ({ title, darkMode }) => {
  const options = {
    chart: {
      backgroundColor: darkMode ? "#1F2937" : "#ffffff", // 🔥 Dynamic background color
    },
    title: {
      text: "Companies",
      style: {
        color: darkMode ? "#ffffff" : "#333333", // 🔥 Dynamic title color
        fontSize: "20px",
      },
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        style: {
          color: darkMode ? "#ffffff" : "#333333", // 🔥 Axis label color
        },
      },
    },
    yAxis: {
      type: "logarithmic",
      minorTickInterval: 0,
      gridLineColor: darkMode ? "#374151" : "#e0e0e0", // 🔥 Grid line color
      labels: {
        style: {
          color: darkMode ? "#ffffff" : "#333333",
        },
      },
    },
    tooltip: {
      backgroundColor: darkMode ? "#374151" : "#ffffff", // 🔥 Tooltip background
      style: {
        color: darkMode ? "#ffffff" : "#333333", // 🔥 Tooltip text color
      },
    },
    series: [
      {
        name: "Growth",
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        type: "line",
        color: darkMode ? "#ff6d00" : "#ed1D26", // 🔥 Line color adjustment
      },
    ],
  };

  return (
    <div className={`p-6 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GraphCard;
