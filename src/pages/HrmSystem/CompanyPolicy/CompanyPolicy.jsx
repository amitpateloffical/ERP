import React from "react";
import styles from "../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
export default function CompanyPolicy() {
const reportData = [
  {
    name: "Branch A",
    title: "Document Title 1",
    description: "Document description 1",
    attachment: "attachment_url_1",
  },
  {
    name: "Branch B",
    title: "Document Title 2",
    description: "Document description 2",
    attachment: "attachment_url_2",
  },
  {
    name: "Branch C",
    title: "Document Title 3",
    description: "Document description 3",
    attachment: "attachment_url_3",
  },
  // Add more data objects as needed
];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Company Policy</h2>
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
                  <th>BRANCH</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>ATTACHMENT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.name}</td>
                    <td>{report.title}</td>
                    <td>{report.description}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip title="Preview">
                          <IconButton
                            style={{ backgroundColor: "green", color: "white", padding: "5px" }}
                          >
                            <DownloadIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Expand">
                          <IconButton
                            style={{ backgroundColor: "gray", color: "white", padding: "5px" }}
                          >
                            <FullscreenIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Tooltip title="Edit">
                          <IconButton
                            style={{ backgroundColor: "green", color: "white", padding: "5px" }}
                          >
                            <EditIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            style={{ backgroundColor: "red", color: "white", padding: "5px" }}
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
