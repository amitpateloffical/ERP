import React from "react";
import styles from "../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EmployeeSetUp() {
  const employeeData = [
    {
      employeeId: "EMP001",
      name: "John Doe",
      email: "john.doe@example.com",
      branch: "New York",
      department: "Engineering",
      designation: "Software Engineer",
      dateOfJoining: "2021-03-15",
      lastLogin: "2024-05-29",
      status: "Active",
    },
    {
      employeeId: "EMP002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      branch: "Los Angeles",
      department: "Marketing",
      designation: "Marketing Manager",
      dateOfJoining: "2019-07-01",
      lastLogin: "2024-05-28",
      status: "Inactive",
    },
    {
      employeeId: "EMP003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      branch: "Chicago",
      department: "Sales",
      designation: "Sales Representative",
      dateOfJoining: "2020-11-21",
      lastLogin: "2024-05-30",
      status: "Active",
    },
    {
      employeeId: "EMP004",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      branch: "Houston",
      department: "HR",
      designation: "HR Specialist",
      dateOfJoining: "2018-05-10",
      lastLogin: "2024-05-27",
      status: "Active",
    },
    {
      employeeId: "EMP005",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      branch: "San Francisco",
      department: "Finance",
      designation: "Financial Analyst",
      dateOfJoining: "2022-01-15",
      lastLogin: "2024-05-26",
      status: "Inactive",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Employee</h2>
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
                  <th>EMAIL</th>
                  <th>BRANCH</th>
                  <th>DEPARTMENT</th>
                  <th>DESIGNATION</th>
                  <th>DATE OF JOINING</th>
                  <th>LAST LOGIN</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{employee.employeeId}</p>
                    </td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.branch}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.dateOfJoining}</td>
                    <td>{employee.lastLogin}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                        }}
                      >
                        <Tooltip title="Edit">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <EditIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            style={{
                              backgroundColor: "red",
                              color: "white",
                              padding: "5px", // Adjust padding here
                            }}
                          >
                            <DeleteIcon style={{ fontSize: "20px" }} />
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
                Showing 1 to {employeeData.length} of {employeeData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
