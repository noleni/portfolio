import React, { useRef, useEffect } from 'react';
import sr from 'scrollreveal';

import ReactSvg from "./atoms/SVG/React";
import HtmlSvg from "./atoms/SVG/HtmlSvg";
import JavascriptSvg from "./atoms/SVG/JavaScriptSvg";
import RubySvg from "./atoms/SVG/RubySvg";
import RailsSvg from "./atoms/SVG/RailsSvg";

import './TechList.scss';

const TechList = (props) => {

  const techList = [
    <HtmlSvg />,
    <JavascriptSvg />,
    <ReactSvg />,
    <RubySvg />,
    <RailsSvg />,
  ]

  const sectionTwo = useRef(null);
  // const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }
    sr().reveal(sectionTwo, config)
    // ScrollReveal().reveal('#about',{ delay: 50, duration: 600, origin: 'bottom', distance: '20px' });
  }, []);

  return (
    <ul ref={sectionTwo} className='tech-list'>
      {techList.map((item, i) =>
        (
          <li key={i}>{item}</li>
        )
      )}
    </ul>
  )
};

export default TechList
