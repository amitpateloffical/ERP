import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FaStar } from "react-icons/fa";
import { ViewCarousel, Visibility } from "@mui/icons-material";

export default function Appraisal() {
  const reportData = [
    {
      branch: "New York",
      department: "HR",
      designation: "Manager",
      employee: "John Doe",
      targetRating: 4.5,
      overallRating: 4.3,
      appraisalDate: "2024-06-01",
    },
    {
      branch: "New York",
      department: "HR",
      designation: "Manager",
      employee: "John Doe",
      targetRating: 2.5,
      overallRating: .3,
      appraisalDate: "2024-06-01",
    },
    {
      branch: "New York",
      department: "HR",
      designation: "Manager",
      employee: "John Doe",
      targetRating: 3.5,
      overallRating: 4.3,
      appraisalDate: "2024-06-01",
    },
    {
      branch: "New York",
      department: "HR",
      designation: "Manager",
      employee: "John Doe",
      targetRating: 1.5,
      overallRating: 1.3,
      appraisalDate: "2024-06-01",
    },
    {
      branch: "New York",
      department: "HR",
      designation: "Manager",
      employee: "John Doe",
      targetRating: 2.5,
      overallRating: 2.3,
      appraisalDate: "2024-06-01",
    },
    // Add more report data here...
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<FaStar key={i} color="#ffc107" />);
      } else {
        stars.push(<FaStar key={i} color="#e0e0e0" />);
      }
    }
    return stars;
  };
  return (
    <>
      {" "}
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Appraisal</h2>
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
                  <th>DEPARTMENT</th>
                  <th>DESIGNATION</th>
                  <th>EMPLOYEE</th>
                  <th>TARGET RATING</th>
                  <th>OVERALL RATING</th>
                  <th>APPRAISAL DATE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.branch}</td>
                    <td>{report.department}</td>
                    <td>{report.designation}</td>
                    <td>{report.employee}</td>
                    <td>
                      {renderStars(report.targetRating)}({report.targetRating})
                    </td>
                    <td>
                      {renderStars(report.overallRating)}({report.overallRating})
                    </td>
                    <td>{report.appraisalDate}</td>
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
                        <Tooltip title="View">
                          <IconButton
                            style={{
                              backgroundColor: "blue",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <Visibility style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
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
