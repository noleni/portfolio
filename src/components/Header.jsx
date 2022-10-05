import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';


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
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: flex-end;
    margin: 0px;
    list-style: none;
  }

  .btn-cv-large {
    display: block;
  }
  }
`

const MenuStyle = styled.aside`
  position:fixed;
  right: 0;
  z-index: 10;
  height: 100vh;
  width: 80%;
  background-color: var(--neon-pink);

  .ul-small {
    display: flex;
    flex-direction: column;
    padding-top: 120px;
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
          <button className='btn-cv-large' type="button">CV</button>
        </CSSTransition>
      }
      <button
        className="btn-small-nav"
        type="button"
        onClick={()=> setMenuOpen(!menuOpen)}>
          {menuOpen ? <>&#10005;</> : <>&#8801;</>}
        </button>
    </StyleLargeNav>
    {menuOpen &&
      <MenuStyle>
        <ul className='ul-small'>
          {navLinks.map(({url, name}, i) => (
            <li key={i}>
              <a onClick={() => setMenuOpen(false)} href={url}>{`0${i + 1} - ${name}`}</a>
            </li>
          ))}
        </ul>
      </MenuStyle>}
    </>
  )
};

export default Header;
