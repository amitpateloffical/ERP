import React from "react";
import styles from "./Dashboard.module.css";    

const DashBoard = () => {
  return (
    <main className={styles.outlet}>
      <h1>Dashboard</h1>
      <div className={styles.cards}>
        <div className={styles.card}>Total Customers: 9</div>
        <div className={styles.card}>Total Vendors: 9</div>
        <div className={styles.card}>Total Invoices: 7</div>
        <div className={styles.card}>Total Bills: 10</div>
      </div>
      <div className={styles.graphs}>
        <div className={styles.graph}>Income & Expense</div>
        <div className={styles.graph}>Cashflow</div>
        <div className={styles.graph}>Account Balance</div>
        <div className={styles.graph}>Income Vs Expense</div>
      </div>
    </main>
  );
};

export default DashBoard;
