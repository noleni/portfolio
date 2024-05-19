import React, { useState } from 'react';
import styled from 'styled-components';

import TechList from "../TechList";
import Button from '../UI/Button';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AboutStyle = styled.section`
  margin: 0 0 60px 0px;
  background: linear-gradient(120deg, rgb(250, 69, 81), rgb(255, 152, 159));

  .about-content {
    padding: 20px 60px;

  .pic-n-tech {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4px 0 0 4px;
    margin-top: 12px;
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
      border-radius: 4px;
      width: 200px;
      height: 200px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      background-color: var(--off-white);
    }

    img {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 100%;
      height: 100%;
      -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
      filter: grayscale(50%);
      border: 1px solid var(--neon-pink);
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

  const paragraph = `Je développe des applications web et mobiles depuis 2022. Après une carrière dans le secteur marketing et culturel,
  je me suis reconvertie dans le développement dans l'optique de créer des outils numériques intuitifs, accessibles et répondants aux besoins des utilisateurs.
  Après un passage au sein du pôle User Care de Rakuten France, je développe actuellement des applications de data visualisation chez Daily d'initiés.`;


  return (
    <AboutStyle id="about" ref={ref}>
      <div className='about-content'>
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

      <div className='pic-n-tech'>
        <ProfilPicStyle>
          <div className='img-border'>
            <img src={process.env.PUBLIC_URL +`images/profil.jpg`} alt="profil" />
          </div>
        </ProfilPicStyle>
        <TechList />
      </div>
      </div>
    </AboutStyle>
  )
});

export default About;
