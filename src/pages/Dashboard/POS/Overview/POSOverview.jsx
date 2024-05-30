import React, { useEffect, useState } from "react";
import styles from "./POSOverview.module.css";
import {
  FaMoneyBillWave,
  FaRegAddressCard,
  FaUsers,
  FaHandshake,
  FaFileContract,
  FaTasks,
  FaProjectDiagram,
} from "react-icons/fa";
import ProfitLineChart from "../../../../Components/Charts/ProfitLineChart";
import VerticalBarChart from "../../../../Components/Charts/VerticalBarChart";
import LineChart from "../../../../Components/Charts/Linechart";
import ApexAreaChart from "../../../../Components/Charts/ApexAreaChart";

export default function POSOverview() {
  const data = [
    {
      name: "Income",
      data: [100, 110, 120, 110, 115, 120, 125, 120, 115],
    },
    {
      name: "Expenses",
      data: [90, 100, 110, 100, 105, 110, 115, 110, 105],
    },
  ];

  const labels = [
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
    "08 Jan",
    "09 Jan",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Project Dashboard</h2>
      </div>
      <div className={styles.verticalContainer}>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "#c06bd6",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaProjectDiagram className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textPurple}>
                <b> POS Of This Month </b>
              </p>
            </div>
          </div>
          <div className={styles.value}> $ 0,00</div>
        </div>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "green",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaTasks className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen}>
                <b>POS Amount</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>$ 109.445,50</div>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "green",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaTasks className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen}>
                <b>Purchase Of This Month</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>$ 3.612,00</div>
        </div>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "#e06c28",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaMoneyBillWave className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen1}>
                <b>Purchase Amount</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>$ 906.179,89</div>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
        <h5>Purchase Vs POS Report</h5>
        <ApexAreaChart
          height="500"
          colors={["#77B6EA", "#545454"]}
          data={data}
          labels={labels}
          chartTitle="Cashflow Analysis"
          xAxisTitle="Days"
          yAxisTitle="Amount"
        />
      </div>
    </div>
  );
}
