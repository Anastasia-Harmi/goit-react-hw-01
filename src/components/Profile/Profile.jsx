import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img className={styles.userPhoto} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.userTag}>@{tag}</p>
        <p className={styles.userLocation}>{location}</p>
      </div>

      <ul className={styles.itemFollowers}>
        <li className={styles.itemFollowersNumber}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.itemFollowersNumber}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.itemFollowersNumber}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
