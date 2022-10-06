import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Button from './UI/Button';

import styled from 'styled-components';
import Github from '../components/atoms/SVG/Github';
import Linkedin from '../components/atoms/SVG/Linkedin';


const navLinks = [
  {
    name: 'à propos',
    url: '/#about',
  },
  {
    name: 'projets',
    url: '/#projects',
  },
  {
    name: 'contact',
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
  background-color: rgba(251, 247, 242, 0.45);
  box-shadow: 0 0 15px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);

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
    width: 80%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-end;
    list-style: none;
  }

  .btn-cv-large {
    display: block;
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
  background-color: var(--neon-pink);
  transition: all 0.2s ease-in-out;

  &.open {
    width: 80%;
    visibility: visible;
  }


  .ul-small {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    padding-right: 12px;
  }

  .social {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 12px 0;
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
    </StyleLargeNav>
    <MenuStyle className={menuOpen ? "open" : ""}>
      <ul className='ul-small'>
        {navLinks.map(({url, name}, i) => (
          <li key={i}>
            <a onClick={() => setMenuOpen(false)} href={url}><h3>{`0${i + 1} - ${name}`}</h3></a>
          </li>
        ))}
      </ul>
      <div className='social'>
        <Github width={50} height={50} />
        <Linkedin width={50} height={50} />
      </div>
    </MenuStyle>
    </>
  )
};

export default Header;
