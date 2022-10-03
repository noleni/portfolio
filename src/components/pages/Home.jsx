import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal'

import TechList from "../TechList";
import More from '../More';

import './Home.scss';


const Home = () => {

  ScrollReveal().reveal('#about',{ delay: 500 });


  return (
    <div className='home'>
      <section >
        <div>
          <p>Bonjour, je suis</p>
          <h1>Marine Ramillon</h1>
          <h2>Développeuse web en quête d'opportunités !  🚀✨</h2>
        </div>
        <More
          className="projects"
          arrowClassName="down-effect"
          text="Pour en savoir plus">
        </More>
      </section>
      <section id="about" className='load-hidden'>
          <div>
            <p>à propos de moi</p>
          </div>
          <div>

            <p className='presentation'>J'ai travaillé pendant près de <strong>10 ans dans le secteur culturel</strong>, à Paris, en banlieue parisienne... et en Nouvelle-Zélande !
            Je m'occupais particulièrement de la billetterie, des stratégies de développement de ventes et de l'analyse statistique de fréquentation.
            <strong>Fin 2021</strong>, j'ai quitté mon poste à la Cinémathèque française pour <strong>me consacrer exclusivement au développement web</strong>.
            J'ai commencé à travailler de mon côté grâce à plusieurs ressources en ligne, puis, j'ai suivi la formation du Wagon Paris au printemps.
            J'y ai appris à travailler en équipe, dompter git et le terminal et user des bonnes pratiques. Aujourd'hui, je pousse mon apprentissage sur React (que j'adore)
            et je cherche à rejoindre une équipe pour utiliser mes nouvelles compétences au service d'un projet concret et ambitieux.
            </p>
            <TechList height={50} width={50} />
          </div>
          <More
            className="projects"
            arrowClassName="down-effect"
            text="Mes projets">
          </More>
          <div>

          </div>
      </section>
    </div>
  );
};

export default Home;
