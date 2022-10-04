import More from "../More";
import TechList from "../TechList";


const About = (props) => {
  return (
    <>
    <section id="about">
      <div>
        <p>à propos de moi</p>
      </div>
      <div>
        <p className={props.presentationClass}>J'ai travaillé pendant près de <strong>10 ans dans le secteur culturel</strong>, à Paris, en banlieue parisienne... et en Nouvelle-Zélande !
          Je m'occupais particulièrement de la billetterie, des stratégies de développement de ventes et de l'analyse statistique de fréquentation.
          <strong>Fin 2021</strong>, j'ai quitté mon poste à la Cinémathèque française pour <strong>me consacrer exclusivement au développement web</strong>.
          J'ai commencé à travailler de mon côté grâce à plusieurs ressources en ligne, puis, j'ai suivi la formation du Wagon Paris au printemps.
          J'y ai appris à travailler en équipe, dompter git et le terminal et user des bonnes pratiques. Aujourd'hui, je pousse mon apprentissage sur React (que j'adore)
          et je cherche à rejoindre une équipe pour utiliser mes nouvelles compétences au service d'un projet concret et ambitieux.
        </p>
      </div>
    <TechList />
    <More
      className="projects"
      arrowClassName="down-effect"
      text="Mes projets">
    </More>
    </section>
    </>


  )
};

export default About;
