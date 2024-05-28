import React, { useEffect, useState } from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function MonthlyAttendance() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [typeMonth, setType] = useState(false);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Monthly Attendance</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <div className={styles.dateFilter}>
          <div className={styles.field}>
            <label>Year</label>
            <select>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option selected>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
            </select>
          </div>

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
              <option>Mayank </option>
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
            <b>Attendance Summary</b>
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
          <pre>Attendance </pre>
          <p>
            <b>Total present: 1</b>
          </p>
          {/* <p>
            <b>Total leave : 0</b>
          </p> */}
        </div>
        <div className={styles.item}>
          <pre>Overtime </pre>
          <p>
            <b>Total overtime in hours : 12.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Early leave</pre>
          <p>
            <b>Total early leave in hours : 12.00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Employee late</pre>
          <p>
            <b>Total late in hours : 8.93</b>
          </p>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
        <div className={styles.reportTableContainer}>
          <table className={styles.dashboardTable}>
            <thead>
              <th style={{ width: "200px" }}>NAME</th>
              <th>01 </th>
              <th>02 </th>
              <th>03 </th>
              <th>04 </th>
              <th>05 </th>
              <th>06 </th>
              <th>07 </th>
              <th>08 </th>
              <th>09 </th>
              <th>10 </th>
              <th>11 </th>
              <th>12 </th>
              <th>13 </th>
              <th>14 </th>
              <th>15 </th>
              <th>16 </th>
              <th>17 </th>
              <th>18 </th>
              <th>19 </th>
              <th>20 </th>
              <th>21 </th>
              <th>22 </th>
              <th>23 </th>
              <th>24 </th>
              <th>25 </th>
              <th>26 </th>
              <th>27 </th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
            </thead>
            <tbody>
              <tr>
                <td>Gaurav Meena</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Amit Patel</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Pankaj Jat</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Mayank Rathore</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Anshul</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
