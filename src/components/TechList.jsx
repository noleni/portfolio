import React, { useRef, useEffect } from 'react';
import sr from 'scrollreveal';

import ReactSvg from "./atoms/SVG/React";
import HtmlSvg from "./atoms/SVG/HtmlSvg";
import JavascriptSvg from "./atoms/SVG/JavaScriptSvg";
import RubySvg from "./atoms/SVG/RubySvg";
import RailsSvg from "./atoms/SVG/RailsSvg";
import CssSvg from "./atoms/SVG/CssSvg";
import HerokuSvg from "./atoms/SVG/HerokuSvg";
import FigmaSvg from "./atoms/SVG/FigmaSvg";
import SassSvg from "./atoms/SVG/SassSvg";
import StyledComponentsSVG from './atoms/SVG/StyledComponentsSVG';

import styled from 'styled-components';

const TechListStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid var(--neon-pink);
  padding: 8px 0;
  width: 100%;
  align-self: center;
  margin: auto;

@media(min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

@media(min-width: 764px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

const TechList = (props) => {

  const techList = [
    <HtmlSvg height={30} width={30} />,
    <JavascriptSvg height={30} width={30} />,
    <ReactSvg height={30} width={30} />,
    <RubySvg height={30} width={30} />,
    <RailsSvg height={30} width={30} />,
    <CssSvg height={30} width={30} />,
    <HerokuSvg height={30} width={30} />,
    <FigmaSvg height={30} width={30} />,
    <SassSvg height={30} width={30} />,
    <StyledComponentsSVG height={30} width={30} />
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
    <TechListStyle ref={sectionTwo} className='tech-list'>
      {techList.map((item, i) =>
        (
          <li key={i}>{item}</li>
        )
      )}
    </TechListStyle>
  )
};

export default TechList
