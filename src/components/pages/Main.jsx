import React, {} from 'react';

import Home from '../sections/Home';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

import '../_settings/_variables.scss';
import styled from 'styled-components';

const MainStyle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

  section {
    scroll-snap-align: center;
    padding-bottom: 100px;
  }

  .projects {
    padding-top: 100px;
  }

  .title-big {
    font-family: var(--title);
    font-size: 48px;
    margin: 0;
    text-align: center;
  }

  .title {
    font-family: var(--title);
    font-size: 28px;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 22px;
  }

  .section-title {
    color: var(--off-white);
    font-family: var(--title);
    font-size: 18px;
    background-color: var(--neon-pink);
    padding: 0 10px;
    margin-bottom: 0;
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

  return (
    <MainStyle>
      <Home
        h1Class={'title-big'}
        h2Class={'title'}
        projectsClass={'projects'}
        btnClass={'btn-contact'}
      />
      <About
        presentationClass={'presentation'}
      />
      <Projects />
      <Contact />
    </MainStyle>
  );
};

export default Main;
