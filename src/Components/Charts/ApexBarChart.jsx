import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexBarChart = ({
  xAxisCategories,
  yAxisData,
  barColor = "blueviolet",
  chartLabel = "Invoices",
  chartHeight = 400,
}) => {
  const options = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: xAxisCategories,
      title: {
        text: chartLabel,
      },
    },
    colors: ["blueviolet"], // Set the bar color to purple
  };

  const series = [
    {
      name: chartLabel,
      data: yAxisData,
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={chartHeight} />;
};

export default ApexBarChart;
