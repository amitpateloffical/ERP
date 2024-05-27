import React from "react";
import styles from "./CardComponent.module.css";

const users = [
  { name: "Mick Aston", imgSrc: "/avatar.png" },
  { name: "Protiong", imgSrc: "public/avatar.png" },
  { name: "Cooper Decker", imgSrc: "avatar.png" },
  { name: "Brianna Copeland", imgSrc: "null" },
  { name: "kjh donald", imgSrc: "null" },
  { name: "Emma Hopper", imgSrc: "avatar.png" },
  { name: "Tara Hicks", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },   
  { name: "Ralph Mercer", imgSrc: "avatar.png" },       
  { name: "test", imgSrc: "null" },
];


const CardComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <h5>Today's Not Clock In</h5>
      <div className={styles.userList}>
        {users.map((user, index) => (
          <div key={index} className={styles.userCard}>
            <div className={styles.userImage}>
              {user.imgSrc ? (
                <img src={"/avatar.png"} alt={user.name} />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
