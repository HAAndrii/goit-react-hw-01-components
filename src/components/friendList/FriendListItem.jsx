import propTypes from 'prop-types';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className="status"></span>
      ) : (
        <span className="status status2"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnLine: propTypes.bool,
};

export default FriendListItem;
