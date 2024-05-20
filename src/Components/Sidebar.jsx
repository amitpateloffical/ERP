// src/components/Sidebar.jsx
import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="ERPGo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <a href="#" className={styles.active}>
              Dashboard
            </a>
          </li>
          <li className={styles.navItem}>Accounting</li>
          <li className={styles.navItem}>HRM</li>
          <li className={styles.navItem}>CRM</li>
          <li className={styles.navItem}>Project</li>
          <li className={styles.navItem}>POS</li>
          <li className={styles.navItem}>User Management</li>
          <li className={styles.navItem}>Products System</li>
          <li className={styles.navItem}>Support System</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
