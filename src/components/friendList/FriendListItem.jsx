import propTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={`${css.status} ${css.status_onLine}`}></span>
      ) : (
        <span className={css.status}></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnLine: propTypes.bool,
};

export default FriendListItem;
