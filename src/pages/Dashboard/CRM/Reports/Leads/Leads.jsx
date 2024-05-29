import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import BarChart2 from "../../../../../Components/Charts/Barchart2";
import Tab from "../../../../../Components/Tabs/Tabs";
import ApexBarChart from "../../../../../Components/Charts/ApexBarChart";

export default function Leads() {
  const chartData = {
    sourcesConversion: {
      labels: ["Websites", "Facebook", "Naukri.com", "Phone", "Linkedin"],
      invoices: [1.5, 2.4, 2.0, 3.0, 1.0],
    },
    monthly: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      invoices: [1.5, 2.4, 2.0, 3.0, 1.0, 4.0, 3.5, 1.3, 2.7, 3.0, 1.2, 3.6],
    },
    staffReport: {
      labels: ["Gaurav", "Pankaj", "Mayank", "Anshul", "Amit", "Shubham", "Manish", "Shivam"],
      invoices: [1.5, 2.4, 2.0, 3.0, 1.0, 4.0, 3.5, 1.3, 2.7, 3.0, 1.2, 3.6],
    },
    pipelineReport: {
      labels: ["Sales", "Pipeline",],
      invoices: [2.5, 5],
    },
  };

  const generalReport = (
    <>
      <div className={styles.chartContainer}>
        <h5>Sources Conversion</h5>
        <ApexBarChart
          xAxisCategories={chartData.sourcesConversion.labels}
          yAxisData={chartData.sourcesConversion.invoices}
          barColor="purple"
          chartLabel="Source"
          chartHeight={450}
        />
      </div>
      <div className={styles.chartContainer}>
        <h5>Monthly</h5>
        <ApexBarChart
          xAxisCategories={chartData.monthly.labels}
          yAxisData={chartData.monthly.invoices}
          barColor="purple"
          chartLabel="Lead Per Month"
          chartHeight={450}
        />
      </div>
    </>
  );

  const staffReport = (
    <>
      <div className={styles.chartContainer}>
        <h5>Staff Report</h5>
        <ApexBarChart
          xAxisCategories={chartData.staffReport.labels}
          yAxisData={chartData.staffReport.invoices}
          barColor="User"
          chartLabel="Monthly Invoices"
          chartHeight={450}
        />
      </div>
    </>
  );
  const pipelineReport = (
    <>
      <div className={styles.chartContainer}>
        <h5>Pipeline Report</h5>
        <ApexBarChart
          xAxisCategories={chartData.pipelineReport.labels}
          yAxisData={chartData.pipelineReport.invoices}
          barColor="purple"
          chartLabel="Pipeline"
          chartHeight={450}
        />
      </div>
    </>
  );

  const tabs = [
    { label: "Summary", content: generalReport },
    { label: "Staff Report", content: staffReport },
    { label: "Pipelines Report", content: pipelineReport },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Lead</h2>
      </div>
 
      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
