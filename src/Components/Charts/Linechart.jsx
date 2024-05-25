  // LineChart.js
  import React from "react";
  import ReactApexChart from "react-apexcharts";
  import { chartData } from "./chartdata";

  const LineChart = () => {
    const options = {
      chart: {
        id: "area-chart",
        type: "area",
      },
      xaxis: {
        categories: chartData.labels.reverse(), // Reversing the labels for correct order
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Cashflow",
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
      colors: ["#77B6EA", "#545454"],
    };

    const series = [
      {
        name: "Income",
        data: [100, 110, 120, 110, 115, 120, 125, 120, 115].reverse(), // Reversing the data for correct order
      },
      {
        name: "Expenses",
        data: [90, 100, 110, 100, 105, 110, 115, 110, 105].reverse(), // Reversing the data for correct order
      },
    ];

    return <ReactApexChart options={options} series={series} type="area" height={280} />;
  };

  export default LineChart;



  // // red and green
//   // LineChart.js
// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { chartData } from "./chartdata";

// const LineChart = () => {
//   const options = {
//     chart: {
//       id: "area-chart",
//       type: 'area',
//       stacked: false,
//       height: 350,
//       zoom: {
//         enabled: false
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     markers: {
//       size: 0,
//     },
//     xaxis: {
//       categories: chartData.labels.reverse(), // Ensure labels are in correct chronological order
//       title: {
//         text: 'Date',
//       },
//     },
//     yaxis: {
//       title: {
//         text: 'Cashflow',
//       },
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//       }
//     },
//     stroke: {
//       curve: 'smooth',
//       width: 2,
//       colors: ['#00FF00', '#FF0000'], // Green and red colors for the lines
//     },
//     tooltip: {
//       x: {
//         format: 'dd MMM',
//       },
//     },
//     colors: ['#00FF00', '#FF0000'], // Green and red colors for the lines
//     legend: {
//       position: 'top',
//     },
//   };

//   const series = [
//     {
//       name: "Income",
//       data: [100, 110, 120, 110, 115, 120, 125, 120, 115].reverse(), // Ensure data is in correct chronological order
//     },
//     {
//       name: "Expenses",
//       data: [90, 100, 110, 100, 105, 110, 115, 110, 105].reverse(), // Ensure data is in correct chronological order
//     },
//   ];

//   return <ReactApexChart options={options} series={series} type="area" height={350} />;
// };

// export default LineChart;
