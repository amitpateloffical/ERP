import React from "react";
import styles from "./Task.module.css";

const Task = ({ task }) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.status}>
        <span className={styles[task.status.toLowerCase()]}>{task.status}</span>
      </div>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.details}>
        <span className={styles.cart}>🛒 {task.cart}</span>
        <span className={styles.network}>🔗 {task.network}</span>
        <img src={task.avatar} alt="avatar" className={styles.avatar} />
      </div>
    </div>
  );
};

export default Task;
