import propTypes from 'prop-types';
import FriendItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} className="item">
            <FriendItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
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
// id: propTypes.number.isRequired
export default FriendList;
