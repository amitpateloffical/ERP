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

export default function POSOverview() {
  const chartData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    invoices: [40, 55, 60, 80, 70, 50, 20, 30],
  };

  return (
    <></>
    // <div className={styles.container}>
    //   <div className={styles.fullWidthContainer}>
    //     {/* <h2 className={styles.textGreen}>POS Dashboard</h2> */}
    //   </div>
    //   <div className={styles.verticalContainer}>
    //     <div className={`${styles.card} ${styles.lead}`}>
    //       <div className={styles.cardLeft}>
    //         <span
    //           style={{
    //             padding: "5%",
    //             backgroundColor: "#c06bd6",
    //             borderRadius: "33%",
    //             marginLeft: "2%",
    //           }}
    //         >
    //           <FaProjectDiagram className={styles.icon2} />
    //         </span>
    //         <div className={styles.contentLeft}>
    //           <pre>Total </pre>
    //           <p className={styles.textPurple}>
    //             <b>Projects </b>
    //           </p>
    //         </div>
    //       </div>
    //       <div className={styles.value}>16</div>
    //     </div>
    //     <div className={`${styles.card} ${styles.lead}`}>
    //       <div className={styles.cardLeft}>
    //         <span
    //           style={{
    //             padding: "5%",
    //             backgroundColor: "green",
    //             borderRadius: "33%",
    //             marginLeft: "2%",
    //           }}
    //         >
    //           <FaTasks className={styles.icon2} />
    //         </span>
    //         <div className={styles.contentLeft}>
    //           <pre>Total </pre>
    //           <p className={styles.textGreen}>
    //             <b>Tasks</b>
    //           </p>
    //         </div>
    //       </div>
    //       <div className={styles.value}>40</div>
    //     </div>
    //     <div className={`${styles.card} ${styles.lead}`}>
    //       <div className={styles.cardLeft}>
    //         <span
    //           style={{
    //             padding: "5%",
    //             backgroundColor: "#e06c28",
    //             borderRadius: "33%",
    //             marginLeft: "2%",
    //           }}
    //         >
    //           <FaMoneyBillWave className={styles.icon2} />
    //         </span>
    //         <div className={styles.contentLeft}>
    //           <pre>Total </pre>
    //           <p className={styles.textGreen1}>
    //             <b>Expense</b>
    //           </p>
    //         </div>
    //       </div>
    //       <div className={styles.value}>3</div>
    //     </div>
    //   </div>

    //   <div className={styles.fullWidthContainer}>
    //     <h5>Purchase Vs POS Report</h5>
    //   </div>
    // </div>
  );
}
