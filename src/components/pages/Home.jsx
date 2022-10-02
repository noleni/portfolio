import DownArrow from "../atoms/SVG/DownArrow";

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['home']}>
      <section>
          <div>
            <p>Bonjour, je suis</p>
            <h1>Marine Ramillon</h1>
            <h2>Développeuse web à la recherche d'un emploi  🚀✨</h2>
          </div>
          <div className={styles.projects}>
            <p>Mes projets</p>
            <DownArrow className={styles['down-effect']} width={32} height={32} />
          </div>
      </section>
    </div>
  );
};

export default Home;
