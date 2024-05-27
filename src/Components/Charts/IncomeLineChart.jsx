// LineChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData2 } from "./chartdata";

const IncomeLineChart = () => {
  const options = {
    chart: {
      id: "area-chart",
      type: "area",
    },
    xaxis: {
      categories: chartData2.labels, // Reversing the labels for correct order
      title: {
        text: "Months ",
      },
    },
    yaxis: {
      title: {
        text: "Income",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: "dd MMM",
      },
    },
    height: "100%",
    colors: ["#2dc254", "#545454"],
  };

  const series = [
    {
      name: "Income",
      data: [500, 110, 170, 320, 115, 120, 300, 120, 200, 200, 325, 300], // Reversing the data for correct order
    },
  ];

  return <ReactApexChart options={options} series={series} type="area" height={280} />;
};

export default IncomeLineChart;