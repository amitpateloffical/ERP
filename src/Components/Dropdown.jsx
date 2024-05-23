import React from "react";
// import styles from "./Dropdown.module.css";

const Dropdown = ({ isOpen, children }) => {
  return isOpen ? <ul className={styles.dropdown}>{children}</ul> : null;
};

export default Dropdown;
