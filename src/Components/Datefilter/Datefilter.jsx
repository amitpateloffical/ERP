// src/DateFilter.js

import React, { useEffect, useState } from "react";
import {  FaSearch, FaTimes } from "react-icons/fa";
import styles from "./DateFilter.module.css";

const DateFilter = () => {
      const [currentMonth, setCurrentMonth] = useState("");

      useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        setCurrentMonth(`${year}-${month}`);
      }, []);
  return (
    <div className={styles.dateFilter}>
      <div className={styles.field}>
        <label>Start Month</label>
        <div className={styles.inputContainer}>
          <input type="month" defaultValue={currentMonth} />
          {/* <FaCalendarAlt className={styles.icon} /> */}
        </div>
      </div>
      <div className={styles.field}>
        <label>End Month</label>
        <div className={styles.inputContainer}>
          <input type="month" defaultValue={currentMonth} />
          {/* <FaCalendarAlt className={styles.icon} /> */}
        </div>
      </div>
      <div className={styles.field}>
        <label>Account</label>
        <select>
          <option>Select Account</option>
          <option>Cash</option>
          <option>Gaurav Meena</option>
          <option>Amit Patel</option>
        </select>
      </div>
      <div className={styles.field}>
        <label>Category</label>
        <select>
          <option>Select Category</option>
          <option>Revenue</option>
          <option>Payment</option>
        </select>
      </div>
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
      <button className={styles.clearButton}>
        <FaTimes />
      </button>
    </div>
  );
};

export default DateFilter;
