import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CompanyGrowthChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Company Growth - Market Share",
    },
    subtitle: {
      text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ["50%", "50%"],
      },
    },
    tooltip: {
      valueSuffix: "%",
    },
    series: [
      {
        name: "Companies",
        data: [
          { name: "Apple", y: 27.16, color: "#ff9999" },
          { name: "Samsung", y: 23.72, color: "#66b3ff" },
          { name: "Xiaomi", y: 11.92, color: "#99ff99" },
          { name: "Oppo", y: 6.12, color: "#ffcc99" },
          { name: "Vivo", y: 5.48, color: "#c2c2f0" },
          { name: "Realme", y: 3.89, color: "#ffb3e6" },
          { name: "Huawei", y: 3.49, color: "#c2f0c2" },
          { name: "Motorola", y: 2.38, color: "#ff6666" },
          { name: "Infinix", y: 1.59, color: "#ffdb4d" },
          { name: "Other", y: 7.39, color: "#cccccc" },
        ],
        size: "45%",
        dataLabels: {
          color: "#ffffff",
          distance: "-50%",
        },
      },
      {
        name: "Sub-Brands",
        data: [
          { name: "iPhone 13", y: 12, color: "#ff8080" },
          { name: "iPhone 12", y: 8, color: "#ff9999" },
          { name: "Galaxy S21", y: 10, color: "#3399ff" },
          { name: "Galaxy A52", y: 7, color: "#66b3ff" },
          { name: "Redmi Note 10", y: 6, color: "#66ff66" },
          { name: "Mi 11", y: 5, color: "#99ff99" },
          { name: "Other", y: 52, color: "#e6e6e6" },
        ],
        size: "80%",
        innerSize: "60%",
        dataLabels: {
          format: "<b>{point.name}:</b> {y}%",
          filter: {
            property: "y",
            operator: ">",
            value: 2,
          },
          style: {
            fontWeight: "normal",
          },
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CompanyGrowthChart;
