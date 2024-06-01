import React from "react";

import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Pro from "../sections/ProfessionalExp";

import "../_settings/_variables.scss";
import styled from "styled-components";

const MainStyle = styled.main`
  .title {
    font-family: var(--title);
    color: var(--dark-green);
    font-size: 22px;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 22px;

    &-big {
      font-family: var(--title);
      font-size: 36px;
      margin: 0;
      text-align: center;
    }
  }

  .section-title {
    color: var(--dark-green);
    font-family: var(--title);
    font-size: 18px;

    @media (min-width: 768px) {
      &.small {
        display: none;
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 120px;
      height: 1.2px;
      background-color: var(--dark-green);
      transform: translateY(17px) translateX(4px);
    }
  }

  .btn-contact {
    font-size: 22px;
    margin: 0 auto;

    &-link {
      width: 100%;
      padding: 0;
    }
  }

  @media (min-width: 576px) {
    min-height: 100vh;

    .title {
      font-size: 38px;
      text-align: start;

      &-big {
        font-size: 58px;
        text-align: start;
      }
    }
  }

  @media (min-width: 764px) {
    min-height: 100vh;

    .title {
      font-size: 32px;
      text-align: start;

      &-big {
        font-size: 48px;
        text-align: start;
      }
    }
  }
`;

const Main = () => {
  return (
    <MainStyle>
      <Home
        titleBigClass={"title-big"}
        titleClass={"title"}
        projectsClass={"projects"}
        btnClass={"btn-contact"}
        btnLinkClass={"btn-contact-link"}
      />
      <About presentationClass={"presentation"} />
      <Pro />
      <Projects />
      <Contact />
    </MainStyle>
  );
};

export default Main;
