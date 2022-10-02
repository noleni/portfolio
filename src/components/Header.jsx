import Button from './UI/Button';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><a>à propos</a></li>
        <li><a>projets</a></li>
        <li><a>contact</a></li>
      </ul>
      <Button type="button">CV</Button>
    </div>
  )
};

export default Header;
