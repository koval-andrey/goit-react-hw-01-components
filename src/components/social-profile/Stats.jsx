import PropTypes from "prop-types";
import styles from "./Stats.module.css";

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.designation}>Followers</span>
        <span className={styles.value}>{followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.designation}>Views</span>
        <span className={styles.value}>{views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.designation}>Likes</span>
        <span className={styles.value}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
