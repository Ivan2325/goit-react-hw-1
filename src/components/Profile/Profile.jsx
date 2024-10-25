// src/components/Profile.js

import React from "react";
import PropTypes from "prop-types";
import s from '../Profile/Profile.module.css' ;
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img src={image} alt="User avatar" className={s.profileAvatar} />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};

export default Profile;
