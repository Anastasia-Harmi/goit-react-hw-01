import React from "react";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={isOnline ? "status online" : "status offline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
