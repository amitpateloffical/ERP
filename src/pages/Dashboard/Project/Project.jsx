import React, { useEffect, useState } from "react";
import styles from "./Project.module.css";
import {
  FaMoneyBillWave,
  FaRegAddressCard,
  FaUsers,
  FaHandshake,
  FaFileContract,
  FaTasks,
  FaProjectDiagram,
} from "react-icons/fa";
import ProfitLineChart from "../../../Components/Charts/ProfitLineChart";
import VerticalBarChart from "../../../Components/Charts/VerticalBarChart";

export default function Project() {
  const chartData = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    invoices: [40, 55, 60, 80, 70, 50, 20, 30],
  };
  const leadStatuses = [
    { label: "In Progress", value: "36.36%" },
    { label: "On Hold", value: "10.78%" },
    { label: "Complete", value: "18.18%" },
    { label: "Canceled", value: "6%" },
  ];

  const latestContractData = [
    {
      name: "Conduct Process Analysis",
      endDate: "2024-06-01",
      status: "In Progress",
      img: "https://img.freepik.com/free-vector/colorful-letter-d-arrow-icon-logo-design_474888-2837.jpg?w=900&t=st=1716982417~exp=1716983017~hmac=5e78ad9eeded5304203945c73934ab6ab660668ac6b5cc535ca5eb992cc1a844",
      cost: "$10,000.00",
    },
    {
      name: "Develop Marketing Strategy",
      endDate: "2024-07-15",
      status: "Completed",
      img: "https://img.freepik.com/free-vector/gradient-colored-data-logo-template_23-2149197721.jpg?w=900&t=st=1716982447~exp=1716983047~hmac=5419538b36fb776a8c305611662b7e0f6606ca06a485d8ee02eceb9a132fe728",
      cost: "$8,500.00",
    },
    {
      name: "Redesign Website",
      endDate: "2024-06-30",
      status: "Pending",
      img: "https://img.freepik.com/free-vector/abstract-letter-d-logo_530521-1450.jpg?size=626&ext=jpg&ga=GA1.1.1849876919.1716179656&semt=ais_user",
      cost: "$15,000.00",
    },
    {
      name: "Implement CRM System",
      endDate: "2024-08-01",
      status: "In Progress",
      img: "https://img.freepik.com/premium-vector/d-letter-arrow-logo-icon-illustration-vector-design_598213-2678.jpg?w=900",
      cost: "$20,000.00",
    },
    {
      name: "Upgrade Network Infrastructure",
      endDate: "2024-05-25",
      status: "Completed",
      img: "https://img.freepik.com/free-vector/gradient-dd-logo-design_23-2149487889.jpg?w=900&t=st=1716982564~exp=1716983164~hmac=48af8c40967a3946d5c6fcd64c971b309334048c9310372ab398fa3e25ca207b",
      cost: "$12,000.00",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Project Dashboard</h2>
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
              <FaProjectDiagram className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textPurple}>
                <b>Projects </b>
              </p>
            </div>
          </div>
          <div className={styles.value}>16</div>
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
              <FaTasks className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen}>
                <b>Tasks</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>40</div>
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
              <FaMoneyBillWave className={styles.icon2} />
            </span>
            <div className={styles.contentLeft}>
              <pre>Total </pre>
              <p className={styles.textGreen1}>
                <b>Expense</b>
              </p>
            </div>
          </div>
          <div className={styles.value}>3</div>
        </div>
      </div>
      <div className={styles.lastContainer}>
        <div className={styles.leftColumn}>
          <h5>Project Status</h5>
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
          <h5>Tasks Overview</h5>
          <ProfitLineChart />
        </div>
      </div>
      <div className={styles.lastC}>
        <div className={styles.leftC}>
          <h5>Top Due Projects</h5>
          <div className={styles.reportTableContainer}>
            <table className={styles.dashboardTable}>
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Name</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {latestContractData.map((contract, index) => (
                  <tr key={index}>
                    <td>
                      <div className={styles.dueProjectsTd}>
                        <img style={{ width: "40px" }} src={contract.img} alt={contract.name} />
                        <div>
                          <p>
                            <b>{contract.name}</b>
                          </p>
                          <p className={styles.textGreen} style={{ fontSize: "0.9rem" }}>
                            {contract.cost}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{contract.endDate}</td>
                    <td>{contract.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.rightC}>
          <h5>Timesheet Logged Hours</h5>
          <VerticalBarChart
            xAxisCategories={chartData.labels}
            yAxisData={chartData.invoices}
            barColor="purple"
            chartLabel="Hours"
            chartHeight={450}
          />
        </div>
      </div>
      <div className={styles.fullWidthContainer}>
        <h5>Top Due Tasks</h5>
        <div style={{ marginTop: "0%" }}>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Task: </pre>
              <p>
                <b>Market Research</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Project </pre>
              <p>
                <b>Website Launch </b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Stage: </pre>
              <p>
                <b>Critical</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Completion</pre>
              <p>
                <b>0%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Task: </pre>
              <p>
                <b>Create Login Functionality</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Project: </pre>
              <p>
                <b>Website Builder</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Stage</pre>
              <p>
                <b>Critical</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Completion</pre>
              <p>
                <b>0%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Task: </pre>
              <p>
                <b>Implement Database Schema</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Project: </pre>
              <p>
                <b>Website Launch</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Stage</pre>
              <p>
                <b>Critical</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Completion</pre>
              <p>
                <b>0%</b>
              </p>
            </div>
          </div>
          <div className={styles.statisticsDiv}>
            <div className={styles.statisticsDivLeft}>
              <pre>Task: </pre>
              <p>
                <b>Implement Database Schema</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Task: </pre>
              <p>
                <b>Organize Project Kickoff Meeting</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Stage</pre>
              <p>
                <b>Critical</b>
              </p>
            </div>
            <div className={styles.statisticsDivLeft}>
              <pre>Completion</pre>
              <p>
                <b>0%</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
