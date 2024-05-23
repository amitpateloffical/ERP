// import React, { useState } from "react";
// import styles from "./Sidebar.module.css";
// import { sidebarConfig } from "./SidebarFunctions.jsx";

// const Sidebar = () => {
//   const [openDropdowns, setOpenDropdowns] = useState({});

//   const toggleDropdown = (key) => {
//     setOpenDropdowns({
//       ...openDropdowns,
//       [key]: !openDropdowns[key],
//     });
//   };

//   const renderLinks = (links, isChild = false) => {
//     return links.map((link, index) => {
//       const hasSubmenu = link.submenu && link.submenu.length > 0;
//       const isChildWithSubmenu = isChild && hasSubmenu;

//       return (
//         <div key={index} className={isChildWithSubmenu ? styles.childWithSubmenu : (isChild ? styles.childLink : "")}>
//           <a
//             className={`nav-link ${styles.navItem}`}
//             onClick={() => hasSubmenu && toggleDropdown(link.title)}
//             href={`#${link.title}`}
//           >
//             {link.title}
//             {hasSubmenu && <span className={styles.dropdownIcon}>{openDropdowns[link.title] ? "-" : "+"}</span>}
//           </a>
//           {hasSubmenu && openDropdowns[link.title] && (
//             <div className={`nav flex-column ${styles.dropdown}`}>
//               {renderLinks(link.submenu, true)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logoContainer}>
//         <img src="./vidyaGxp_logo.png" alt="Logo" className={styles.logo} />
//       </div>
//       <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
//     </div>
//   );
// };

// export default Sidebar;

//2nd

// import React, { useState, useCallback } from "react";
// import * as Icons from "react-icons/bi"; // Import all Bi icons
// import styles from "./Sidebar.module.css";
// import { sidebarConfig } from "./SidebarFunctions.jsx";

// const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openChildDropdown, setOpenChildDropdown] = useState(null);

//   const toggleDropdown = useCallback((title) => {
//     setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === title ? null : title));
//   }, []);

//   const toggleChildDropdown = useCallback((title) => {
//     setOpenChildDropdown((prevOpenChildDropdown) =>
//       prevOpenChildDropdown === title ? null : title
//     );
//   }, []);

//   const renderLinks = (links, isChild = false) => {
//     return links.map((link, index) => {
//       const hasSubmenu = link.submenu && link.submenu.length > 0;
//       const isOpen = isChild ? openChildDropdown === link.title : openDropdown === link.title;
//       const Icon = Icons[link.icon] || Icons.BiGridAlt; // Default icon if not provided

//       return (
//         <div
//           key={`${link.title}-${index}`}
//           className={isChild ? (hasSubmenu ? styles.childWithSubmenu : styles.childLink) : ""}
//         >
//           <a
//             className={`nav-link ${styles.navItem} ${isOpen ? styles.active : ""}`}
//             onClick={() =>
//               hasSubmenu ? (isChild ? toggleChildDropdown : toggleDropdown)(link.title) : null
//             }
//             href={`#${link.title}`}
//             aria-expanded={isOpen}
//           >
//             {link.icon && <Icon className={styles.icon} />} {link.title}
//             {hasSubmenu && <span className={styles.dropdownIcon}>{isOpen ? "-" : "+"}</span>}
//           </a>
//           {hasSubmenu && isOpen && (
//             <div className={`nav flex-column ${styles.dropdown}`}>
//               {renderLinks(link.submenu, true)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logoContainer}>
//         <img src="./vidyaGxp_logo.png" alt="Logo" className={styles.logo} />
//       </div>
//       <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
//     </div>
//   );
// };

// export default React.memo(Sidebar);

//3rd

// import React, { useState, useCallback } from "react";
// import * as Icons from "react-icons/bi";
// import styles from "./Sidebar.module.css";
// import { sidebarConfig } from "./SidebarFunctions.jsx";

// const Sidebar = () => {
//   const [openDropdowns, setOpenDropdowns] = useState({});

//   const toggleDropdown = useCallback((title) => {
//     setOpenDropdowns((prevOpenDropdowns) => ({
//       ...prevOpenDropdowns,
//       [title]: !prevOpenDropdowns[title],
//     }));
//   }, []);

//   const renderLinks = (links, isChild = false) => {
//     return links.map((link, index) => {
//       const hasSubmenu = link.submenu && link.submenu.length > 0;
//       const isOpen = openDropdowns[link.title] || false;
//       const Icon = Icons[link.icon] || Icons.BiGridAlt;

//       return (
//         <div
//           key={`${link.title}-${index}`}
//           className={isChild ? (hasSubmenu ? styles.childWithSubmenu : styles.childLink) : ""}
//         >
//           <a
//             className={`nav-link ${styles.navItem} ${isOpen ? styles.active : ""}`}
//             onClick={() => hasSubmenu && toggleDropdown(link.title)}
//             href={`#${link.title}`}
//             aria-expanded={isOpen}
//           >
//             {link.icon && <Icon className={styles.icon} />} {link.title}
//             {hasSubmenu && <span className={styles.dropdownIcon}>{isOpen ? "-" : "+"}</span>}
//           </a>
//           {hasSubmenu && isOpen && (
//             <div className={`nav flex-column ${styles.dropdown}`}>
//               {renderLinks(link.submenu, true)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className={styles.sidebar}>
//       <div className={styles.logoContainer}>
//         <img src="./vidyaGxp_logo.png" alt="Logo" className={styles.logo} />
//       </div>
//       <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
//     </div>
//   );
// };

// export default React.memo(Sidebar);

// 4th

import React, { useState, useCallback } from "react";
import * as Icons from "react-icons/bi";
import styles from "./Sidebar.module.css";
import { sidebarConfig } from "./SidebarFunctions.jsx";

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
          <a
            className={`nav-link ${styles.navItem} ${isActive ? styles.active : ""}`}
            onClick={() => {
              if (hasSubmenu) {
                isChild ? toggleChildDropdown(parentTitle, link.title) : toggleDropdown(link.title);
              } else {
                handleClick(link.title);
              }
            }}
            href={`#${link.title}`}
            aria-expanded={isOpen}
          >
            {link.icon && <Icon className={styles.icon} />} {link.title}
            {hasSubmenu && (
              <span className={styles.dropdownIcon}>
                {isOpen ? <Icons.BiChevronUp /> : <Icons.BiChevronDown />}
              </span>
            )}
          </a>
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
        <img src="./vidyaGxp_logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={`nav flex-column nav-pills`}>{renderLinks(sidebarConfig)}</div>
    </div>
  );
};

export default React.memo(Sidebar);
