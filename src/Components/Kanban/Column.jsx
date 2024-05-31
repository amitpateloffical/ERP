import React from "react";
import Task from "./Task";
import styles from "./Column.module.css";

const Column = ({ item }) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.status}>
        <span className={styles[item.status.toLowerCase()]}>{item.status}</span>
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.details}>
        <span className={styles.cart}>🛒 {item.cart}</span>
        <span className={styles.network}>🔗 {item.network}</span>
        <img src={item.avatar} alt="avatar" className={styles.avatar} />
      </div>
    </div>
  );
};

export default Column;
