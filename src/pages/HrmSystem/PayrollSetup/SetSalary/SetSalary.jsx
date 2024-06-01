import React from "react";
import styles from "../../HRMS.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
export default function SetSalary() {
  const employeeSalary = [
    {
      employeeId: "EMP001",
      name: "John Doe",
      payrollType: "Monthly",
      salary: "$5,000",
      netSalary: "$4,500",
    },
    {
      employeeId: "EMP002",
      name: "Jane Smith",
      payrollType: "Monthly",
      salary: "$6,000",
      netSalary: "$5,400",
    },
    {
      employeeId: "EMP003",
      name: "Alice Johnson",
      payrollType: "Weekly",
      salary: "$1,200",
      netSalary: "$1,080",
    },
    {
      employeeId: "EMP004",
      name: "Bob Brown",
      payrollType: "Monthly",
      salary: "$4,500",
      netSalary: "$4,050",
    },
    {
      employeeId: "EMP005",
      name: "Charlie Davis",
      payrollType: "Bi-weekly",
      salary: "$2,300",
      netSalary: "$2,070",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Employee Salary</h2>
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
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0",
                        }}
                      >
                        <Tooltip title="Edit">
                          <IconButton
                            style={{
                              backgroundColor: "blue",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <VisibilityIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
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
