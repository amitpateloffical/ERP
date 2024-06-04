import React, { useEffect, useState } from "react";
import styles from "./JobApplication.module.css";
import { FaMoneyBillWave, FaProjectDiagram, FaSearch, FaTasks, FaTimes } from "react-icons/fa";

export default function JobApplication() {
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Job Application</h2>
        </div>
        <div className={styles.fullWidthContainer}>
          <div className={styles.dateFilter}>
            <div className={styles.field}>
              <label>Start Date</label>
              <div className={styles.inputContainer}>
                <input type="Date" defaultValue={currentMonth} />
                {/* <FaCalendarAlt className={styles.icon} /> */}
              </div>
            </div>
            <div className={styles.field}>
              <label>End Date</label>
              <div className={styles.inputContainer}>
                <input type="date" defaultValue={currentMonth} />
                {/* <FaCalendarAlt className={styles.icon} /> */}
              </div>
            </div>
            <div className={styles.field}>
              <label>Job</label>
              <select>
                <option>All of the Below</option>
                <option>Job 1</option>
                <option>Job 2</option>
                <option>Job 3</option>
              </select>
            </div>

            <button className={styles.searchButton}>
              <FaSearch />
            </button>
            <button className={styles.clearButton}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className={styles.verticalContainer}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h5>Applied</h5>
              <span>3</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h5>Phone Screen</h5>
              <span>3</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h5>Interview</h5>
              <span>3</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h5>Hired</h5>
              <span>3</span>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h5>Rejected</h5>
              <span>3</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
