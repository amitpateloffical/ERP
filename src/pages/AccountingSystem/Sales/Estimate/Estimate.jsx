import React from "react";
import styles from "../../AccountingSystem.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
export default function Estimate() {
const proposals = [
  {
    proposalId: "P001",
    category: "Marketing",
    issueDate: "2023-05-12",
    status: "Pending",
  },
  {
    proposalId: "P002",
    category: "Development",
    issueDate: "2023-04-22",
    status: "Approved",
  },
  {
    proposalId: "P003",
    category: "Research",
    issueDate: "2023-06-10",
    status: "Rejected",
  },
  {
    proposalId: "P004",
    category: "Design",
    issueDate: "2023-03-15",
    status: "Approved",
  },
  {
    proposalId: "P005",
    category: "Operations",
    issueDate: "2023-01-18",
    status: "Pending",
  },
  {
    proposalId: "P006",
    category: "Marketing",
    issueDate: "2023-02-25",
    status: "Rejected",
  },
  {
    proposalId: "P007",
    category: "Development",
    issueDate: "2023-04-10",
    status: "Approved",
  },
  {
    proposalId: "P008",
    category: "Research",
    issueDate: "2023-05-05",
    status: "Pending",
  },
];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Proposals</h2>
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
                  <th>PROPOSAL</th>
                  <th>CATEGORY</th>
                  <th>ISSUE DATE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((proposal, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{proposal.proposalId}</p>
                    </td>
                    <td>{proposal.category}</td>
                    <td>{proposal.issueDate}</td>
                    <td>{proposal.status}</td>
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
                        <Tooltip title="Convert Invoice">
                          <IconButton
                            style={{
                              backgroundColor: "#ebcd49",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <RotateLeftIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Duplicate">
                          <IconButton
                            style={{
                              backgroundColor: "#84e34d",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <ContentCopyIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View">
                          <IconButton
                            style={{
                              backgroundColor: "#4d7de3",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <VisibilityIcon style={{ fontSize: "20px" }} />
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
                Showing 1 to {proposals.length} of {proposals.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
