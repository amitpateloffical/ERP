import React from "react";
import styles from "../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Meeting() {
  const reportData = [
    {
      meetingTitle: "Project Kickoff",
      meetingDate: "2024-06-05",
      meetingTime: "10:00 AM",
    },
    {
      meetingTitle: "Weekly Standup",
      meetingDate: "2024-06-06",
      meetingTime: "09:00 AM",
    },
    {
      meetingTitle: "Client Review",
      meetingDate: "2024-06-07",
      meetingTime: "11:00 AM",
    },
    {
      meetingTitle: "Sprint Planning",
      meetingDate: "2024-06-08",
      meetingTime: "02:00 PM",
    },
    {
      meetingTitle: "Retrospective",
      meetingDate: "2024-06-09",
      meetingTime: "04:00 PM",
    },
    // Add more report data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Meeting</h2>
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
                  <th>MEETING TITLE</th>
                  <th>MEETING DATE</th>
                  <th>MEETING TIME</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.meetingTitle}</td>
                    <td>{report.meetingDate}</td>
                    <td>{report.meetingTime}</td>
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
