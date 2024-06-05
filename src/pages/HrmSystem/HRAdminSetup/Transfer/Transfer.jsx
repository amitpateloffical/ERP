import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Transfer() {
  const reportData = [
    {
      employeeName: "John Doe",
      branch: "New York",
      department: "Sales",
      transferDate: "2023-05-15",
      description: "Transferred to New York branch to lead the sales team.",
    },
    {
      employeeName: "Jane Smith",
      branch: "Los Angeles",
      department: "Marketing",
      transferDate: "2023-04-10",
      description: "Transferred to Los Angeles branch for a marketing campaign.",
    },
    {
      employeeName: "Alice Johnson",
      branch: "Chicago",
      department: "HR",
      transferDate: "2023-03-20",
      description: "Moved to Chicago branch to handle HR operations.",
    },
    {
      employeeName: "Bob Brown",
      branch: "San Francisco",
      department: "IT",
      transferDate: "2023-02-25",
      description: "Assigned to San Francisco branch for IT infrastructure setup.",
    },
    {
      employeeName: "Eve Davis",
      branch: "Boston",
      department: "Finance",
      transferDate: "2023-01-30",
      description: "Transferred to Boston branch for financial audits.",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Transfer</h2>
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
                  <th>EMPLOYEE NAME</th>
                  <th>BRANCH</th>
                  <th>DEPARTMENT</th>
                  <th>TRANSFER DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employeeName}</td>
                    <td>{report.branch}</td>
                    <td>{report.department}</td>
                    <td>{report.transferDate}</td>
                    <td>{report.description}</td>
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
                              padding: "5px",
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
                Showing 1 to {reportData.length} of {reportData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
