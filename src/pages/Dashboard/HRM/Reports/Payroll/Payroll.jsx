import React, { useEffect, useState } from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Payroll() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [typeMonth, setType] = useState(false);

  useEffect(() => {
    console.log(typeMonth);
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);

  const payrollData = [
    {
      employeeId: "#GAU7879",
      employee: "Gaurav Meena",
      salary: "$3,000.00",
      netSalary: "$2,800.00",
      month: "May-2024",
      status: "paid",
    },
    {
      employeeId: "#PAN8923",
      employee: "Pankaj Jat",
      salary: "$2,500.00",
      netSalary: "$2,300.00",
      month: "May-2024",
      status: "paid",
    },
    {
      employeeId: "#MAY6452",
      employee: "Mayank",
      salary: "$4,000.00",
      netSalary: "$3,800.00",
      month: "May-2024",
      status: "paid",
    },
    {
      employeeId: "#RIT5673",
      employee: "Ritika Sharma",
      salary: "$3,200.00",
      netSalary: "$3,000.00",
      month: "May-2024",
      status: "paid",
    },
    {
      employeeId: "#NEH9874",
      employee: "Neha Gupta",
      salary: "$3,500.00",
      netSalary: "$3,300.00",
      month: "May-2024",
      status: "unpaid",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Payroll</h2>
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
          <div className={styles.field}>
            <label>Employee</label>
            <select>
              <option>Select Employee</option>
              <option>Gaurav Meena</option>
              <option>Pankaj Jat</option>
              <option>Mayank</option>
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
            <b>Monthly Payroll Summary</b>
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
          <pre>Total Basic Salary : </pre>
          <p>
            <b>$1,151,000.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Net Salary : </pre>
          <p>
            <b>$1,167,500.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Allowance : </pre>
          <p>
            <b>$15,100.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Commission : </pre>
          <p>
            <b>$3,000.00</b>
          </p>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Total Loan : </pre>
          <p>
            <b>$1,600.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Saturation Deduction : </pre>
          <p>
            <b>$0.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Other Payment : </pre>
          <p>
            <b>$0.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Overtime : </pre>
          <p>
            <b>$0.00</b>
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
                <th>SALARY</th>
                <th>NET SALARY</th>
                <th>MONTH</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((payroll, index) => (
                <tr key={index}>
                  <td>
                    <p className={styles.employeeID}>{payroll.employeeId}</p>
                  </td>
                  <td>{payroll.employee}</td>
                  <td>{payroll.salary}</td>
                  <td>{payroll.netSalary}</td>
                  <td>{payroll.month}</td>
                  <td>
                    <p className={payroll.status === "unpaid" ? styles.unpaid : styles.paid}>
                      {payroll.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableBottom}>
            <p>
              Showing 1 to {payrollData.length} of {payrollData.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
