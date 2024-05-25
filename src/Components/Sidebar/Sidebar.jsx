// import React, { useState, useCallback } from "react";
// import * as Icons from "react-icons/bi";
// import styles from "./Sidebar.module.css";
// import { sidebarConfig } from "./SidebarFunctions.jsx";
// import logo from "/vidyaGxp_logo.png";

// const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openChildDropdown, setOpenChildDropdown] = useState({});
//   const [activeItem, setActiveItem] = useState(null);

//   const toggleDropdown = useCallback((title) => {
//     setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === title ? null : title));
//     setOpenChildDropdown({}); // Reset open child dropdowns when opening a parent
//     setActiveItem(null); // Reset active item when opening a dropdown
//   }, []);

//   const toggleChildDropdown = useCallback((parentTitle, childTitle) => {
//     setOpenChildDropdown((prevOpenChildDropdown) => ({
//       ...prevOpenChildDropdown,
//       [parentTitle]: prevOpenChildDropdown[parentTitle] === childTitle ? null : childTitle,
//     }));
//     setActiveItem(null); // Reset active item when opening a child dropdown
//   }, []);

//   const handleClick = useCallback((title) => {
//     setActiveItem((prevActiveItem) => (prevActiveItem === title ? null : title));
//   }, []);

//   const renderLinks = (links, isChild = false, parentTitle = null) => {
//     return links.map((link, index) => {
//       const hasSubmenu = link.submenu && link.submenu.length > 0;
//       const isOpen = isChild
//         ? openChildDropdown[parentTitle] === link.title
//         : openDropdown === link.title;
//       const isActive = activeItem === link.title;
//       const Icon = Icons[link.icon] || Icons.BiGridAlt;

//       return (
//         <div
//           key={`${link.title}-${index}`}
//           className={isChild ? (hasSubmenu ? styles.childWithSubmenu : styles.childLink) : ""}
//         >
//           <a
//             className={`nav-link ${styles.navItem} ${isActive ? styles.active : ""} ${
//               !hasSubmenu ? styles.noChild : ""
//             }`}
//             onClick={() => {
//               if (hasSubmenu) {
//                 isChild ? toggleChildDropdown(parentTitle, link.title) : toggleDropdown(link.title);
//               } else {
//                 handleClick(link.title);
//               }
//             }}
//             href={`#${link.title}`}
//             aria-expanded={isOpen}
//           >
//             {link.icon && <Icon className={styles.icon} />} {link.title}
//             {hasSubmenu && (
//               <span className={styles.dropdownIcon}>
//                 {isOpen ? <Icons.BiChevronUp /> : <Icons.BiChevronDown />}
//               </span>
//             )}
//           </a>
//           {hasSubmenu && isOpen && (
//             <div className={`nav flex-column ${styles.dropdown}`}>
//               {renderLinks(link.submenu, true, link.title)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logoContainer}>
//         <img src={logo} alt="Logo" className={styles.logo} />
//       </div>
//       <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
//     </div>
//   );
// };

// export default React.memo(Sidebar);







// with navlinl
import React, { useState, useCallback } from "react";
import * as Icons from "react-icons/bi";
import styles from "./Sidebar.module.css";
import { sidebarConfig } from "./SidebarFunctions.jsx";
import logo from "/vidyaGxp_logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openChildDropdown, setOpenChildDropdown] = useState({});
  const [activeItem, setActiveItem] = useState(null);

  const toggleDropdown = useCallback((title) => {
    setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === title ? null : title));
    setOpenChildDropdown({}); // Reset open child dropdowns when opening a parent
    setActiveItem(null); // Reset active item when opening a dropdown
  }, []);

  const toggleChildDropdown = useCallback((parentTitle, childTitle) => {
    setOpenChildDropdown((prevOpenChildDropdown) => ({
      ...prevOpenChildDropdown,
      [parentTitle]: prevOpenChildDropdown[parentTitle] === childTitle ? null : childTitle,
    }));
    setActiveItem(null); // Reset active item when opening a child dropdown
  }, []);

  const handleClick = useCallback((title) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === title ? null : title));
  }, []);

  const renderLinks = (links, isChild = false, parentTitle = null) => {
    return links.map((link, index) => {
      const hasSubmenu = link.submenu && link.submenu.length > 0;
      const isOpen = isChild
        ? openChildDropdown[parentTitle] === link.title
        : openDropdown === link.title;
      const isActive = activeItem === link.title;
      const Icon = Icons[link.icon] || Icons.BiGridAlt;

      return (
        <div
          key={`${link.title}-${index}`}
          className={isChild ? (hasSubmenu ? styles.childWithSubmenu : styles.childLink) : ""}
        >
          {link.link ? (
            <NavLink
              to={link.link}
              className={`nav-link ${styles.navItem} ${isActive ? styles.active : ""} ${
                !hasSubmenu ? styles.noChild : ""
              }`}
              onClick={() => {
                if (hasSubmenu) {
                  isChild ? toggleChildDropdown(parentTitle, link.title) : toggleDropdown(link.title);
                } else {
                  handleClick(link.title);
                }
              }}
              aria-expanded={isOpen}
            >
              {link.icon && <Icon className={styles.icon} />} {link.title}
              {hasSubmenu && (
                <span className={styles.dropdownIcon}>
                  {isOpen ? <Icons.BiChevronUp /> : <Icons.BiChevronDown />}
                </span>
              )}
            </NavLink>
          ) : (
            <div
              className={`nav-link ${styles.navItem} ${isActive ? styles.active : ""} ${
                !hasSubmenu ? styles.noChild : ""
              }`}
              onClick={() => {
                if (hasSubmenu) {
                  isChild ? toggleChildDropdown(parentTitle, link.title) : toggleDropdown(link.title);
                } else {
                  handleClick(link.title);
                }
              }}
              aria-expanded={isOpen}
            >
              {link.icon && <Icon className={styles.icon} />} {link.title}
              {hasSubmenu && (
                <span className={styles.dropdownIcon}>
                  {isOpen ? <Icons.BiChevronUp /> : <Icons.BiChevronDown />}
                </span>
              )}
            </div>
          )}
          {hasSubmenu && isOpen && (
            <div className={`nav flex-column ${styles.dropdown}`}>
              {renderLinks(link.submenu, true, link.title)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
    </div>
  );
};

export default React.memo(Sidebar);
