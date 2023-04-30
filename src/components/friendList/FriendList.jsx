import propTypes from 'prop-types';
import FriendItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.item}>
            <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};

export default FriendList;
