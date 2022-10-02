import styles from './SideBarLinks.module.css';
import Linkedin from './atoms/SVG/Linkedin';
import Github from './atoms/SVG/Github';

const SideBarLinks = () => {
  return (
    <div className={styles['sidebar-links-container']}>
      <ul className={styles['sidebar-links-list']}>
        <li>
          <a href={'https://www.linkedin.com/in/marine-ramillon'} target="_blank" rel="noreferrer">
            <Linkedin width={32} height={32} className={styles.bump}/>
          </a>
        </li>
        <li>
          <a href={'https://github.com/noleni'} target="_blank" rel="noreferrer">
            <Github width={32} height={32} className={styles.bump} />
          </a>
        </li>
      </ul>
    </div>
  )
};

export default SideBarLinks;
