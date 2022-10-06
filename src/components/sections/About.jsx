import React, { useState } from 'react';
import styled from 'styled-components';

import More from "../More";
import TechList from "../TechList";
import Button from '../UI/Button';


const AboutStyle = styled.section`
  .presentation {
    color: var(--black);
  }

  .opacity-down {
    background: var(--off-white);
    z-index: 1;
    position:relative;
  }

  .masked {
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    z-index: 2;
    background: -webkit-linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
    background: -moz-linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
    background: -o-linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
    background: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);
  }
`;


const About = (props) => {

  const [showMore, setShowMore] = useState(false);

  const paragraph = `J'ai travaillé pendant près de 10 ans dans le secteur culturel, à Paris, en banlieue parisienne... et en Nouvelle-Zélande !
  Je m'occupais particulièrement de la billetterie, des stratégies de développement de ventes et de l'analyse statistique de fréquentation.
  Fin 2021, j'ai quitté mon poste à la Cinémathèque française pour me consacrer exclusivement au développement web.
  J'ai commencé à travailler de mon côté grâce à plusieurs ressources en ligne, puis, j'ai suivi la formation du Wagon Paris au printemps.
  J'y ai appris à travailler en équipe, dompter git et le terminal et user des bonnes pratiques. Aujourd'hui, je pousse mon apprentissage sur React (que j'adore)
  et je cherche à rejoindre une équipe pour utiliser mes nouvelles compétences au service d'un projet concret et ambitieux.`

  return (
    <AboutStyle id="about">
      <div>
        <p className='section-title'>À propos de moi</p>
      </div>
      <div>
        {!showMore &&
          <>
            <p className='presentation opacity-down'>{paragraph.substring(0, 260)}
              <span className='masked'></span>
            </p>
            <Button className="btn-show-more" type="button" onClick={() => setShowMore(!showMore)}>
              + Voir plus
            </Button>
          </>
        }
        {showMore &&
          <>
            <p className='presentation'>{paragraph}</p>
            <button type="button" onClick={() => setShowMore(!showMore)}>- Voir moins</button>
          </>
        }
      </div>
      <TechList />
      <More
        className="projects"
        arrowClassName="down-effect"
        text="Mes projets">
      </More>
    </AboutStyle>
  )
};

export default About;
