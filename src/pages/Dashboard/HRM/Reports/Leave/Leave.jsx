import React, { useEffect, useState } from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Leave() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [typeMonth, setType] = useState(false);

  useEffect(() => {
    console.log(typeMonth);
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);

  const leaveData = [
    {
      employeeId: "#GAU7879",
      employee: "Gaurav Meena",
      approvedLeaves: 2,
      rejectedLeaves: 1,
      pendingLeaves: 0,
    },
    {
      employeeId: "#PAN8923",
      employee: "Pankaj Jat",
      approvedLeaves: 1,
      rejectedLeaves: 0,
      pendingLeaves: 1,
    },
    {
      employeeId: "#MAY6452",
      employee: "Mayank",
      approvedLeaves: 3,
      rejectedLeaves: 0,
      pendingLeaves: 0,
    },
    {
      employeeId: "#RIT5673",
      employee: "Ritika Sharma",
      approvedLeaves: 2,
      rejectedLeaves: 1,
      pendingLeaves: 0,
    },
    {
      employeeId: "#NEH9874",
      employee: "Neha Gupta",
      approvedLeaves: 1,
      rejectedLeaves: 2,
      pendingLeaves: 0,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Leave Report</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <div className={styles.dateFilter}>
          <div className={styles.field}>
            <label>Frequency</label>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="monthly"
                name="frequency"
                value="monthly"
                onChange={() => setType(true)}
              />
              <label htmlFor="monthly">Monthly</label>
            </div>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="daily"
                name="frequency"
                value="daily"
                defaultChecked
                onChange={() => setType(false)}
              />
              <label htmlFor="daily">Daily</label>
            </div>
          </div>
          {typeMonth && (
            <div className={styles.field}>
              <label>Month</label>
              <div className={styles.inputContainer}>
                <input type="month" defaultValue={currentMonth} />
                {/* <FaCalendarAlt className={styles.icon} /> */}
              </div>
            </div>
          )}
          {!typeMonth && (
            <div className={styles.field}>
              <label>Year</label>
              <select defaultValue="2024">
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
              </select>
            </div>
          )}
          <div className={styles.field}>
            <label>Branch</label>
            <select>
              <option>Select Branch</option>
              <option>India</option>
              <option>China</option>
              <option>Jordan</option>
              <option>USA</option>
              <option>Australia</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Department</label>
            <select>
              <option>Select Department</option>
              <option>Financials</option>
              <option>Industrials</option>
              <option>Health Care</option>
              <option>Telecommunications</option>
              <option>Health Care</option>
              <option>Financials</option>
              <option>Industrials</option>
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
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Monthly Leave Summary</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>May-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Approved Leaves : </pre>
          <p>
            <b>6</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Rejected Leaves : </pre>
          <p>
            <b>4</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Pending Leaves : </pre>
          <p>
            <b>1</b>
          </p>
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <div className={styles.reportTableContainer}>
          <div className={styles.tableTop}>
            <div className={styles.tableTopleft}>
              <select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
              <p>entries per Page</p>
            </div>
            <div className={styles.field}>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>EMPLOYEE ID</th>
                <th>EMPLOYEE</th>
                <th>APPROVED LEAVES</th>
                <th>REJECTED LEAVES</th>
                <th>PENDING LEAVES</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr key={index}>
                  <td>
                    <p className={styles.employeeID}>{leave.employeeId}</p>
                  </td>
                  <td>{leave.employee}</td>
                  <td>{leave.approvedLeaves}</td>
                  <td>{leave.rejectedLeaves}</td>
                  <td>{leave.pendingLeaves}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableBottom}>
            <p>
              Showing 1 to {leaveData.length} of {leaveData.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
