// BarChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData } from "./chartdata";

const BarChart = () => {
  const options = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: chartData.labels,
    },
  };

  const series = [
    {
      name: "Income",
      data: chartData.income,
    },
    {
      name: "Expenses",
      data: chartData.expenses,
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={400} />;
};

export default BarChart;
