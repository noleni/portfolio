import React, { useEffect, useRef } from 'react';


import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

import '../_settings/_variables.scss';
import styled from 'styled-components';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const MainStyle = styled.main`

    padding: 0 20px;

  .title-big {
    font-family: var(--title);
    font-size: 48px;
    margin: 0;
    text-align: center;
  }

  .title {
    font-family: var(--title);
    color: var(--dark-blue);
    font-size: 28px;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 22px;
  }

  .section-title {
    color: var(--black);
    font-family: var(--title);
    font-size: 18px;

    @media(min-width: 768px) {
      &.small {
        display: none;
      }
    }
  }

  .btn-contact {
    font-size: 22px;
    margin: 0 auto;
    width: 100%;
  }

  @media(min-width: 576px) {

    padding: 50px;
    min-height: 100vh;

    .title-big {
      font-size: 58px;
      text-align: start;
    }

    .title {
      font-size: 38px;
      text-align: start;
    }

    .btn-contact {
      margin: 0;
      width:auto;
    }
  }

  @media(min-width: 764px) {

    padding: 0 100px 0 100px;
    min-height: 100vh;

    .title-big {
      font-size: 66px;
      text-align: start;
    }

    .title {
      font-size: 42px;
      text-align: start;
    }
  }
`;

const Main = () => {

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollEffect = (e, delay, duration) => {
    gsap.fromTo(
      e,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger : {
          trigger: e,
          start: "top center",
          end: "bottom center"
        }
      },
    )
  };

  useEffect(() => {
    scrollEffect(homeRef.current, 0.2, 0.6)
  }, []);

  useEffect(() => {
    scrollEffect(aboutRef.current, 0.2, 0.6)
  }, []);

  useEffect(() => {
    scrollEffect(projectRef.current, 0.2, 0.6)
  }, []);

  useEffect(() => {
    scrollEffect(contactRef.current, 0.2, 0.6)
  }, []);

  return (
    <MainStyle>
      <Home
        ref={homeRef}
        h1Class={'title-big'}
        h2Class={'title'}
        projectsClass={'projects'}
        btnClass={'btn-contact'}
      />
      <About
        ref={aboutRef}
        presentationClass={'presentation'}
      />
      <Projects ref={projectRef}/>
      <Contact ref={contactRef} />
    </MainStyle>
  );
};

export default Main;
