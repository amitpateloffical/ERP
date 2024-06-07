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
import DownloadIcon from "@mui/icons-material/Download";
export default function CreditNote() {
  const transactions = [
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "John Doe",
      date: "2023-05-12",
      amount: "$1,000",
      description: "Consulting services for May",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Jane Smith",
      date: "2023-04-22",
      amount: "$2,500",
      description: "Software development project",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Acme Corp",
      date: "2023-06-10",
      amount: "$3,200",
      description: "Market research report",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Global Tech",
      date: "2023-03-15",
      amount: "$1,750",
      description: "Website design services",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Future Innovations",
      date: "2023-01-18",
      amount: "$4,000",
      description: "Operational consulting",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "StartUp Inc.",
      date: "2023-02-25",
      amount: "$1,500",
      description: "Marketing strategy development",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Tech Solutions",
      date: "2023-04-10",
      amount: "$2,200",
      description: "App development project",
    },
    {
      invoiceID: "#INV00001",
      invoiceAction: "Download",
      customer: "Green Energy",
      date: "2023-05-05",
      amount: "$3,800",
      description: "Energy market analysis",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Credit Notes</h2>
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
                  <th>INVOICE</th>
                  <th>CUSTOMER</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>DESCRIPTION</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.employeeID}>{transaction.invoiceID}</p>
                    </td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.description}</td>
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
                Showing 1 to {transactions.length} of {transactions.length} entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
