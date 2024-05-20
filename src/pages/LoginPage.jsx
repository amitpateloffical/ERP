// src/LoginPage.jsx
import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.illustrationLeft}>
          <div className={styles.illustrationBox}>
            <img
              src=".\vidyaGxp_logo.png"
              alt="Illustration"
              className={styles.illustrationImage}
            />
          </div>
        </div>
        <div className={styles.loginForm}>
          {/* <img src="/vidyaGxp_logo.png" alt="Company Logo" className={styles.companyLogo} /> */}
          <h2>Login</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <a href="#" className={styles.forgotPassword}>
            Forgot your password?
          </a>
          <button className={styles.loginButton}>Login</button>
          <div className={styles.userTypeButtons}>
            <button className={styles.userTypeButton}>Company</button>
            <button className={styles.userTypeButton}>Client</button>
            <button className={styles.userTypeButton}>User</button>
          </div>
        </div>
        <div className={styles.illustrationRight}>
          <div className={styles.illustrationBox}>
            <img
            //   src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149383351.jpg?size=626&ext=jpg&ga=GA1.1.1849876919.1716179656&semt=sph"
              src="/loginRight.png"
              alt="Illustration"
              className={styles.illustrationImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
