import SideBarLinks from "../SideBarLinks";
import DownArrow from "../atoms/SVG/DownArrow";

import styles from './Home.module.css';

const Home = () => {
  return (

      <div className={styles.home}>
        <p>Bonjour, je suis</p>
        <h2>Marine Ramillon</h2>
        <h3>Développeuse web à la recherche d'un emploi</h3>
        <p>Mes projets</p>
        <DownArrow className={styles['down-effect']} />
        <SideBarLinks />
      </div>

  )
};

export default Home;
