import React, { useEffect, useState } from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import LineChart from "../../../../../Components/Charts/Linechart";
import IncomeLineChart from "../../../../../Components/Charts/IncomeLineChart";
import ApexAreaChart from "../../../../../Components/Charts/ApexAreaChart";
import Tab from "../../../../../Components/Tabs/Tabs";
import { FaSearch, FaTimes } from "react-icons/fa";
// import styles from "./AccountStatement.module.css";
export default function PosReport() {
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);
  const data = [
    {
      name: "POS",
      data: [100, 110, 120, 110, 115, 100, 110, 120, 110, 115],
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

 const labels2 = [
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
 ];

  const dailyTabContent = (
    <>
      <div className={styles.fullWidthContainer}>
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
            <label>Warehouse</label>
            <select>
              <option>All Warehouse</option>
              <option>Warehouse 1</option>
              <option>Warehouse 2</option>
              <option>Warehouse 3</option>
              <option>Warehouse 4</option>
              <option>Warehouse 5</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Vendor</label>
            <select>
              <option>All Vendor</option>
              <option>Vendor 1</option>
              <option>Vendor 2</option>
              <option>Vendor 3</option>
              <option>Vendor 4</option>
              <option>Vendor 5</option>
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
            <b> Daily Pos Report</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>2024-04-30 to 2024-05-29</b>
          </p>
        </div>
      </div>

      <div className={styles.fullWidthContainer}>
        <h5>Daily Report</h5>
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
    </>
  );
  const monthlyTabContent = (
    <>
      <div className={styles.fullWidthContainer}>
        <div className={styles.dateFilter}>
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
          <div className={styles.field}>
            <label>Warehouse</label>
            <select>
              <option>All Warehouse</option>
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
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b> Monthly Pos Report</b>
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
        <h5>Monthly Report</h5>
        <ApexAreaChart
          height="400"
          colors={["#77B6EA", "#545454"]}
          data={data}
          labels={labels2}
          chartTitle="Cashflow Analysis"
          xAxisTitle="Warehouse"
          yAxisTitle=""
        />
      </div>
    </>
  );
  const tabs = [
    { label: "Daily", content: dailyTabContent },
    { label: "Monthly", content: monthlyTabContent },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Pos</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
