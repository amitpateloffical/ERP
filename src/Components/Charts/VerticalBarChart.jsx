import React from "react";
import ReactApexChart from "react-apexcharts";

const VerticalBarChart = ({
  xAxisCategories,
  yAxisData,
  barColor = "#00C1E4",
  chartLabel = "Invoices",
  chartHeight = 400,
}) => {
  const options = {
    chart: {
      id: "bar-chart",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: xAxisCategories,
      title: {
        text: chartLabel,
      },
    },
    colors: ["blueviolet"], // Set the bar color to purple
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toString();
      },
    },
  };

  const series = [
    {
      name: chartLabel,
      data: yAxisData,
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={chartHeight} />;
};

export default VerticalBarChart;
