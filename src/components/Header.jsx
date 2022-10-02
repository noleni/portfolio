import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><p>A propos</p></li>
        <li><p>Projets</p></li>
        <li><p>Contact</p></li>
      </ul>
    </div>
  )
};

export default Header;
