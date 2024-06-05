import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Termination() {
const reportData = [
  {
    employeeName: "John Doe",
    terminationType: "Voluntary",
    noticeDate: "2024-05-01",
    terminationDate: "2024-05-15",
    description: "Resigned due to personal reasons.",
  },
  {
    employeeName: "Jane Smith",
    terminationType: "Involuntary",
    noticeDate: "2024-05-10",
    terminationDate: "2024-05-25",
    description: "Terminated due to performance issues.",
  },
  {
    employeeName: "Alice Johnson",
    terminationType: "Layoff",
    noticeDate: "2024-05-20",
    terminationDate: "2024-06-01",
    description: "Laid off due to company restructuring.",
  },
  {
    employeeName: "Bob Brown",
    terminationType: "Retirement",
    noticeDate: "2024-04-01",
    terminationDate: "2024-04-30",
    description: "Retired after 30 years of service.",
  },
  {
    employeeName: "Charlie White",
    terminationType: "Voluntary",
    noticeDate: "2024-05-05",
    terminationDate: "2024-05-20",
    description: "Resigned to pursue further studies.",
  },
  // Add more report data here...
];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Termination</h2>
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
                  <th>TERMINATION TYPE</th>
                  <th>NOTICE DATE</th>
                  <th>TERMINATION DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employeeName}</td>
                    <td>{report.terminationType}</td>
                    <td>{report.noticeDate}</td>
                    <td>{report.terminationDate}</td>
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
