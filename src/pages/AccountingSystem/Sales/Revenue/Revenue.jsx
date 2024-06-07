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
export default function Revenue() {
  const transactions = [
    {
      date: "2023-05-12",
      amount: "$1,000",
      account: "Bank of America",
      customer: "John Doe",
      category: "Consulting",
      reference: "REF001",
      description: "Consulting services for May",
      paymentReceipt: "Receipt001.pdf",
    },
    {
      date: "2023-04-22",
      amount: "$2,500",
      account: "Chase Bank",
      customer: "Jane Smith",
      category: "Software Development",
      reference: "REF002",
      description: "Software development project",
      paymentReceipt: "Receipt002.pdf",
    },
    {
      date: "2023-06-10",
      amount: "$3,200",
      account: "Wells Fargo",
      customer: "Acme Corp",
      category: "Research",
      reference: "REF003",
      description: "Market research report",
      paymentReceipt: "Receipt003.pdf",
    },
    {
      date: "2023-03-15",
      amount: "$1,750",
      account: "Bank of America",
      customer: "Global Tech",
      category: "Design",
      reference: "REF004",
      description: "Website design services",
      paymentReceipt: "Receipt004.pdf",
    },
    {
      date: "2023-01-18",
      amount: "$4,000",
      account: "Chase Bank",
      customer: "Future Innovations",
      category: "Operations",
      reference: "REF005",
      description: "Operational consulting",
      paymentReceipt: "Receipt005.pdf",
    },
    {
      date: "2023-02-25",
      amount: "$1,500",
      account: "Wells Fargo",
      customer: "StartUp Inc.",
      category: "Marketing",
      reference: "REF006",
      description: "Marketing strategy development",
      paymentReceipt: "Receipt006.pdf",
    },
    {
      date: "2023-04-10",
      amount: "$2,200",
      account: "Bank of America",
      customer: "Tech Solutions",
      category: "Software Development",
      reference: "REF007",
      description: "App development project",
      paymentReceipt: "Receipt007.pdf",
    },
    {
      date: "2023-05-05",
      amount: "$3,800",
      account: "Chase Bank",
      customer: "Green Energy",
      category: "Research",
      reference: "REF008",
      description: "Energy market analysis",
      paymentReceipt: "Receipt008.pdf",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Revenue</h2>
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
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>ACCOUNT</th>
                  <th>CUSTOMER</th>
                  <th>CATEGORY</th>
                  <th>REFERENCE</th>
                  <th>DESCRIPTION</th>
                  <th>PAYMENT RECEIPT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.account}</td>
                    <td>{transaction.customer}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.reference}</td>
                    <td>{transaction.description}</td>
                    <td>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          margin: "0",
                          minWidth: "70px",
                        }}
                      >
                        <Tooltip title="Download">
                          <IconButton
                            style={{
                              backgroundColor: "green",
                              color: "white",
                              padding: "5px",
                            }}
                          >
                            <DownloadIcon style={{ fontSize: "20px" }} />
                          </IconButton>
                        </Tooltip>{" "}
                      </div>
                    </td>
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
