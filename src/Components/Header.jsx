// src/components/Header.jsx
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.userInfo}>
          <span>Hi, Workdo!</span>
        </div>
        <div className={styles.languageSwitcher}>
          <button>English</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
