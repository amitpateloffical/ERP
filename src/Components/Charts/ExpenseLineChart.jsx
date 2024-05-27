// LineChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData2 } from "./chartdata";

const ExpenseLineChart = () => {
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
        text: "Expense",
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
    colors: ["#FF0000", "#545454"],
  };

  const series = [
    {
      name: "Expense",
      data: [700, 110, 370, 100, 115, 120, 500, 120, 200, 200, 125, 200], // Reversing the data for correct order
    },
  ];

  return <ReactApexChart options={options} series={series} type="area" height={280} />;
};

export default ExpenseLineChart;