import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Resignation() {
const reportData = [
  {
    employeeName: "John Doe",
    resignationDate: "2024-05-01",
    lastWorkingDate: "2024-05-31",
    reason: "Personal Reasons",
    description: "John has decided to leave the company to pursue personal projects.",
  },
  {
    employeeName: "Jane Smith",
    resignationDate: "2024-04-15",
    lastWorkingDate: "2024-05-15",
    reason: "New Job Offer",
    description: "Jane accepted a new job offer from another company.",
  },
  {
    employeeName: "Alice Johnson",
    resignationDate: "2024-03-10",
    lastWorkingDate: "2024-04-10",
    reason: "Relocation",
    description:
      "Alice is moving to a different city and will not be able to continue working here.",
  },
  {
    employeeName: "Bob Brown",
    resignationDate: "2024-02-20",
    lastWorkingDate: "2024-03-20",
    reason: "Retirement",
    description: "Bob is retiring after many years of service.",
  },
  {
    employeeName: "Eve Davis",
    resignationDate: "2024-01-25",
    lastWorkingDate: "2024-02-25",
    reason: "Health Issues",
    description: "Eve is leaving the company due to health-related issues.",
  },
  // Add more report data here...
];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Resignation</h2>
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
                  <th>RESIGNATION DATE</th>
                  <th>LAST WORKING DATE</th>
                  <th>REASON</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.employeeName}</td>
                    <td>{report.resignationDate}</td>
                    <td>{report.lastWorkingDate}</td>
                    <td>{report.reason}</td>
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
