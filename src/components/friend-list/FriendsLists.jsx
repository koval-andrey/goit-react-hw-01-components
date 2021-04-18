import PropTypes from 'prop-tipes';
import styles from './FriendsLists.module.css';
import FriendsItem from './FriendsItem';
import './App.css';

function FriendsLists( {friends} ) {
  return (
    <ul className={styles.friendslist}>
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

FriendsLists.PropTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendsLists;
