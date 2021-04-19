import PropTypes from 'prop-types';
import styles from './FriendsLists.module.css';
import FriendsItem from './FriendsItem';

function FriendsLists( {friends} ) {
  return (
    <ul className={styles.friendsList}>
    {friends.map(item => (
        <FriendsItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          name={item.name}
        />
      ))}
    </ul>
  );
}

FriendsLists.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendsLists;
