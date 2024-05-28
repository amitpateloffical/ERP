import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 5000); // Redirect after 5 seconds

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Update countdown every second

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    }; // Cleanup timers if the component unmounts
  }, [navigate]);

  return (
    <div className={styles.notFound}>
      <FaExclamationTriangle className={styles.notFoundIcon} />
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>
      <p className={styles.redirectMessage}>
        You will be redirected to the homepage in {countdown} seconds.
      </p>
      <Link to="/dashboard" className={styles.homeLink}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
