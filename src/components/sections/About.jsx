import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// import More from "../More";
import TechList from "../TechList";
import Button from '../UI/Button';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



const AboutStyle = styled.section`
height: fit-content;

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
    margin: 0 0 32px 0;

    .img-border {
      position: relative;
      border: 1px solid var(--neon-pink);
      border-radius: 4px;
      width: 160px;
      height: 160px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
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


  const aboutRef = useRef(null);
  const textRef = useRef(null);

  const scrollEffect = (e, delay, duration) => {
    gsap.fromTo(
      e,
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
        scrollTrigger : {
          trigger: e,
          start: "top center",
          end: "bottom center"
        }
      },
    )
  };

  useEffect(() => {
    scrollEffect(aboutRef.current, 0.5, 0.5)
  }, []);


  const [showMore, setShowMore] = useState(false);

  const paragraph = `Je me forme au développement web depuis janvier 2022. J'ai commencé par JavaScript grâce à plusieurs
  ressources en ligne (OpenClassroom, JSdeZero, CodeWars), puis j'ai rejoint la formation du Wagon Paris au printemps.
  J'y ai appris Ruby et Rails, la POO et l'organisation du développement en équipe. Depuis cet été, je travaille sur React (que j'affectionne tout particulièrement).
  J'aimerais à présent rejoindre une équipe pour utiliser et améliorer ces compétences au service d'un projet concret et ambitieux.
  Avant de me lancer dans le développement web, j'étais responsable de la billetterie et de l'étude des publics de la Cinémathèque française.
  J'ai quitté mon poste par attrait pour le code et pour m'offrir de nouveaux challenges intellectuels.`

  return (
    <AboutStyle id="about" ref={aboutRef}>
      <div className='pic-n-tech'>
        <ProfilPicStyle>
          <div className='img-border'>
            <img src={process.env.PUBLIC_URL +`images/profil.jpg`} alt="profil" />
          </div>
        </ProfilPicStyle>
        <TechList />
      </div>
      <p className='section-title'>À propos</p>
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
          {!showMore ? "Voir plus" : "Voir moins"}
        </Button>
      </div>

      <p className='presentation large-device' ref={textRef}>{paragraph}</p>

      {/* <More
        className="projects"
        arrowClassName="down-effect"
        text="Mes projets">
      </More> */}
    </AboutStyle>
  )
};

export default About;
