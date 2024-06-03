import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FaStar } from "react-icons/fa";
import { Visibility } from "@mui/icons-material";
import { HiOutlineEye } from "react-icons/hi";

export default function GoalTracking() {
  const reportData = [
    {
      goalType: "Sales",
      subject: "Increase Sales by 10%",
      branch: "New York",
      targetAchievement: "10%",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      rating: 4.5,
      progress: 30,
    },
    {
      goalType: "Marketing",
      subject: "Launch New Marketing Campaign",
      branch: "Los Angeles",
      targetAchievement: "20%",
      startDate: "2024-05-15",
      endDate: "2024-06-15",
      rating: 4.0,
      progress: 50,
    },
    {
      goalType: "Customer Service",
      subject: "Improve Customer Satisfaction",
      branch: "Chicago",
      targetAchievement: "15%",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      rating: 4.8,
      progress: 80,
    },
    {
      goalType: "Product Development",
      subject: "Launch New Product Line",
      branch: "San Francisco",
      targetAchievement: "30%",
      startDate: "2024-06-15",
      endDate: "2024-07-15",
      rating: 4.2,
      progress: 60,
    },
    {
      goalType: "Finance",
      subject: "Reduce Operational Costs",
      branch: "Miami",
      targetAchievement: "25%",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      rating: 4.6,
      progress: 90,
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

  const renderProgress = (value) => (
    <>
      <div key={value} className={styles.status}>
        <span className={styles.percentage}>{value}%</span>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: value }}></div>
        </div>
      </div>
    </>
  );
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
                  <th>GOAL TYPE</th>
                  <th>SUBJECT</th>
                  <th>BRANCH</th>
                  <th>TARGET ACHIEVEMENT</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>RATING</th>
                  <th>PROGRESS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr key={index}>
                    <td>{report.goalType}</td>
                    <td>{report.subject}</td>
                    <td>{report.branch}</td>
                    <td>{report.targetAchievement}</td>
                    <td>{report.startDate}</td>
                    <td>{report.endDate}</td>
                    <td>
                      {renderStars(report.rating)} ({report.rating})
                    </td>
                    <td>{renderProgress(report.progress)}</td>
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
