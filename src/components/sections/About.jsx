import React, { useState } from 'react';
import styled from 'styled-components';

import More from "../More";
import TechList from "../TechList";
import Button from '../UI/Button';


const AboutStyle = styled.section`

  .pic-n-tech {
    display: flex;
    flex-direction: column;
    width: 100%;
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

  .large-device {
    display:none;
  }

  @media(min-width: 768px) {
    .small-device {
      display: none;
    }
    .large-device {
      display: flex;
    }

    .pic-n-tech {
      flex-direction: row;
    }
  }
`;

const ProfilPicStyle = styled.div`
    text-align: -webkit-center;
    margin: 22px 0 32px 0;

    .img-border {
      position: relative;
      border: 1px solid var(--neon-pink);
      border-radius: 4px;
      width: 160px;
      height: 160px;
    }

    img {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 100%;
      height: 100%;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      border: 1px solid var(--black);
      border-radius: 4px;
      margin: 0 60px 0 0;
      transition: all 200ms ease-in-out;
    }

  @media(min-width: 768px) {
    .img-border {
      width: 200px;
      height: 200px;
    }
  }
`


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
      <div className='pic-n-tech'>
        <ProfilPicStyle>
          <div className='img-border'>
            <img src={process.env.PUBLIC_URL +`images/profil.jpeg`} alt="profil" />
          </div>
        </ProfilPicStyle>
        <TechList />
      </div>
      <p className='section-title'>À propos</p>
      <div className='small-device'>
        {!showMore &&
          <>
            <p className='presentation opacity-down'>{paragraph.substring(0, 200)}
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
            <Button type="button" onClick={() => setShowMore(!showMore)}>- Voir moins</Button>
          </>
        }
      </div>

      <div className='large-device'>
        <p className='presentation'>{paragraph}</p>
      </div>

      <More
        className="projects"
        arrowClassName="down-effect"
        text="Mes projets">
      </More>
    </AboutStyle>
  )
};

export default About;
