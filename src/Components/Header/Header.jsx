import React, { useState } from "react";
import { FaUserCircle, FaChevronDown, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.userInfo} onClick={toggleUserDropdown}>
          <FaUserCircle size={24} className={styles.userIcon} />
          <span className={styles.userName}>Hello, User</span>
          <FaChevronDown className={styles.dropdownArrow} />
          {userDropdownOpen && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownItem}>
                <FaUser className={styles.dropdownIcon} />
                Profile
              </div>
              <div className={styles.dropdownItem} onClick={()=>navigate("/")}>
                <FaSignOutAlt className={styles.dropdownIcon} />
                Logout
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightSection}>
          <MdNotifications size={24} className={styles.notificationsIcon} />
          <div className={styles.languageSwitcher} onClick={toggleLanguageDropdown}>
            <button className={styles.languageButton}>
              English <FaChevronDown className={styles.dropdownArrow} />
            </button>
            {languageDropdownOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownItem}>English</div>
                <div className={styles.dropdownItem}>Spanish</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
