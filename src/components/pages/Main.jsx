import React, { useEffect, useRef } from 'react';


import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Pro from '../sections/ProfessionalExp';

import '../_settings/_variables.scss';
import styled from 'styled-components';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const MainStyle = styled.main`

    padding: 0 20px;

    .title {
    font-family: var(--title);
    color: var(--dark-blue);
    font-size: 28px;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 22px;

    &-big {
      font-family: var(--title);
      font-size: 48px;
      margin: 0;
      text-align: center;
    }
  }

  .section-title {
    color: var(--dark-blue);
    font-family: var(--title);
    font-size: 18px;

    @media(min-width: 768px) {
      &.small {
        display: none;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 120px;
      height: 1.2px;
      background-color: var(--dark-blue);
      transform: translateY(17px) translateX(4px);
    }
  }

  .btn-contact {
    font-size: 22px;
    margin: 0 auto;
    width: 100%;

    &-link {
      width: 100%;
      padding: 0;
    }
  }

  @media(min-width: 576px) {

    padding: 0 50px;
    min-height: 100vh;

    .title {
      font-size: 38px;
      text-align: start;

      &-big {
        font-size: 58px;
        text-align: start;
      }
    }

    .btn-contact {
      margin: 0;
      width:auto;
    }
  }

  @media(min-width: 764px) {

    padding: 0 110px;
    min-height: 100vh;

    .title {
      font-size: 42px;
      text-align: start;

      &-big {
        font-size: 66px;
        text-align: start;
      }
    }
  }
`;

const Main = () => {

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const proRef= useRef(null);
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
    scrollEffect(homeRef.current, 0.4, 0.8)
  }, []);

  useEffect(() => {
    scrollEffect(aboutRef.current, 0.4, 0.8)
  }, []);

  useEffect(() => {
    scrollEffect(projectRef.current, 0.4, 0.8)
  }, []);

  useEffect(() => {
    scrollEffect(contactRef.current, 0.4, 0.8)
  }, []);

  useEffect(() => {
    scrollEffect(projectRef.current, 0.4, 0.8)
  }, [])

  return (
    <MainStyle>
      <Home
        ref={homeRef}
        titleBigClass={'title-big'}
        titleClass={'title'}
        projectsClass={'projects'}
        btnClass={'btn-contact'}
        btnLinkClass={'btn-contact-link'}
      />
      <About
        ref={aboutRef}
        presentationClass={'presentation'}
      />
      <Pro ref={proRef}/>
      <Projects ref={projectRef}/>
      <Contact ref={contactRef} />
    </MainStyle>
  );
};

export default Main;
