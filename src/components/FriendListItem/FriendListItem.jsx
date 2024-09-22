import React from "react";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.wrapperListItem}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.nameListItemUser}>{name}</p>
      <p
        className={
          isOnline
            ? `${styles.status} ${styles.online}`
            : `${styles.status} ${styles.offline}`
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
