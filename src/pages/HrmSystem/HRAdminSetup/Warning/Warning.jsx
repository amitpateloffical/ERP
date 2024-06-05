import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Warning() {
const reportData = [
  {
    warningBy: "John Doe",
    warningTo: "Jane Smith",
    subject: "Performance Issue",
    warningDate: "2024-06-01",
    description: "Repeated delays in project submissions.",
  },
  {
    warningBy: "Alice Johnson",
    warningTo: "Bob Brown",
    subject: "Attendance Problem",
    warningDate: "2024-06-02",
    description: "Frequent unexcused absences.",
  },
  {
    warningBy: "Eve Davis",
    warningTo: "Charlie White",
    subject: "Insubordination",
    warningDate: "2024-06-03",
    description: "Failure to follow supervisor instructions.",
  },
  {
    warningBy: "Michael Scott",
    warningTo: "Dwight Schrute",
    subject: "Unprofessional Behavior",
    warningDate: "2024-06-04",
    description: "Inappropriate conduct in the workplace.",
  },
  {
    warningBy: "Pam Beesly",
    warningTo: "Jim Halpert",
    subject: "Conflict of Interest",
    warningDate: "2024-06-05",
    description: "Potential conflict of interest in project assignments.",
  },
  // Add more report data here...
];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Warning</h2>
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
                  <th>WARNING BY</th>
                  <th>WARNING TO</th>
                  <th>SUBJECT</th>
                  <th>WARNING DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.warningBy}</td>
                    <td>{report.warningTo}</td>
                    <td>{report.subject}</td>
                    <td>{report.warningDate}</td>
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
