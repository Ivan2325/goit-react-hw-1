import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={styles.item}>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
        <p className={isOnline ? styles.online : styles.offline}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </li>
    );
  };
  
  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  
  export default FriendListItem;
