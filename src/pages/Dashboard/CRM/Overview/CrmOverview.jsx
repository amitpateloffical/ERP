import React, { useEffect, useState } from "react";
import styles from "./CrmOverview.module.css";
import {
  FaUsers,
  FaHandshake,
  FaFileContract,
} from "react-icons/fa";

export default function CrmOverview() {
  const leadStatuses = [
    { label: "Draft", value: "36.36%" },
    { label: "Sent", value: "18.18%" },
    { label: "Open", value: "18.18%" },
    { label: "Revised", value: "18.18%" },
    { label: "Declined", value: "9.09%" },
  ];
  const dealStatuses = [
    { label: "Initial Contact", value: "40.36%" },
    { label: "Qualification", value: "20.18%" },
    { label: "Meeting", value: "35.18%" },
    { label: "Proposal", value: "10.18%" },
    { label: "Close", value: "60.09%" },
  ];

  const latestContractData = [
    {
      id: "#CON1234",
      subject: "Website Redesign",
      client: "Acme Corp",
      project: "Redesign",
      contractType: "Fixed",
      contractValue: "$5000",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
    },
    {
      id: "#CON1235",
      subject: "SEO Optimization",
      client: "Beta LLC",
      project: "SEO",
      contractType: "Retainer",
      contractValue: "$2000",
      startDate: "2024-02-01",
      endDate: "2024-12-31",
    },
    {
      id: "#CON1236",
      subject: "App Development",
      client: "Gamma Ltd",
      project: "AppDev",
      contractType: "Time & Materials",
      contractValue: "$10000",
      startDate: "2024-03-01",
      endDate: "2024-09-30",
    },
    {
      id: "#CON1237",
      subject: "Cloud Migration",
      client: "Delta Inc",
      project: "Cloud",
      contractType: "Fixed",
      contractValue: "$8000",
      startDate: "2024-04-01",
      endDate: "2024-10-31",
    },
    {
      id: "#CON1238",
      subject: "Cybersecurity Audit",
      client: "Epsilon GmbH",
      project: "Audit",
      contractType: "Time & Materials",
      contractValue: "$6000",
      startDate: "2024-05-01",
      endDate: "2024-11-30",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Dashboard</h2>
      </div>
      <div className={styles.verticalContainer}>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "#c06bd6",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaUsers className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textPurple}>
                <b>Lead </b>
              </p>
            </div>
          </div>
          <div className={styles.value}>11</div>
        </div>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "green",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaHandshake className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen}>
                <b>Deal</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>11</div>
        </div>
        <div className={`${styles.card} ${styles.lead}`}>
          <div className={styles.cardLeft}>
            <span
              style={{
                padding: "5%",
                backgroundColor: "#e06c28",
                borderRadius: "33%",
                marginLeft: "2%",
              }}
            >
              <FaFileContract className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen1}>
                <b>Contract</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>11</div>
        </div>
      </div>
      <div className={styles.lastContainer}>
        <div className={styles.leftColumn}>
          <h5>Lead Status</h5>
          {leadStatuses.map((status, index) => (
            <div key={index} className={styles.status}>
              <span className={styles.label}>{status.label}</span>
              <span className={styles.percentage}>{status.value}</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: status.value }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rightColumn}>
          <h5>Deal Status</h5>
          {dealStatuses.map((status, index) => (
            <div key={index} className={styles.status}>
              <span className={styles.label}>{status.label}</span>
              <span className={styles.percentage}>{status.value}</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: status.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <h5>Latest Contract</h5>
        <div className={styles.reportTableContainer}>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>SUBJECT</th>
                <th>CLIENT</th>
                <th>PROJECT</th>
                <th>CONTRACT TYPE</th>
                <th>CONTRACT VALUE</th>
                <th>START DATE</th>
                <th>END DATE</th>
              </tr>
            </thead>
            <tbody>
              {latestContractData.map((contract, index) => (
                <tr key={index}>
                  <td>
                    <p className={styles.employeeID}>{contract.id}</p>
                  </td>
                  <td>{contract.subject}</td>
                  <td>{contract.client}</td>
                  <td>{contract.project}</td>
                  <td>{contract.contractType}</td>
                  <td>{contract.contractValue}</td>
                  <td>{contract.startDate}</td>
                  <td>{contract.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
