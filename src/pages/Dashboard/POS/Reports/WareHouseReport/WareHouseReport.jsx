import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import LineChart from "../../../../../Components/Charts/Linechart";
import IncomeLineChart from "../../../../../Components/Charts/IncomeLineChart";
import ApexAreaChart from "../../../../../Components/Charts/ApexAreaChart";
// import styles from "./AccountStatement.module.css";
export default function WareHouseReport() {
  const data = [
    {
      name: "Product",
      data: [100, 110, 120, 110, 115],
    },
  ];

  const labels = ["Warehouse 1", "Warehouse 2", "Warehouse 3", "Warehouse 4", "Warehouse 5"];
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Warehouse Report</h2>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b> Warehouse Report</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Warehouse : </pre>
          <p>
            <b>4</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Product : </pre>
          <p>
            <b>20</b>
          </p>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
        <h5>Warehouse Report</h5>
        <ApexAreaChart
          height="400"
          colors={["#77B6EA", "#545454"]}
          data={data}
          labels={labels}
          chartTitle="Cashflow Analysis"
          xAxisTitle="Warehouse"
          yAxisTitle=""
        />
      </div>
    </div>
  );
}
