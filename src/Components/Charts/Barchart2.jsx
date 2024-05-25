import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData2 } from "./chartdata";

const BarChart2 = () => {
  const options = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: chartData2.labels,
    },
    colors: ["blueviolet"], // Set the bar color to purple
  };

  const series = [
    {
      name: "Invoices",
      data: chartData2.invoices,
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={400} />;
};

export default BarChart2;
