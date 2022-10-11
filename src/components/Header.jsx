import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Button from './UI/Button';
import Social from './Social';

import styled from 'styled-components';


const navLinks = [
  {
    name: 'À PROPOS',
    url: '/#about',
  },
  {
    name: 'PROJETS',
    url: '/#projects',
  },
  {
    name: 'CONTACT',
    url: '/#contact',
  }
];

const StyleLargeNav = styled.nav`

  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  ${'' /* padding: 4px 50px; */}
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 15px rgba(0,0,0,0.06);
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

  @media(min-width: 768px) {

    .btn-small-nav {
      display: none;
    }

    .ul-large {
    display: flex;
    align-items: end;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-end;
    list-style: none;
  }

  .btn-cv-large {
    display: block;
    height: fit-content;
  }
  }
`

const MenuStyle = styled.aside`
  width: 0%;
  visibility: hidden;
  position:fixed;
  right: 0;
  z-index: 10;
  height: 100vh;
  background-color: rgba(247,31,102, 0.97);
  transition: all 0.2s ease-in-out;

  &.open {
    width: 80%;
    visibility: visible;
  }

  .ul-small {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-right: 12px;
    position: relative;
  }

  .social {
    position: absolute;
    bottom: 0;
    left: 40%;
  }
`

const Header = () => {

  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const timeout = isMounted ? 1000 : 0;
  const fadeDownClass = isMounted ? 'fadedown' : '';

  return (
    <>
    <StyleLargeNav>
      <div className='container'>
        <ul className='ul-large'>
          <TransitionGroup component={null}>
            {isMounted &&
              navLinks.map(({url, name}, i) => (
                <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                  <li key={i} style={{ transitionDelay: `${isMounted ? i * 300 : 0}ms` }}>
                    <a href={url}>{`0${i + 1} - ${name}`}</a>
                  </li>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
        {isMounted &&
          <CSSTransition classNames={fadeDownClass} timeout={timeout}>
            <Button className='btn-cv-large' type="button">CV</Button>
          </CSSTransition>
        }
        <Button
          className="btn-small-nav"
          type="button"
          onClick={()=> setMenuOpen(!menuOpen)}>
            {menuOpen ? <>&#10005;</> : <>&#8801;</>}
        </Button>
      </div>
    </StyleLargeNav>
    <MenuStyle className={menuOpen ? "open" : ""}>
      <ul className='ul-small'>
        {navLinks.map(({url, name}, i) => (
          <li key={i}>
            <a onClick={() => setMenuOpen(false)} href={url}><h4>{`0${i + 1} - ${name}`}</h4></a>
          </li>
        ))}
      </ul>
      <div className='social'>
        <Social />
      </div>
    </MenuStyle>
    </>
  )
};

export default Header;
