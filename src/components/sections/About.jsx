import React, { useState } from 'react';
import styled from 'styled-components';

import TechList from "../TechList";
import Button from '../UI/Button';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutStyle = styled.section`
  margin-bottom: 60px;

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
    transition: all 0.5s ease-in-out;
  }

  .large-device {
    display:none;
  }

  .small-device {
    text-align: center;
  }

  .btn-show-more {
    width: 100%;
  }

  .presentation {
    text-align: left;

  }

  @media(min-width: 576px) {
    .pic-n-tech {
      flex-direction: row;
    }
  }

  @media(min-width: 768px) {
    .small-device {
      display: none;
    }
    .large-device {
      display: flex;
    }
  }
`;

const ProfilPicStyle = styled.div`
    text-align: -webkit-center;
    margin: 0 0 32px 0;

    .img-border {
      position: relative;
      border: 1px solid var(--neon-pink);
      border-radius: 4px;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
    }

    img {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 100%;
      height: 100%;
      -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      border: 1px solid var(--black);
      border-radius: 4px;
      margin: 0 60px 0 0;
      transition: all 200ms ease-in-out;
    }

  @media(min-width: 768px) {
    .img-border {
      width: 240px;
      height: 240px;
    }
  }
`;


const About = React.forwardRef((props, ref) => {

  const [showMore, setShowMore] = useState(false);

  const paragraph = `Je suis devenue développeuse après une reconversion professionnelle. D'abord passionée d'art et de cinéma,
  j'ai travaillé pendant presque 10 ans auprès des publics culturels. De la médiation à la billetterie en passant par les stratégies marketing,
  j'ai vite pris goût pour les outils web dans le cadre de mes différents métiers. Fin 2021, j'ai décidé de franchir un cap :
  de simple utilisatrice de ces outils, j'allais tenter de les penser et les fabriquer moi-même ! J'ai donc quitté mon poste de responsable
  billetterie à la Cinémathèque française et ai commencé à apprendre JavaScript "vanilla" grâce à plusieurs
  ressources en ligne (OpenClassroom, JSdeZero, CodeWars). En avril 22, je rejoignais la formation du Wagon Paris.
  J'y ai appris Ruby et Rails, la POO et l'essentiel des bonnes pratiques. A l'issue du bootcamp, j'avais déployé en équipe de 4 un premier MVP
  d'une application dédiée aux amateurs d'expositions.
  Mon apprentissage s'est poursuivi en solitaire sur Udemy avec la découverte lumineuse de React. Ce portfolio m'a d'ailleurs servi d'exercice dans l'utilisation
  de cette librairie.
  Je suis depuis novembre 22 employée par Rakuten France en tant que développeuse Full Stack. J'y développe des projets en JavaScript (React
  et vanilla pour le front, Node et Express côté back).
  Je poursuis par ailleurs mon apprentissage en solo et continue de développer des projets personnels. Mes objectifs restent intacts : progresser
  et proposer des outils intuitifs, agréables et pensés pour leurs utilisateurs.`

  return (
    <AboutStyle id="about" ref={ref}>
      <div className='pic-n-tech'>
        <ProfilPicStyle>
          <div className='img-border'>
            <img src={process.env.PUBLIC_URL +`images/profil.jpg`} alt="profil" />
          </div>
        </ProfilPicStyle>
        <TechList />
      </div>
      <p className='section-title'>01. À propos</p>
      <div className='small-device'>
        {!showMore &&
          <p className='presentation opacity-down'>{paragraph.substring(0, 400)}
            <span className='masked'></span>
          </p>
        }
        {showMore && <p className='presentation'>{paragraph}</p> }
        <Button
          className="btn-show-more"
          type="button"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? "Lire plus" : "Voir moins"}
        </Button>
      </div>

      <p className='presentation large-device'>{paragraph}</p>

    </AboutStyle>
  )
});

export default About;
