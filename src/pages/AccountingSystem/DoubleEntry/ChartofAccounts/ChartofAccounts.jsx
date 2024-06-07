import React from "react";
import styles from "../../AccountingSystem.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";

export default function ChartofAccounts() {
  const transactions = [
    {
      code: "ACC001",
      name: "Office Supplies",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 250.0,
      status: "Active",
    },
    {
      code: "ACC002",
      name: "Software Subscription",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 150.0,
      status: "Active",
    },
    {
      code: "ACC003",
      name: "Hardware Purchase",
      type: "Asset",
      parentAccountName: "Fixed Assets",
      balance: 500.0,
      status: "Active",
    },
    {
      code: "ACC004",
      name: "Books Purchase",
      type: "Expense",
      parentAccountName: "Educational Materials",
      balance: 120.0,
      status: "Active",
    },
    {
      code: "ACC005",
      name: "Office Restock",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 350.0,
      status: "Active",
    },
    {
      code: "ACC006",
      name: "Network Setup",
      type: "Expense",
      parentAccountName: "IT Services",
      balance: 450.0,
      status: "Active",
    },
    {
      code: "ACC007",
      name: "Cleaning Services",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 200.0,
      status: "Active",
    },
    {
      code: "ACC008",
      name: "Bank Loan",
      type: "Liability",
      parentAccountName: "Loans Payable",
      balance: 10000.0,
      status: "Active",
    },
    {
      code: "ACC009",
      name: "Equity Investment",
      type: "Equity",
      parentAccountName: "Owner's Equity",
      balance: 50000.0,
      status: "Active",
    },
    {
      code: "ACC010",
      name: "Sales Revenue",
      type: "Income",
      parentAccountName: "Sales",
      balance: 150000.0,
      status: "Active",
    },
    {
      code: "ACC011",
      name: "Cost of Goods Sold",
      type: "Expense",
      parentAccountName: "COGS",
      balance: 70000.0,
      status: "Active",
    },
    {
      code: "ACC012",
      name: "Consulting Revenue",
      type: "Income",
      parentAccountName: "Service Revenue",
      balance: 20000.0,
      status: "Active",
    },
    {
      code: "ACC013",
      name: "Accounts Receivable",
      type: "Asset",
      parentAccountName: "Current Assets",
      balance: 30000.0,
      status: "Active",
    },
    {
      code: "ACC014",
      name: "Accounts Payable",
      type: "Liability",
      parentAccountName: "Current Liabilities",
      balance: 15000.0,
      status: "Active",
    },
    {
      code: "ACC015",
      name: "Retained Earnings",
      type: "Equity",
      parentAccountName: "Owner's Equity",
      balance: 75000.0,
      status: "Active",
    },
    {
      code: "ACC016",
      name: "Advertising Expense",
      type: "Expense",
      parentAccountName: "Marketing Expenses",
      balance: 5000.0,
      status: "Active",
    },
    {
      code: "ACC017",
      name: "Electricity Bill",
      type: "Expense",
      parentAccountName: "Utility Expenses",
      balance: 800.0,
      status: "Active",
    },
    {
      code: "ACC018",
      name: "Insurance Premium",
      type: "Expense",
      parentAccountName: "Insurance Expenses",
      balance: 1200.0,
      status: "Active",
    },
    {
      code: "ACC019",
      name: "Rent Expense",
      type: "Expense",
      parentAccountName: "Operating Expenses",
      balance: 2000.0,
      status: "Active",
    },
    {
      code: "ACC020",
      name: "Telephone Bill",
      type: "Expense",
      parentAccountName: "Utility Expenses",
      balance: 300.0,
      status: "Active",
    },
    {
      code: "ACC021",
      name: "Internet Charges",
      type: "Expense",
      parentAccountName: "Utility Expenses",
      balance: 150.0,
      status: "Active",
    },
    {
      code: "ACC022",
      name: "Travel Expenses",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 1000.0,
      status: "Active",
    },
    {
      code: "ACC023",
      name: "Training Expenses",
      type: "Expense",
      parentAccountName: "General Expenses",
      balance: 600.0,
      status: "Active",
    },
    {
      code: "ACC024",
      name: "Wages",
      type: "Expense",
      parentAccountName: "Payroll Expenses",
      balance: 25000.0,
      status: "Active",
    },
    {
      code: "ACC025",
      name: "Interest Expense",
      type: "Expense",
      parentAccountName: "Financial Expenses",
      balance: 1200.0,
      status: "Active",
    },
  ];

  const renderTable = (title, type) => (
    <div className={styles.fullWidthContainer}>
      <h5>{title}</h5>
      <div className={styles.reportTableContainer}>
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>CODE</th>
              <th>NAME</th>
              <th>TYPE</th>
              <th>PARENT ACCOUNT NAME</th>
              <th>BALANCE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((transaction) => transaction.type === type)
              .map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.code}</td>
                  <td style={{ color: "#6EA31E" }}>{transaction.name}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.parentAccountName}</td>
                  <td>{transaction.balance}</td>
                  <td>{transaction.status}</td>
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
                      <Tooltip title="Transaction Summary">
                        <IconButton
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "5px",
                          }}
                        >
                          <ReceiptSharpIcon style={{ fontSize: "20px" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View">
                        <IconButton
                          style={{
                            backgroundColor: "blue",
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
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fullWidthContainer}>
          <h2 className={styles.textGreen}>Manage Chart of Accounts</h2>
        </div>
        {renderTable("Assets", "Asset")}
        {renderTable("Liabilities", "Liability")}
        {renderTable("Equity", "Equity")}
        {renderTable("Income", "Income")}
        {renderTable("Costs of Goods Sold", "Expense")}
        {renderTable("Expenses", "Expense")}
      </div>
    </>
  );
}
