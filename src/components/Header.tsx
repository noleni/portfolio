import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Button from "./UI/Button";
import Social from "./Social";
import BurgerMenu from "./BurgerMenu";

import styled from "styled-components";

const navLinks = [
  {
    name: "À PROPOS",
    url: "/#about",
  },
  {
    name: "EXPERIENCES",
    url: "/#professional",
  },
  {
    name: "PROJETS",
    url: "/#projects",
  },
  {
    name: "CONTACT",
    url: "/#contact",
  },
];

const StyleLargeNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);

  .container {
    width: 80%;
    display: flex;
    padding-right: 22px;
    justify-content: end;
    align-items: center;
  }

  .ul-large {
    display: none;
  }

  .btn-cv-large {
    display: none;
  }

  .btn-small-nav {
    border: none;
    background-color: transparent;
    font-size: 62px;
  }

  @media (min-width: 768px) {
    .menu-btn_burger {
      display: none;
    }

    .ul-large {
      display: flex;
      align-items: end;
      margin-right: 22px;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: flex-end;

      a {
        font-weight: lighter;
      }
    }

    .btn-cv-large {
      display: block;
      height: fit-content;
    }
  }
`;

const MenuStyle = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 0%;
  visibility: hidden;
  position: fixed;
  right: 0;
  z-index: 2;
  height: 100vh;
  background-color: #f94a56;
  transition: all 0.2s ease-in-out;

  &.open {
    width: 80%;
    visibility: visible;
  }

  .ul-small-container {
    height: 100%;
    position: relative;
  }

  .ul-small {
    margin-left: -20px;
    height: 60%;
    margin-top: 60px;

    li {
      text-align: center;

      p {
        color: var(--celadon-2);
        margin-bottom: 0;
      }

      h4 {
        margin-top: 6px;
        margin-bottom: 0;
      }
    }
  }

  .social {
    position: absolute;
    bottom: 0;
    left: 44%;
    margin-top: 30px;
  }
`;

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const timeout = isMounted ? 1000 : 0;
  const fadeDownClass = isMounted ? "fadedown" : "";

  return (
    <>
      <StyleLargeNav>
        <div className="container">
          <ul className="ul-large">
            <TransitionGroup component={null}>
              {navLinks.map(({ url, name }, i) => (
                <CSSTransition
                  key={i}
                  classNames={fadeDownClass}
                  timeout={timeout}
                >
                  <li
                    key={i}
                    style={{ transitionDelay: `${isMounted ? i * 300 : 0}ms` }}
                  >
                    <a href={url}>{`0${i + 1} - ${name}`}</a>
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
          {isMounted && (
            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="btn-cv-large" type="button">
                  CV
                </Button>
              </a>
            </CSSTransition>
          )}
          <BurgerMenu
            menuState={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </StyleLargeNav>

      <MenuStyle className={menuOpen ? "open" : ""}>
        <div className="ul-small-container">
          <ul className="ul-small">
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <a onClick={() => setMenuOpen(false)} href={url}>
                  <p>{`0${i + 1}.`}</p>
                  <h4>{name}</h4>
                </a>
              </li>
            ))}
          </ul>
          <div className="social">
            <Social />
          </div>
        </div>
      </MenuStyle>
    </>
  );
};

export default Header;
