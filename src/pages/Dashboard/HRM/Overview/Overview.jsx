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
  FaUsers,
  FaUserFriends,
  FaBriefcase,
  FaTasks,
  FaFolderOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaRunning,
  FaCheckCircle,
} from "react-icons/fa";
import CardComponent from "../../../../Components/statusCards/CardComponent";
import styles from "./Overview.module.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
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
      <div className={styles.CalContainer}>
        {/* <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        /> */}
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            events={[
              // { title: "All Day Event", date: "2024-06-01" },
              // { title: "Long Event", start: "2024-06-07", end: "2024-06-10" },
              // { title: "Conference", start: "2024-06-03", end: "2024-06-05" },
              // { title: "Meeting", date: "2024-06-04T10:30:00" },
              // { title: "Lunch", date: "2024-06-04T12:00:00" },
              // { title: "Birthday Party", date: "2024-06-04T07:00:00" },
              {
                title: "Click for Google",
                url: "http://google.com/",
                date: "2024-06-28",
              },
            ]}
            height="auto"
            contentHeight="auto"
          />
      </div>

      <div className={styles.rightDiv}>
        <div className={styles.rightMini}>
          <h5>Staff </h5>
          <div className={styles.miniContainer}>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#c06bd6",
                    borderRadius: "23%",
                  }}
                >
                  <FaUsers className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Total Staff</h6>
                <h6 className={styles.textPurple}>15</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "green",
                    borderRadius: "23%",
                  }}
                >
                  <FaUserTie className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Total Employee</h6>
                <h6 className={styles.textGreen}>7</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#e06c28",
                    borderRadius: "23%",
                  }}
                >
                  <FaUserFriends className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Total Client</h6>
                <h6 className={styles.textGreen1}>8</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightMini}>
          <h5>Jobs </h5>
          <div className={styles.miniContainer}>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#c06bd6",
                    borderRadius: "23%",
                  }}
                >
                  <FaBriefcase className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Total Jobs</h6>
                <h6 className={styles.textPurple}>4</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "green",
                    borderRadius: "23%",
                  }}
                >
                  <FaTasks className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Active Jobs</h6>
                <h6 className={styles.textGreen}>4</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#e06c28",
                    borderRadius: "23%",
                  }}
                >
                  <FaFolderOpen className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Inactive Jobs</h6>
                <h6 className={styles.textGreen1}>0</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightMini}>
          <h5>Training </h5>
          <div className={styles.miniContainer}>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#c06bd6",
                    borderRadius: "23%",
                  }}
                >
                  <FaChalkboardTeacher className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Total Training</h6>
                <h6 className={styles.textPurple}>2</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "green",
                    borderRadius: "23%",
                  }}
                >
                  <FaUserGraduate className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Trainer</h6>
                <h6 className={styles.textGreen}>4</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#e06c28",
                    borderRadius: "23%",
                  }}
                >
                  <FaRunning className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Active Training</h6>
                <h6 className={styles.textGreen1}>1</h6>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.leftIvEcard}>
                <span
                  style={{
                    padding: "12%",
                    backgroundColor: "#e06c28",
                    borderRadius: "23%",
                  }}
                >
                  <FaCheckCircle className={styles.icon} />
                </span>
              </div>
              <div className={styles.rightIvEcard}>
                <h6>Done Training</h6>
                <h6 className={styles.textGreen1}>1</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lastContainer}>
        <div className={styles.leftColumn}>
          <h5>Announcement List</h5>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>START DATE</th>
                <th>END DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sports Scream</td>
                <td>Jul 21, 2021</td>
                <td>Jul 21, 2021</td>
              </tr>
              <tr>
                <td>My New Businesss</td>
                <td>Jul 21, 2021</td>
                <td>Jul 21, 2021</td>
              </tr>
              <tr>
                <td>WE WANT TO EARN YOUR DEEPEST TRUST.</td>
                <td>Jul 21, 2021</td>
                <td>Jul 21, 2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.rightColumn}>
          <h5>Meeting schedule</h5>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Event Related</td>
                <td>Jan 18, 2024</td>
                <td>12:20 PM</td>
              </tr>
              <tr>
                <td>New Technology</td>
                <td>Feb 24, 2024</td>
                <td>12:26 PM</td>
              </tr>
              <tr>
                <td>Meeting: Weekly Team Meeting</td>
                <td>Mar 22, 2024</td>
                <td>7:29 PM</td>
              </tr>
              <tr>
                <td>Marketing Campaign Review</td>
                <td>Apr 21, 2024</td>
                <td>6:10 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
