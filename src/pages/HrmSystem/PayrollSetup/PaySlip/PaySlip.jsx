import React from "react";
import styles from "../../HRMS.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import style from "./PaySlip.module.css";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function PaySlip() {
  const employeeSalary = [
    {
      employeeId: "EMP001",
      name: "John Doe",
      payrollType: "Monthly",
      salary: "$5,000",
      netSalary: "$4,500",
      status: "Unpaid",
    },
    {
      employeeId: "EMP002",
      name: "Jane Smith",
      payrollType: "Monthly",
      salary: "$6,000",
      netSalary: "$5,400",
      status: "Paid",
    },
    {
      employeeId: "EMP003",
      name: "Alice Johnson",
      payrollType: "Weekly",
      salary: "$1,200",
      netSalary: "$1,080",
      status: "Unpaid",
    },
    {
      employeeId: "EMP004",
      name: "Bob Brown",
      payrollType: "Monthly",
      salary: "$4,500",
      netSalary: "$4,050",
      status: "Unpaid",
    },
    {
      employeeId: "EMP005",
      name: "Charlie Davis",
      payrollType: "Bi-weekly",
      salary: "$2,300",
      netSalary: "$2,070",
      status: "Unpaid",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <div className={style.cashflowContainer}>
            <h2 className={styles.textGreen}>Tax Summary</h2>
            <div className={style.dateFilter}>
              <div className={style.field}>
                <label>Select Month</label>
                <select>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option selected>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className={style.field}>
                <label>Year</label>
                <select>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
              </div>
              <div className={style.field1}>
                <button type="button" className={styles.contentButton}>
                  Generate Payslip
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fullWidthContainer}>
          <div className={style.payslipTableTop}>
            <h5>Find Employee Payslip </h5>
            <div className={style.payslipTableTopInnerDiv}>
              <div className={style.field}>
                <select>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option selected>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
              <div className={style.field}>
                <select>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                </select>
              </div>
              <div className={style.field}>
                <button type="button" className={style.contentButton2}>
                  Export
                </button>
              </div>
              <div className={style.field}>
                <button type="button" className={style.contentButton2}>
                  Bulk Payment
                </button>
              </div>
            </div>
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
                  <th>NAME</th>
                  <th>PAYROLL TYPE</th>
                  <th>SALARY</th>
                  <th>NET SALARY</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employeeSalary.map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{employee.employeeId}</p>
                    </td>
                    <td>{employee.name}</td>
                    <td>{employee.payrollType}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.netSalary}</td>
                    <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <p
                        className={
                          employee.status === "Paid" ? styles.greenButton : styles.pinkButton
                        }
                      >
                        {employee.status}
                      </p>
                    </td>
                    <td>
                      <div className={styles.buttonDiv}>
                        <p className={styles.yellowButton}>PaySlip</p>
                        <p className={styles.pinkButton}>Payslip</p>
                        <p className={styles.greenButton}>Click to Pay</p>
                        <p className={styles.blueButton}>Edit</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tableBottom}>
              <p>
                Showing 1 to {employeeSalary.length} of {employeeSalary.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
