import PropTypes from 'prop-types';
import styles from './FriendsItem.module.css';

function FriendsItem( {avatar, name, isOnline} ) {
  return (


    <li className={styles.item}>
    {isOnline ? (<span className={styles.isOnline} width= "25"></span>) : 
    (<span className={styles.offline} width= "25"></span>) }
    <img src={avatar} className={styles.avatar} alt={name} width="50" />
    <p className={name}>{name}</p>
    </li>
  );
}

FriendsItem.defaultProps = {
    avatar:
      'https://webnull.info/attachments/fltdo8l-png.12440/',
  };

FriendsItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendsItem;
