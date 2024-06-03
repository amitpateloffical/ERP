import React from "react";
import styles from "../../HRMS.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Visibility } from "@mui/icons-material";

export default function Trainer() {
  const contactData = [
    {
      branchAction: "China",
      fullName: "John Doe",
      contact: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      branchAction: "India",
      fullName: "Mary Johnson",
      contact: "987-654-3210",
      email: "mary.johnson@example.com",
    },
    {
      branchAction: "U.S.A",
      fullName: "Michael Williams",
      contact: "456-789-0123",
      email: "michael.williams@example.com",
    },
    {
      branchAction: "Australia",
      fullName: "Jennifer Jones",
      contact: "321-654-0987",
      email: "jennifer.jones@example.com",
    },
    {
      branchAction: "U.K",
      fullName: "David Wilson",
      contact: "654-321-7654",
      email: "david.wilson@example.com",
    },
    // Add more contact data here...
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Trainer</h2>
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
                  <th>FULL NAME</th>
                  <th>CONTACT</th>
                  <th>EMAIL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.branchAction}</td>
                    <td>{contact.fullName}</td>
                    <td>{contact.contact}</td>
                    <td>{contact.email}</td>
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
                Showing 1 to {contactData.length} of {contactData.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
