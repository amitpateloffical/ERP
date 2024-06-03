import React, { useEffect, useState } from "react";
import styles from "../../../HRMS.module.css";
import style from "./BulkAttendance.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaEdit, FaSearch, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function BulkAttendance() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [inOut, setinOut] = useState(false);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    setCurrentMonth(`${year}-${month}`);
  }, []);
  const employeeData = [
    {
      employeeId: "E001",
      date: "2024-06-01",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      late: "No",
      earlyLeaving: "No",
      overtime: "1 hour",
    },
    {
      employeeId: "E002",
      date: "2024-06-01",
      status: "Absent",
      clockIn: "-",
      clockOut: "-",
      late: "-",
      earlyLeaving: "-",
      overtime: "-",
    },
    {
      employeeId: "E003",
      date: "2024-06-01",
      status: "Present",
      clockIn: "09:30 AM",
      clockOut: "06:00 PM",
      late: "Yes",
      earlyLeaving: "No",
      overtime: "30 mins",
    },
    {
      employeeId: "E004",
      date: "2024-06-01",
      status: "Present",
      clockIn: "08:45 AM",
      clockOut: "04:45 PM",
      late: "No",
      earlyLeaving: "Yes",
      overtime: "None",
    },
    {
      employeeId: "E005",
      date: "2024-06-01",
      status: "Present",
      clockIn: "09:15 AM",
      clockOut: "05:30 PM",
      late: "Yes",
      earlyLeaving: "No",
      overtime: "15 mins",
    },
    // Add more employee attendance data here...
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Bulk Attendance</h2>
        </div>

        <div className={styles.fullWidthContainer}>
          <div className={style.dateFilter}>
            <div className={style.field}>
              <label>Date</label>
              <div className={style.inputContainer}>
                <input type="date" defaultValue={currentMonth} />
              </div>
            </div>
            <div className={style.field}>
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
            <div className={style.field}>
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
            <button className={style.searchButton}>
              <FaSearch />
            </button>
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
                  <th>EMPLOYEE ID </th>
                  <th>EMPLOYEE </th>
                  <th>BRANCH</th>
                  <th>DEPARTMENT</th>
                  <th>ATTENDANCE</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{employee.employeeId}</p>
                    </td>
                    <td>{employee.date}</td>
                    <td>{employee.status}</td>
                    <td>{employee.clockIn}</td>

                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                          gap: "5%",
                        }}
                      >
                        <input
                          id={employee.employeeId}
                          type="checkbox"
                          checked={inOut}
                          onChange={(e) => setinOut(e.target.checked)}
                        />
                        {inOut && (
                          <>
                            <label htmlFor="inTime">In</label>
                            <input type="time" name="" id="inTime" />
                            <label htmlFor="outTime">Out</label>
                            <input type="time" name="" id="outTime" />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tableBottom}>
              <p>
                Showing 1 to {employeeData.length} of {employeeData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
