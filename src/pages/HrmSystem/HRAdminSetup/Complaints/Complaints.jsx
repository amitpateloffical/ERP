
import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Complaints() {
const reportData = [
  {
    complaintFrom: "John Doe",
    complaintAgainst: "Jane Smith",
    title: "Harassment Complaint",
    complaintDate: "2024-06-01",
    description: "Inappropriate behavior reported during team meetings.",
  },
  {
    complaintFrom: "Alice Johnson",
    complaintAgainst: "Bob Brown",
    title: "Discrimination Complaint",
    complaintDate: "2024-06-02",
    description: "Unfair treatment based on gender.",
  },
  {
    complaintFrom: "Eve Davis",
    complaintAgainst: "Charlie White",
    title: "Workplace Bullying",
    complaintDate: "2024-06-03",
    description: "Verbal abuse and bullying reported in the sales team.",
  },
  {
    complaintFrom: "Michael Scott",
    complaintAgainst: "Dwight Schrute",
    title: "Professional Misconduct",
    complaintDate: "2024-06-04",
    description: "Unprofessional behavior during client meetings.",
  },
  {
    complaintFrom: "Pam Beesly",
    complaintAgainst: "Jim Halpert",
    title: "Conflict of Interest",
    complaintDate: "2024-06-05",
    description: "Potential conflict of interest in project assignments.",
  },
  // Add more report data here...
];


  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Complaints</h2>
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
                  <th>COMPLAINT FROM</th>
                  <th>COMPLAINT AGAINST</th>
                  <th>TITLE</th>
                  <th>COMPLAINT DATE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.complaintFrom}</td>
                    <td>{report.complaintAgainst}</td>
                    <td>{report.title}</td>
                    <td>{report.complaintDate}</td>
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
