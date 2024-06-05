import React from "react";
import styles from "../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
export default function DocumentSetup() {
  const reportData = [
    {
      name: "John Doe",
      document: "Contract",
      role: "Manager",
      description: "Manager contract document",
    },
    {
      name: "Jane Smith",
      document: "Agreement",
      role: "Employee",
      description: "Employment agreement document",
    },
    {
      name: "Alice Johnson",
      document: "NDA",
      role: "Contractor",
      description: "Non-disclosure agreement document",
    },
    {
      name: "Bob Brown",
      document: "Invoice",
      role: "Freelancer",
      description: "Freelance invoice document",
    },
    {
      name: "Charlie Davis",
      document: "Report",
      role: "Analyst",
      description: "Analytical report document",
    },
    {
      name: "Diana Evans",
      document: "Memo",
      role: "Executive",
      description: "Executive memo document",
    },
    {
      name: "Ethan Green",
      document: "Proposal",
      role: "Consultant",
      description: "Consulting proposal document",
    },
    {
      name: "Fiona Hill",
      document: "Presentation",
      role: "Presenter",
      description: "Presentation document",
    },
    {
      name: "George Clark",
      document: "Budget",
      role: "Accountant",
      description: "Budget document",
    },
    {
      name: "Hannah Lewis",
      document: "Plan",
      role: "Planner",
      description: "Planning document",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Document</h2>
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
                  <th>NAME</th>
                  <th>DOCUMENT</th>
                  <th>ROLE</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.name}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                        }}
                      >
                        <Tooltip title="Preview">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <DownloadIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Expand">
                          <IconButton
                            style={{
                              backgroundColor: "gray",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <FullscreenIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    <td>{report.role}</td>
                    <td>{report.description}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
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
