import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Announcement() {
const reportData = [
  {
    title: "Project Alpha",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    description: "A project aimed at developing new software solutions.",
  },
  {
    title: "Training Program",
    startDate: "2024-02-15",
    endDate: "2024-04-15",
    description: "Employee training program for skill enhancement.",
  },
  {
    title: "Marketing Campaign",
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    description: "A campaign to boost brand awareness.",
  },
  {
    title: "Annual Conference",
    startDate: "2024-05-10",
    endDate: "2024-05-12",
    description: "Company-wide annual conference.",
  },
  {
    title: "Product Launch",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    description: "Launch of the new product line.",
  },
  // Add more report data here...
];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Announcement</h2>
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
                  <th>TITLE</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.title}</td>
                    <td>{report.startDate}</td>
                    <td>{report.endDate}</td>
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
