import React from "react";
import DateFilter from "../../../../../Components/Datefilter/Datefilter";
import styles from "../Reports.module.css";
import BarChart2 from "../../../../../Components/Charts/Barchart2";
import Tab from "../../../../../Components/Tabs/Tabs";

const invoices = [
  {
    id: "#GAU7879",
    date: "Jan 7, 2024",
    customer: "Protiong",
    category: "Maintenance Sales",
    status: "Paid",
    paidAmount: "$ 204.504,00",
    dueAmount: "$ 4.221,00",
    paymentDate: "",
    amount: "$ 208.725,00",
  },
  {
    id: "#GAU7879",
    date: "Jan 7, 2024",
    customer: "Protiong",
    category: "Maintenance Sales",
    status: "Paid",
    paidAmount: "$ 204.504,00",
    dueAmount: "$ 4.221,00",
    paymentDate: "",
    amount: "$ 208.725,00",
  },
  {
    id: "#GAU7879",
    date: "Jan 7, 2024",
    customer: "Protiong",
    category: "Maintenance Sales",
    status: "Paid",
    paidAmount: "$ 204.504,00",
    dueAmount: "$ 4.221,00",
    paymentDate: "",
    amount: "$ 208.725,00",
  },
  {
    id: "#GAU7879",
    date: "Jan 7, 2024",
    customer: "Protiong",
    category: "Maintenance Sales",
    status: "Paid",
    paidAmount: "$ 204.504,00",
    dueAmount: "$ 4.221,00",
    paymentDate: "",
    amount: "$ 208.725,00",
  },
  {
    id: "#GAU7879",
    date: "Jan 7, 2024",
    customer: "Protiong",
    category: "Maintenance Sales",
    status: "Paid",
    paidAmount: "$ 204.504,00",
    dueAmount: "$ 4.221,00",
    paymentDate: "",
    amount: "$ 208.725,00",
  },

];

const InvoiceRow = ({ invoice }) => (
  <tr>
    <td>
      <p className={styles.employeeID}>{invoice.id}</p>
    </td>
    <td>{invoice.date}</td>
    <td>{invoice.customer}</td>
    <td>{invoice.category}</td>
    <td className={styles.statusTd}>
      <p className={`${styles.tableContent} ${styles.statusPaid}`}>{invoice.status}</p>
    </td>
    <td>{invoice.paidAmount}</td>
    <td>{invoice.dueAmount}</td>
    <td>{invoice.paymentDate}</td>
    <td>{invoice.amount}</td>
  </tr>
);

export default function InvoiceSummary() {
  const summaryContent = <BarChart2 />;
  
  const invoiceContent = (
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
            <th>DATE</th>
            <th>CUSTOMER</th>
            <th>CATEGORY</th>
            <th>STATUS</th>
            <th>PAID AMOUNT</th>
            <th>DUE AMOUNT</th>
            <th>PAYMENT DATE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <InvoiceRow key={index} invoice={invoice} />
          ))}
        </tbody>
      </table>
      <div className={styles.tableBottom}>
        <p>
          Showing 1 to {invoices.length} of {invoices.length} entries
        </p>
      </div>
    </div>
  );

  const tabs = [
    { label: "Summary", content: summaryContent },
    { label: "Invoices", content: invoiceContent },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Invoice Summary</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <DateFilter />
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Report : </pre>
          <p>
            <b>Invoice Summary</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Duration : </pre>
          <p>
            <b>Jan-2024 to Dec-2024</b>
          </p>
        </div>
      </div>
      <div className={styles.verticalContainer}>
        <div className={styles.item}>
          <pre>Total Invoice :</pre>
          <p>
            <b>$ 328.125,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Paid :</pre>
          <p>
            <b>$ 15.893,00</b>
          </p>
        </div>
        <div className={styles.item}>
          <pre>Total Due :</pre>
          <p>
            <b>$ 312.232,00</b>
          </p>
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}
