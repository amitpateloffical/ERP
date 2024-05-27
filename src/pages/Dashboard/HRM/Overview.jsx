import React from "react";
// import styles from "./Overview.module.css";
import {
  FaUser,
  FaUserTie,
  FaFileInvoice,
  FaFileAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaWallet,
  FaCashRegister,
} from "react-icons/fa";
import CardComponent from "./CardComponent";
import styles from "./Overview.module.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

const Dashboard = () => {
  const InvoiceWeeklyContent = (
    <div style={{ marginTop: "0%" }}>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Bill Generated</pre>
        </div>
        <p className={styles.textGreen}>$ 0.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Paid</pre>
        </div>
        <p className={styles.textGreen}>$ 0.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Due</pre>
        </div>
        <p className={styles.textGreen}>$ 0.00</p>
      </div>
    </div>
  );
  const InvoiceMonthlyContent = (
    <div style={{ marginTop: "0%" }}>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Bill Generated</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Paid</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
      <div className={styles.statisticsDiv}>
        <div className={styles.statisticsDivLeft}>
          <p>
            <b>Total</b>
          </p>
          <pre>Due</pre>
        </div>
        <p className={styles.textGreen}>$ 10.00</p>
      </div>
    </div>
  );

  const tabs1 = [
    { label: "Invoices Weekly Statistics", content: InvoiceWeeklyContent },
    { label: "Invoices Monthly Statistics", content: InvoiceMonthlyContent },
  ];
  const tabs2 = [
    { label: "Bills Weekly Statistics", content: InvoiceWeeklyContent },
    { label: "Bills Monthly Statistics", content: InvoiceMonthlyContent },
  ];

 const locales = {
   "en-US": enUS,
 };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: "Rangwali Holi",
      allDay: true,
      start: new Date(2024, 4, 8),
      end: new Date(2024, 4, 8),
    },
    // Add more events here
  ];
  return (
    <div className={styles.gridContainer}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Dashboard</h2>
      </div>
      <div className={styles.fullWidthContainer}>
        <CardComponent />
      </div>
      {/* <div className={styles.fullWidthContainer}>
        <Calendar />
      </div> */}

      <div className="app-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
