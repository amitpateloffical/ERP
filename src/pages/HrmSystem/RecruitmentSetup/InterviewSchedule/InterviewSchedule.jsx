import React from "react";
import styles from "../../HRMS.module.css";
import style from "./InterviewSchedule.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
export default function InterviewSchedule() {
  return (
    <div className={styles.container}>
      <div className={styles.fullWidthContainer}>
        <h2 className={styles.textGreen}>Manage Interview Schedule</h2>
      </div>
      <div className={style.lrContainer} style={{ flex: "2" }}>
        <di className={style.leftDiv}>
          <h5>Calender</h5>
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
        </di>
        <di className={style.rightDiv}>
          <h5>Schedule List</h5>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <div>
                <p className={style.cardText}>Highly Competitive Fashion Jobs</p>
                <pre>Candice</pre>
                <p>Feb 17, 2023 11:35 AM</p>
              </div>
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
            </div>
            <div className={style.card}>
              <div>
                <p className={style.cardText}>Highly Competitive Fashion Jobs</p>
                <pre>Sophia Johnson</pre>
                <p>Feb 22, 2023 11:35 AM</p>
              </div>
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
            </div>
          </div>
        </di>
      </div>
    </div>
  );
}
