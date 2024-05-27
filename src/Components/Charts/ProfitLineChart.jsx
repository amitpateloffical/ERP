// LineChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartData2 } from "./chartdata";

const ProfitLineChart = () => {
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
        text: "Profit",
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
    colors: ["#e8ba56", "#545454"],
  };

  const series = [
    {
      name: "Profit",
      data: [150,100,50,122 ,200, 34, 43 ,142, 211,190,111,121], // Reversing the data for correct order
    },
  ];

  return <ReactApexChart options={options} series={series} type="area" height={280} />;
};

export default ProfitLineChart;
