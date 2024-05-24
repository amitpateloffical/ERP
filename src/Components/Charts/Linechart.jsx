// LineChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData } from "./chartdata";

const LineChart = () => {
  const options = {
    chart: {
      id: "line-chart",
    },
    xaxis: {
      categories: chartData.labels,
    },
    height: "100px"
  };

  const series = [
    {
      name: "Income",
      data: [100, 110, 120, 110, 115, 120, 125, 120, 115],
    },
    {
      name: "Expenses",
      data: [90, 100, 110, 100, 105, 110, 115, 110, 105],
    },
  ];

  return <ReactApexChart options={options} series={series} type="line" height={400} />;
};

export default LineChart;
