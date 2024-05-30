import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexAreaChart = ({ height, colors, data, labels, chartTitle, xAxisTitle, yAxisTitle }) => {
  const options = {
    chart: {
      id: "area-chart",
      type: "area",
      title: {
        text: chartTitle,
      },
    },
    xaxis: {
      categories: labels.reverse(), // Reversing the labels for correct order
      title: {
        text: xAxisTitle,
      },
    },
    yaxis: {
      title: {
        text: yAxisTitle,
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
    colors: colors,
  };

  const series = data.map((item) => ({
    name: item.name,
    data: item.data.reverse(), // Reversing the data for correct order
  }));

  return <ReactApexChart options={options} series={series} type="area" height={height} />;
};

export default ApexAreaChart;
