// NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <FaExclamationTriangle className={styles.notFoundIcon} />
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
