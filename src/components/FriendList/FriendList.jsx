import css from './friend-list.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const FriendList = ({ friends }) => {
  const elem = friends.map(friend => (
    <li className={css.item} key={friend.id}>
      <span className={friend.isOnline? css.online : css.offline}></span>
      <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
  return (
    <ul className={css.friend_list}>
  {elem}
</ul>
  )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;